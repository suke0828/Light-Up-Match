import { FIVE_CHAINS, FOUR_CHAINS, THREE_CHAINS } from '@/types/constants';
import { TLight } from '../lights/light.type';
import { removeColChains } from './removeColChains';

// 縦一列の3~5チェインを確認して消す
export const checkColumnChains = (colItems: TLight[]) => {
  let nextColItems = colItems;
  nextColItems = removeColChains(nextColItems, FIVE_CHAINS);
  nextColItems = removeColChains(nextColItems, FOUR_CHAINS);
  nextColItems = removeColChains(nextColItems, THREE_CHAINS);

  return nextColItems;
};
