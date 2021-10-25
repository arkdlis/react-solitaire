import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAppSelector } from '../../store/hooks';
import { selectGame } from '../../store/selectors';
import { GameControl } from '../GameControl/GameControl';
import Pile from '../Pile/Pile';
import './Game.css';

function Game(props: any) {
  const gameState = useAppSelector(selectGame);

  return (
    <DndProvider backend={HTML5Backend}>
      <GameControl/>
      <div className="card-pile-row">
        <Pile id={'0'} card={gameState.piles['0']}/>
        <Pile id={'1'} card={gameState.piles['1']}/>
        <Pile id={'2'} card={gameState.piles['2']}/>
        <Pile id={'3'} card={gameState.piles['3']}/>
        <Pile id={'4'} card={gameState.piles['4']}/>
        <Pile id={'5'} card={gameState.piles['5']}/>
        <Pile id={'6'} card={gameState.piles['6']}/>
      </div>
    </DndProvider>
  );
}

export default Game;