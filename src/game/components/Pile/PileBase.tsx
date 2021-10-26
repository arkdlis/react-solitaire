import React, { useCallback } from 'react';
import { CardData } from '../../domain/CardData.model';
import { actions } from '../../store/gameSlice';
import { useAppDispatch } from '../../store/hooks';
import CardDraggable from '../CardDraggable/CardDraggable';
import DropZone from '../DropZone/DropZone';

import './Pile.css';

export interface PileBaseProps {
  id: string;
  card?: CardData;
  stacked?: boolean;
  canPutCardOnCard: (card: CardData, target: CardData) => boolean;
  canPutOnPileBase: (card: CardData) => boolean;
}

function PileBase({ id, card, stacked, canPutCardOnCard, canPutOnPileBase }: PileBaseProps) {
  const dispatch  = useAppDispatch();

  const onDropHandler = useCallback(
    (item: CardData) => dispatch(actions.move({ cardId: item.id, targetId: id })),
    [id]
  );

  return (
    <div className="container">
      <div className="card-placeholder"></div>
      {
        card
        ? <CardDraggable card={card} canPutCardOnCard={canPutCardOnCard} stacked={stacked}/>
        : <DropZone onDropHandler={onDropHandler} canDropPredicate={canPutOnPileBase}/>
      }
    </div>
  );
}

export default PileBase;