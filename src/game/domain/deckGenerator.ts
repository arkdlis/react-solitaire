import { CardData, CardValue } from "./CardData.model";
import { cardSigns, cardValues, cardValueSignsMap } from "./CardData.utils";

export function deckGenerator(): CardData[] {
  return cardSigns.reduce<CardData[]>((acc, symbol) => {
    const cardsOfSymbol = cardValues.map<CardData>((sign: CardValue) => {
      return {
        id: cardValueSignsMap[sign] + symbol,
        symbol: symbol,
        value: sign,
        revealed: false,
      };
    });
    return acc.concat(cardsOfSymbol);
  }, []);
}

export function deckShuffle(cards: CardData[]): CardData[] {
  return shuffle(cards);
}

// Fisher-Yates (aka Knuth) Shuffle - https://stackoverflow.com/a/2450976
function shuffle<T>(array: T[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
