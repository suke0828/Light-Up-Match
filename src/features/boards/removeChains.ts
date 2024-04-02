import { FIVE_CHAINS, FOUR_CHAINS, THREE_CHAINS } from '@/types/constants';
import { TLight } from '../lights/light.type';
import { checkColChains } from './checkColChains';
import { checkRowChains } from './checkRowChians';
import { moveDown } from './moveDown';

// 縦一列の3~5チェインを確認して消す
const checkColumn = (colItems: TLight[]) => {
  let nextColItems = colItems;
  nextColItems = checkColChains(nextColItems, FIVE_CHAINS);
  nextColItems = checkColChains(nextColItems, FOUR_CHAINS);
  nextColItems = checkColChains(nextColItems, THREE_CHAINS);

  return nextColItems;
};

// 横一行の3~5チェインを確認して消す
const checkRow = (rowItems: TLight[]) => {
  let nextRowItems = rowItems;
  nextRowItems = checkRowChains(nextRowItems, FIVE_CHAINS);
  nextRowItems = checkRowChains(nextRowItems, FOUR_CHAINS);
  nextRowItems = checkRowChains(nextRowItems, THREE_CHAINS);

  return nextRowItems;
};

export const removeChains = (currentLights: TLight[]): TLight[] => {
  let nextLights = currentLights;
  nextLights = moveDown(nextLights);
  nextLights = checkColumn(nextLights);
  nextLights = checkRow(nextLights);

  const isSamePrevAndCurrentLights = currentLights.every(
    (light, i) => light.color === nextLights[i].color && light.color !== ''
  );

  // 現在のboardと前のboardのlightの配置が同じなら終了する
  if (isSamePrevAndCurrentLights) {
    return nextLights;
  }

  // 再帰関数
  return removeChains(nextLights);
};
