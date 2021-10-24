import { RootState } from "./store";

export const selectCount = (state: RootState) => state.game.movesCounter;