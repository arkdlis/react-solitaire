import { RootState } from "./store";

export const selectGame = (state: RootState) => state.game;
export const selectCount = (state: RootState) => state.game.movesCounter;