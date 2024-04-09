import { TLight } from '../lights/light.type';
import { moveDown } from './moveDown';
import { removeChains } from './removeChains/removeChains';

export const chainsBehavior = (currentLights: TLight[]): TLight[] => {
  let nextLights = [...currentLights];

  nextLights = removeChains(nextLights);

  const isSamePrevAndCurrentLights = currentLights.every(
    (light, i) => light.color === nextLights[i].color && light.color !== ''
  );

  moveDown(nextLights);

  // 現在のboardと前のboardのlightの配置が同じなら終了する
  if (isSamePrevAndCurrentLights) {
    return nextLights;
  }

  // 再帰関数
  return chainsBehavior(nextLights);
};
