import React from 'react';
import { useDrag } from 'react-dnd';
import { CardData } from '../../domain/CardData.model';
import Card from '../Card/Card';
import CardWell from '../CardWell/CardWell';
import { ItemTypes } from '../item.constants';
import './CardDraggable.css';

export interface CardDraggableProps {
  card: CardData;
}

function CardDraggable({ card }: CardDraggableProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: card,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [card]);

  return (
    <div
      className="card-layout"
      ref={drag}
      style={{ opacity: isDragging ? 0 : 1}}
    >
      <div className="card-layout-item">
        <Card card={card}/>
      </div>
      <div className="card-layout-item">
        {
          card.cardOnTop
          ? <CardDraggable card={card.cardOnTop}/>
          : <CardWell target={card}/>
        }
      </div>
    </div>
  );
}

export default CardDraggable;