import { CardData } from "../domain/CardData.model";

export interface GameState {
  piles: {
    0: CardData[];
    1: CardData[];
    2: CardData[];
    3: CardData[];
    4: CardData[];
    5: CardData[];
    6: CardData[];
  };
  foundations: {
    0: CardData[];
    1: CardData[];
    2: CardData[];
    3: CardData[];
  };
  stock: CardData[];
  waste: CardData[];
  movesCounter: number;
}