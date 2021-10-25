import React, { useCallback } from 'react';
import { useDrag } from 'react-dnd';
import { actions } from '../../store/gameSlice';
import { useAppDispatch } from '../../store/hooks';
import { CardData } from '../../domain/CardData.model';
import Card from '../Card/Card';
import DropZone from '../DropZone/DropZone';
import { ItemTypes } from '../item.constants';
import { canPutCardOnPile } from '../../domain/CardData.utils';
import './CardDraggable.css';
import classNames from 'classnames';

export interface CardDraggableProps {
  card: CardData;
}

function CardDraggable({ card }: CardDraggableProps) {
  const dispatch  = useAppDispatch();

  const [{ isDragging, isSomethingDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: card,
    canDrag: () => card.revealed,
    collect: (monitor) => ({
      isSomethingDragging: !!monitor.getClientOffset(),
      isDragging: monitor.isDragging()
    })
  }), [card]);

  const onDropHandler = useCallback(
    (item: CardData) => dispatch(actions.move({ cardId: item.id, targetId: card.id })),
    [card]
  );
  const canDropPredicate = useCallback(
    (item: CardData) => canPutCardOnPile(item, card),
    [card]
  );
  const onClickHandler = useCallback(
    () => {
      if (!card.revealed && !card.cardOnTop)
        dispatch(actions.reveal({ cardId: card.id }));
    },
    [card]
  );

  return (
    <div
      className="card-layout"
      ref={drag}
      style={{ opacity: isDragging ? 0 : 1}}
      onClick={onClickHandler}
    >
      <div className="card-layout-item">
        <Card card={card}/>
      </div>
      <div className="card-layout-item">
        {
          card.cardOnTop
          ? <CardDraggable card={card.cardOnTop}/>
          : <DropZone onDropHandler={onDropHandler} canDropPredicate={canDropPredicate}/>
        }
      </div>
    </div>
  );
}

export default CardDraggable;