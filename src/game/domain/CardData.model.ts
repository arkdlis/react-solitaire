export interface CardData {
  id: string;
  symbol: CardSymbol;
  value: CardValue;
  revealed: boolean;
  cardOnTop?: CardData;
}

export enum CardSymbol {
  clubs = '♣',
  spades = '♠',
  diamonds = '♦',
  hearts = '♥',
};

export enum CardValue {
  ace,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  jack,
  queen,
  king
};