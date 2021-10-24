import React from 'react';
import { useDrop } from 'react-dnd';
import { CardData } from '../../domain/CardData.model';
import { actions } from '../../store/gameSlice';
import { useAppDispatch } from '../../store/hooks';
import { ItemTypes } from '../item.constants';
import { canPutCardOnPile } from '../../domain/CardData.utils';
import classNames from 'classnames';
import './CardWell.css';

export interface CardWellProps {
  target: CardData;
}

function CardWell({ target }: CardWellProps) {
  const dispatch  = useAppDispatch();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    canDrop: (item) => canPutCardOnPile(item, target),
    drop: (item: CardData) => dispatch(actions.increment(1)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  return (
    <div
      className={
        classNames({
          'card-well': true,
          'card-well--can-drop': isOver && canDrop,
          'card-well--can-not-drop': isOver && !canDrop
        })
      }
      ref={drop}
      style={{ backgroundColor: isOver ? (canDrop ? 'blue' : 'red') : 'yellowgreen' }}
    >
    </div>
  );
}

export default CardWell;
