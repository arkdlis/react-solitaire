import React, { useCallback } from 'react';
import { CardData } from '../../domain/CardData.model';
import { isKing } from '../../domain/CardData.utils';
import { actions } from '../../store/gameSlice';
import { useAppDispatch } from '../../store/hooks';
import CardDraggable from '../CardDraggable/CardDraggable';
import DropZone from '../DropZone/DropZone';

import './Pile.css';

export interface PileProps {
  id: string;
  card?: CardData;
}

function Pile({ id, card }: PileProps) {
  const dispatch  = useAppDispatch();

  const onDropHandler = useCallback(
    (item: CardData) => dispatch(actions.move({ cardId: item.id, targetId: id })),
    [id]
  );
  const canDropPredicate = isKing;

  return (
    card
    ? <CardDraggable card={card}/>
    : <DropZone onDropHandler={onDropHandler} canDropPredicate={canDropPredicate}/>
  );
}

export default Pile;