import { useEffect } from 'react';
import { removeChains } from './removeChains/removeChains';
import { moveDown } from './moveDown';
import { TLight } from '../lights/light.type';

export const chainAnimation = (
  lights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  const delayMilliSeconds = 200;

  useEffect(() => {
    setTimeout(() => {
      let nextLights = [...lights];

      // board上がlightで埋まるの待ってからチェインしているものを削除する
      if (nextLights.every((light) => lights[light.idx].color !== '' && light.color !== '')) {
        nextLights = removeChains(nextLights);
      }

      const isSamePrevAndCurrentLights = nextLights.every(
        (light) => light.color === lights[light.idx].color && light.color !== ''
      );

      // ライトが下に落ちて、新しいもの生成する
      moveDown(nextLights);

      // 現在のboardと前のboardのlightの配置が同じなら終了する
      if (isSamePrevAndCurrentLights) {
        return nextLights;
      } else {
        setState(nextLights);
      }
    }, delayMilliSeconds);
  }, [lights]);
};
