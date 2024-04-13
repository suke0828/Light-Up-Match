import { TLight } from '../lights/light.type';
import { useEffect } from 'react';
import { checkRightSide } from './checkChainPossible/checkRightSide';
import { checkLeftSide } from './checkChainPossible/checkLeftSide';
import { checkAbove } from './checkChainPossible/checkAbove';
import { checkBelow } from './checkChainPossible/checkBelow';
import { checkCenter } from './checkChainPossible/checkCenter';

export const chainPossible = (
  lights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  const newLights = [...lights];
  const interval = 10000;

  // チェイン可能なものをintervalミリ秒後にチェックする
  useEffect(() => {
    const timer = setTimeout(() => {
      checkRightSide(newLights, setState);
      checkLeftSide(newLights, setState);
      checkAbove(newLights, setState);
      checkBelow(newLights, setState);
      checkCenter(newLights, setState);
    }, interval);

    // lightsが更新される度にtimerのミリ秒を0にリセットする
    return () => clearTimeout(timer);
  }, [lights]);
};
