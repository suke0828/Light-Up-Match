import { FIVE_CHAINS, FOUR_CHAINS, THREE_CHAINS } from '@/types/constants';
import { TLight } from '../lights/light.type';
import { removeRowChains } from './removeRowChians';

// 横一行の3~5チェインを確認して消す
export const checkRowChains = (rowItems: TLight[]) => {
  let nextRowItems = rowItems;
  nextRowItems = removeRowChains(nextRowItems, FIVE_CHAINS);
  nextRowItems = removeRowChains(nextRowItems, FOUR_CHAINS);
  nextRowItems = removeRowChains(nextRowItems, THREE_CHAINS);

  return nextRowItems;
};
