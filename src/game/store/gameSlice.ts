import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from './GameState.model';

const initialState: GameState = {
  piles: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  },
  foundations: {
    0: [],
    1: [],
    2: [],
    3: [],
  },
  stock: [],
  waste: [],
  movesCounter: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    increment: (state: GameState, action: PayloadAction<number>) => {
      state.movesCounter += action.payload;
    },
  },
});

export const actions = gameSlice.actions;