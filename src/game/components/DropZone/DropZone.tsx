import React from 'react';
import { useDrop } from 'react-dnd';
import { CardData } from '../../domain/CardData.model';
import { ItemTypes } from '../item.constants';
import classNames from 'classnames';
import './DropZone.css';

export interface DropZoneProps {
  onDropHandler: (item: CardData) => void;
  canDropPredicate: (item: CardData) => boolean;
}

function DropZone({ onDropHandler, canDropPredicate }: DropZoneProps) {
  const [{ canDrop, isOver, isSomethingDragging }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    canDrop: canDropPredicate,
    drop: onDropHandler,
    collect: (monitor) => ({
      isSomethingDragging: !!monitor.getClientOffset(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  }), [canDropPredicate, onDropHandler]);

  return (
    <div
      className={
        classNames({
          'card-well': true,
          'card-well--can-drop': isOver && canDrop,
          'card-well--can-not-drop': isOver && !canDrop,
          'card-well--clickable': isSomethingDragging
        })
      }
      ref={drop}
      style={{ backgroundColor: isOver ? (canDrop ? 'yellowgreen' : 'red') : 'blue' }}
    >
    </div>
  );
}

export default DropZone;
