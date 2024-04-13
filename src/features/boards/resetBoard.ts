import { useEffect } from 'react';
import { TLight } from '../lights/light.type';
import { initializeBoard } from './initializeBoard';

export const resetBoard = (
  lights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  const newLights = [...lights];
  const interval = 11000;

  useEffect(() => {
    // intervalミリ秒待ってチェイン可能なものが無い場合
    const timer = setTimeout(() => {
      if (
        lights.every(
          (light) =>
            !light.topChainable &&
            !light.rightChainable &&
            !light.bottomChainable &&
            !light.leftChainable
        )
      ) {
        // boardを初期化する
        setState(initializeBoard);
      }
    }, interval);

    return () => clearTimeout(timer);
  }, [newLights]);
};
