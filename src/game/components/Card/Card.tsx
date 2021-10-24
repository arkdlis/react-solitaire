import React from 'react';
import { useDrag } from 'react-dnd';
import { CardData } from '../../domain/CardData.model';
import { isCardRed, cardValueSignsMap } from '../../domain/CardData.utils';
import { ItemTypes } from '../item.constants';
import './Card.css';

function Card(props: { card: CardData }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: props.card,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [props.card]);


  return (
    <div
      className={`card ${isCardRed(props.card.symbol) ? 'card--red' : 'card--black'}`}
      ref={drag}
      style={{ opacity: isDragging ? 0 : 1}}
    >
      <div className="card__sign">{cardValueSignsMap[props.card.value]}</div>
      <div className="card__symbol">{props.card.symbol}</div>
    </div>
  );
}

export default Card;