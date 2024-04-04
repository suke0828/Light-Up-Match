import { useEffect } from 'react';
import { checkColumnChains } from './checkColumnChains';
import { checkRowChains } from './checkRowChains';
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
      // チェインしていたら削除する
      nextLights = checkColumnChains(nextLights);
      nextLights = checkRowChains(nextLights);

      const isSamePrevAndCurrentLights = lights.every(
        (light, i) => light.color === nextLights[i].color && light.color !== ''
      );

      // 現在のboardと前のboardのlightの配置が同じなら終了する
      if (isSamePrevAndCurrentLights) {
        return;
      }

      // ライトが下に落ちて、新しいもの生成する
      nextLights = moveDown(nextLights);
      setState(nextLights);
    }, delayMilliSeconds);
  }, [lights]);
};
