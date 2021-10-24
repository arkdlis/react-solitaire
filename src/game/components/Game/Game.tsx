import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { CardSymbol, CardValue } from '../../domain/CardData.model';
import { store } from '../../store/store';
import CardDraggable from '../CardDraggable/CardDraggable';
import { GameControl } from '../GameControl/GameControl';
import PileWell from '../PileWell/PileWell';
import './Game.css';

function Game(props: any) {
  const card = {
    id: '2',
    symbol: CardSymbol.hearts,
    value: CardValue.queen,
    revealed: true,
    cardOnTop: {
      id: '3',
      symbol: CardSymbol.clubs,
      value: CardValue.jack,
      revealed: true,
    }
  };
  const card2 = {
    id: 'K',
    symbol: CardSymbol.spades,
    value: CardValue.king,
    revealed: true,
  };

  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <GameControl/>
        <div className="card-pile-row">
          <CardDraggable card={card}/>
          <CardDraggable card={card2}/>
          <PileWell/>
          <PileWell/>
          <PileWell/>
          <PileWell/>
        </div>
      </DndProvider>
    </Provider>
  );
}

export default Game;