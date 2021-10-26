import React from 'react';
import { CardData } from '../../domain/CardData.model';
import { canPutCardOnFoundation, isAce } from '../../domain/CardData.utils';
import PileBase from './PileBase';

export interface FoundationProps {
  id: string;
  card?: CardData;
}

function Foundation(props: FoundationProps) {
  const canPutOnPileBase = isAce;
  const canPutCardOnCard = canPutCardOnFoundation;

  return (
    <PileBase {...props} canPutOnPileBase={canPutOnPileBase} canPutCardOnCard={canPutCardOnCard} stacked={true}/>
  );
}

export default Foundation;