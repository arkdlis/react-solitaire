import { CardData } from "../domain/CardData.model";

export interface GameState {
  piles: {
    [key: string]: CardData | undefined;
    p0?: CardData;
    p1?: CardData;
    p2?: CardData;
    p3?: CardData;
    p4?: CardData;
    p5?: CardData;
    p6?: CardData;
  };
  foundations: {
    [key: string]: CardData | undefined;
    f0?: CardData;
    f1?: CardData;
    f2?: CardData;
    f3?: CardData;
  };
  stock: CardData[];
  waste: CardData[];
  movesCounter: number;
  gameEnded: boolean;
}