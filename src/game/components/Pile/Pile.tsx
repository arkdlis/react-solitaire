import React from 'react';
import { CardData } from '../../domain/CardData.model';
import { isKing, canPutCardOnPile } from '../../domain/CardData.utils';
import PileBase from './PileBase';

export interface PileProps {
  id: string;
  card?: CardData;
}

function Pile(props: PileProps) {
  const canPutOnPileBase = isKing;
  const canPutCardOnCard = canPutCardOnPile;

  return (
    <PileBase {...props} canPutOnPileBase={canPutOnPileBase} canPutCardOnCard={canPutCardOnCard}/>
  );
}

export default Pile;