import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from './GameState.model';
import { checkWin, createGame, draw, moveCardById, reveal } from './GameState.utils';

const initialState: GameState = {
  piles: {
    p0: undefined,
    p1: undefined,
    p2: undefined,
    p3: undefined,
    p4: undefined,
    p5: undefined,
    p6: undefined,
  },
  foundations: {
    f0: undefined,
    f1: undefined,
    f2: undefined,
    f3: undefined,
  },
  stock: [],
  waste: [],
  movesCounter: 0,
  gameEnded: false
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    move: (state: GameState, action: PayloadAction<{ cardId: string, targetId: string }>) => {
      moveCardById(state, action.payload.cardId, action.payload.targetId);
      state.movesCounter += 1;
      state.gameEnded = checkWin(state);
    },
    restart: (state: GameState) => {
      state.gameEnded = false;
      state.movesCounter = 0;
      createGame(state);
    },
    reveal: (state: GameState, action: PayloadAction<{ cardId: string }>) => {
      reveal(state, action.payload.cardId);
    },
    draw: (state: GameState) => {
      if (state.stock.length) state.movesCounter += 1;
      draw(state);
    },
  },
});

export const actions = gameSlice.actions;