import React from 'react';
import { actions } from '../../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './GameControl.css';

export function GameControl() {
  const dispatch  = useAppDispatch();
  const movesCounter = useAppSelector((state) => state.game.movesCounter);
  const gameEnded = useAppSelector((state) => state.game.gameEnded);

  const restart = () => dispatch(actions.restart())
  
  return (
    <div className='game-control-bar'>
      <button onClick={restart}>restart</button>
      <div>Moves: {movesCounter}</div>
      <div>{gameEnded ? "You win!" : null}</div>
    </div>
  )
}