import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAppSelector } from '../../store/hooks';
import { selectGame } from '../../store/selectors';
import Deck from '../Deck/Deck';
import { GameControl } from '../GameControl/GameControl';
import Foundation from '../Pile/Foundation';
import Pile from '../Pile/Pile';
import './Game.css';

function Game(props: any) {
  const gameState = useAppSelector(selectGame);
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="tableau">
        <GameControl/>
        <div className="top-container">
          <Deck stock={gameState.stock} waste={gameState.waste}/>
          <div className="card-pile-row">
            <Foundation id={'f0'} card={gameState.foundations['f0']}/>
            <Foundation id={'f1'} card={gameState.foundations['f1']}/>
            <Foundation id={'f2'} card={gameState.foundations['f2']}/>
            <Foundation id={'f3'} card={gameState.foundations['f3']}/>
          </div>
        </div>
        <div className="card-pile-row">
          <Pile id={'p0'} card={gameState.piles['p0']}/>
          <Pile id={'p1'} card={gameState.piles['p1']}/>
          <Pile id={'p2'} card={gameState.piles['p2']}/>
          <Pile id={'p3'} card={gameState.piles['p3']}/>
          <Pile id={'p4'} card={gameState.piles['p4']}/>
          <Pile id={'p5'} card={gameState.piles['p5']}/>
          <Pile id={'p6'} card={gameState.piles['p6']}/>
        </div>
      </div>
    </DndProvider>
  );
}

export default Game;