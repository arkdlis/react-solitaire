import classNames from 'classnames';
import React from 'react';
import { CardData } from '../../domain/CardData.model';
import { isCardRed, cardValueSignsMap, isCardBlack } from '../../domain/CardData.utils';
import './Card.css';

export interface CardProps {
  card: CardData;
}

function Card({ card }: CardProps) {
  return (
    <div 
      className={
        classNames({
          'card': true,
          'card--red': isCardRed(card.symbol),
          'card--black': isCardBlack(card.symbol),
          'card--back': !card.revealed,
          'card--pointer': !card.revealed && !card.cardOnTop,
        })
      }
    >
      <div className="card__sign">{cardValueSignsMap[card.value]}</div>
      <div className="card__symbol">{card.symbol}</div>
    </div>
  );
}

export default Card;