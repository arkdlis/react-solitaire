import React from 'react';
import { CardData } from '../../domain/CardData.model';
import { isCardRed, cardValueSignsMap } from '../../domain/CardData.utils';
import './Card.css';

export interface CardProps {
  card: CardData;
}

function Card({ card }: CardProps) {
  return (
    <div className={`card ${isCardRed(card.symbol) ? 'card--red' : 'card--black'}`}>
      <div className="card__sign">{cardValueSignsMap[card.value]}</div>
      <div className="card__symbol">{card.symbol}</div>
    </div>
  );
}

export default Card;