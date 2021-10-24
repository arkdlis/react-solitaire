import React from 'react';
import { useDrop } from 'react-dnd';
import { CardData, CardValue } from '../../domain/CardData.model';
import { actions } from '../../store/gameSlice';
import { useAppDispatch } from '../../store/hooks';
import { ItemTypes } from '../item.constants';

import './PileWell.css';

function PileWell() {
  const dispatch  = useAppDispatch();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    canDrop: (item) => item.value === CardValue.king,
    drop: (item: CardData) => dispatch(actions.increment(1)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  return (
    <div
      className="pile-well"
      ref={drop}
      style={{ backgroundColor: isOver ? (canDrop ? 'blue' : 'red') : 'yellowgreen' }}
    >
    </div>
  );
}

export default PileWell;