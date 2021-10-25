import { CardData } from "../domain/CardData.model";
import { deckGenerator, deckShuffle } from "../domain/deckGenerator";
import { GameState } from "./GameState.model";

export function cardArrayToStock(cards: CardData[]) {
  if (!cards.length) throw Error('CardData[] can not be empty');
  const firstCard = cards.shift() as CardData;
  return cards.reduce((prevCard, nextCard) => {
    nextCard.cardOnTop = prevCard;
    return nextCard;
  }, firstCard);
}

export function moveCardById(state: GameState, cardId: string, targetId: string): any {
  let matchRef: CardData | undefined;

  // recursively walks through pile; in case of match, sets matchRef by closure and remove matched card as side effect;
  const traversePileTake = (node: CardData) => {
    if (node.cardOnTop) {
      if (node.cardOnTop.id === cardId) {
        matchRef = node.cardOnTop;
        node.cardOnTop = undefined;
      } else {
        traversePileTake(node.cardOnTop);
      }
    }
  }

  const traversePilePut = (node: CardData | undefined) => {
    if (node) {
      if (node.id === targetId ) {
        if (node.cardOnTop !== undefined) throw Error('There is already a card on top!');
        node.cardOnTop = matchRef;
      } else {
        traversePilePut(node.cardOnTop);
      }
    }
  }

  // TODO: add stacks and waste

  for (let i of Object.keys(state.piles)) {
    if (state.piles[i]) {
      if (state.piles[i]!.id === cardId) {
        matchRef = state.piles[i];
        state.piles[i] = undefined;
      } else {
        traversePileTake(state.piles[i] as CardData);
      }
    }
  }
  for (let i of Object.keys(state.piles)) {
    if (i === targetId) {
      state.piles[i] = matchRef;
    } else {
      traversePilePut(state.piles[i]);
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

