import { TLight } from '../lights/light.type';
import { moveDown } from './moveDown';
import { checkColumnChains } from './checkColumnChains';
import { checkRowChains } from './checkRowChains';

export const chainsBehavior = (currentLights: TLight[]): TLight[] => {
  let nextLights = currentLights;
  nextLights = checkColumnChains(nextLights);
  nextLights = checkRowChains(nextLights);

  const isSamePrevAndCurrentLights = currentLights.every(
    (light, i) => light.color === nextLights[i].color && light.color !== ''
  );

  // 現在のboardと前のboardのlightの配置が同じなら終了する
  if (isSamePrevAndCurrentLights) {
    return nextLights;
  }

  nextLights = moveDown(nextLights);
  // 再帰関数
  return chainsBehavior(nextLights);
};
