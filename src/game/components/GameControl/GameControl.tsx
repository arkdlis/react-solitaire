import React from 'react';
import { useAppSelector } from '../../store/hooks';

export function GameControl() {
  const movesCounter = useAppSelector((state) => state.game.movesCounter);
  
  return (
    <div>Moves: {movesCounter}</div>
  )
}