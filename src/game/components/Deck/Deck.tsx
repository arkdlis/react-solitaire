import React, { useCallback } from 'react';
import { CardData } from '../../domain/CardData.model';
import CardDraggable from '../CardDraggable/CardDraggable';
import Card from '../Card/Card';
import { actions } from '../../store/gameSlice';
import { useAppDispatch } from '../../store/hooks';
import './Deck.css';

export interface DeckProps {
  stock: CardData[];
  waste: CardData[];
}

function Deck({ stock, waste }: DeckProps) {
  const dispatch  = useAppDispatch();

  const onClickHandler = useCallback(
    () => {
      dispatch(actions.draw());
    }, []
  );

  const canPutCardOnCard = () => false;

  const firstCardOnStock = stock[0];
  const prelastCardOnWaste = waste[waste.length - 2];
  const lastCardOnWaste = waste[waste.length - 1];

  return (
    <div className="deck-container">
      <div onClick={onClickHandler}>
        {
          firstCardOnStock
          ? <Card card={firstCardOnStock}/>
          : <div className="deck-placeholder"></div>
        }
      </div>
      <div className="deck-waste">
        <div className="deck-waste-stacked">
          {
            prelastCardOnWaste
            ? <Card card={prelastCardOnWaste}/>
            : null
          }
        </div>
        <div>
          {
            lastCardOnWaste
            ? <CardDraggable card={lastCardOnWaste} canPutCardOnCard={canPutCardOnCard}/>
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default Deck;