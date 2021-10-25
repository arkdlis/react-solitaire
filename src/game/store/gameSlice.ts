import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from './GameState.model';
import { createGame, moveCardById, reveal } from './GameState.utils';

const initialState: GameState = {
  piles: {
    0: undefined,
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
  },
  foundations: {
    0: undefined,
    1: undefined,
    2: undefined,
    3: undefined,
  },
  stock: [],
  waste: [],
  movesCounter: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    move: (state: GameState, action: PayloadAction<{ cardId: string, targetId: string }>) => {
      moveCardById(state, action.payload.cardId, action.payload.targetId);
      state.movesCounter += 1;
    },
    restart: (state: GameState) => {
      state.movesCounter = 0;
      createGame(state);
    },
    reveal: (state: GameState, action: PayloadAction<{ cardId: string }>) => {
      reveal(state, action.payload.cardId);
    }
  },
});

export const actions = gameSlice.actions;