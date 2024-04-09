import { TLight } from '../../lights/light.type';
import { checkColChains } from '../checkChains/checkColChains';
import { checkRowChains } from '../checkChains/checkRowChians';

// 縦一列の3~5チェインを確認して消す
export const removeChains = (colItems: TLight[]) => {
  let nextColItems = [...colItems];
  checkColChains(nextColItems);
  checkRowChains(nextColItems);

  const chainIndices = nextColItems.filter((item) => item.chain);
  chainIndices.map((item) => {
    item.chain = false;
    item.color = '';
  });

  return nextColItems;
};
