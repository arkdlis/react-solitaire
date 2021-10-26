import { CardData, CardValue } from "../domain/CardData.model";
import { cardArrayToStock } from "../domain/CardData.utils";
import { deckGenerator, deckShuffle } from "../domain/deckGenerator";
import { GameState } from "./GameState.model";

export function moveCardById(state: GameState, cardId: string, targetId: string): any {
  let matchRef: CardData | undefined;

  // closure fun with matchRef; recursively walks through pile; in case of match, sets matchRef and remove matched card as side effect;
  const traversePileAndTake = (node: CardData) => {
    if (node.cardOnTop) {
      if (node.cardOnTop.id === cardId) {
        matchRef = node.cardOnTop;
        node.cardOnTop = undefined;
      } else {
        traversePileAndTake(node.cardOnTop);
      }
    }
  }

  // closure fun with matchRef; recursively walks through pile; in case of match, put matchRef in target;
  const traversePileAndPut = (node: CardData | undefined) => {
    if (node) {
      if (node.id === targetId ) {
        if (node.cardOnTop !== undefined) throw Error('There is already a card on top!');
        node.cardOnTop = matchRef;
      } else {
        traversePileAndPut(node.cardOnTop);
      }
    }
  }

  // TODO: add waste

  // take card...
  for (let i of Object.keys(state.piles)) {
    if (state.piles[i]) {
      if (state.piles[i]!.id === cardId) {
        matchRef = state.piles[i];
        state.piles[i] = undefined;
        break;
      } else {
        traversePileAndTake(state.piles[i] as CardData);
      }
    }
  }

  if (!matchRef)
  for (let i of Object.keys(state.foundations)) {
    if (state.foundations[i]) {
      if (state.foundations[i]!.id === cardId) {
        matchRef = state.foundations[i];
        state.foundations[i] = undefined;
        break;
      } else {
        traversePileAndTake(state.foundations[i] as CardData);
      }
    }
  }

  if (!matchRef)
  for(let i = 0; i < state.waste.length; i++) {
    const card = state.waste[i];
    if (card.id === cardId) {
      matchRef = card;
      state.waste.splice(i, 1);
      break;
    }
  }

  // ... and put it in target place
  for (let i of Object.keys(state.piles)) {
    if (i === targetId) {
      state.piles[i] = matchRef;
    } else {
      traversePileAndPut(state.piles[i]);
    }
  }
  for (let i of Object.keys(state.foundations)) {
    if (i === targetId) {
      state.foundations[i] = matchRef;
    } else {
      traversePileAndPut(state.foundations[i]);
    }
  }
}

export function createGame(state: GameState) {
  const deck = deckShuffle(deckGenerator());
  
  let prevIndex = 0;
  Object.keys(state.piles).forEach((key, index) => {
    const nextIndex = prevIndex + index + 1;
    const cardsForPile = deck.slice(prevIndex, nextIndex);
    cardsForPile[0].revealed = true;
    state.piles[key] = cardArrayToStock(cardsForPile);
    prevIndex = nextIndex;
  });

  state.stock = deck.slice(prevIndex);
  state.waste = [];

  Object.keys(state.foundations).forEach((key, index) => {
    state.foundations[key] = undefined;
  })
}

export function reveal(state: GameState, cardId: string) {
  const traversePile = (node: CardData | undefined) => {
    if (node) {
      if (node.id === cardId ) {
        node.revealed = true;
      } else {
        traversePile(node.cardOnTop);
      }
    }
  }

  for (let i of Object.keys(state.piles)) {
    traversePile(state.piles[i]);
  }
}

export function draw(state: GameState) {
  if (state.stock.length) {
    const card = state.stock.shift() as CardData; // force CardData to be not undefines, we are checking if it exists in conditional above
    state.waste.push({...card, revealed: true});
  } else {
    state.stock = state.waste.map(card => ({...card, revealed: false}));
    state.waste = [];
  }
}

export function checkWin(state: GameState) {
  const traversePile = (node: CardData | undefined): boolean => {
    if (node) {
      if (!node.cardOnTop) {
        return node.value === CardValue.king;
      } else {
        return traversePile(node.cardOnTop);
      }
    } else {
      return false;
    }
  }

  return Object.keys(state.foundations).reduce((acc, currentKey) => {
    return acc && traversePile(state.foundations[currentKey]);
  }, true);
}
