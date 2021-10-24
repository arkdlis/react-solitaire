import { CardValue, CardSymbol, CardData } from "./CardData.model";


export const cardValues = [
  CardValue.ace,
  CardValue.two,
  CardValue.three,
  CardValue.four,
  CardValue.five,
  CardValue.six,
  CardValue.seven,
  CardValue.eight,
  CardValue.nine,
  CardValue.ten,
  CardValue.jack,
  CardValue.queen,
  CardValue.king,
];

export const cardSigns = [
  CardSymbol.clubs,
  CardSymbol.spades,
  CardSymbol.hearts,
  CardSymbol.diamonds,
];

export const cardValueSignsMap = {
  [CardValue.ace]: 'A',
  [CardValue.two]: '2',
  [CardValue.three]: '3',
  [CardValue.four]: '4',
  [CardValue.five]: '5',
  [CardValue.six]: '6',
  [CardValue.seven]: '7',
  [CardValue.eight]: '8',
  [CardValue.nine]: '9',
  [CardValue.ten]: '10',
  [CardValue.jack]: 'J',
  [CardValue.queen]: 'Q',
  [CardValue.king]: 'K',
}

export function isCardRed(symbol: CardSymbol) {
  return [CardSymbol.diamonds, CardSymbol.hearts].includes(symbol);
}

export function isCardBlack(symbol: CardSymbol) {
  return [CardSymbol.spades, CardSymbol.clubs].includes(symbol);
}

export function canPutCardOnPile(card: CardData, target: CardData) {
  const bothRevealed = card.revealed && target.revealed;
  const isCardValueOneLower = +card.value + 1 === +target.value;
  const isCardOppositeColor = isCardRed(card.symbol) !== isCardRed(target.symbol);
  return bothRevealed && isCardValueOneLower && isCardOppositeColor;
}

export function canPutCardOnStack(card: CardData, target: CardData) {
  const bothRevealed = card.revealed && target.revealed;
  const isCardValueOneHigher = +card.value === +target.value + 1;
  const isCardSameSymbol = card.symbol === target.symbol;
  return bothRevealed && isCardValueOneHigher && isCardSameSymbol;
}

export function revealCard(card: CardData) {
  card.revealed = true;
}