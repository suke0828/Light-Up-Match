import { FIVE_CHAINS, FOUR_CHAINS, THREE_CHAINS } from '@/types/constants';
import { TLight } from '../lights/light.type';
import { checkColChains } from './checkColChains';
import { checkRowChains } from './checkRowChians';

const checkColumn = (colItems: TLight[]) => {
  checkColChains(colItems, FIVE_CHAINS);
  checkColChains(colItems, FOUR_CHAINS);
  checkColChains(colItems, THREE_CHAINS);

  return colItems;
};

const checkRow = (rowItems: TLight[]) => {
  checkRowChains(rowItems, FIVE_CHAINS);
  checkRowChains(rowItems, FOUR_CHAINS);
  checkRowChains(rowItems, THREE_CHAINS);

  return rowItems;
};

export const removeChains = (currentLight: TLight[]) => {
  let nextLight = [...currentLight];
  nextLight = checkColumn(nextLight);
  nextLight = checkRow(nextLight);
  return nextLight;
};
