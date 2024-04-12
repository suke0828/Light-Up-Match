import { TLight } from '../lights/light.type';
import { useEffect } from 'react';
import { checkRightSide } from './checkChainPossible/checkRightSide';
import { checkLeftSide } from './checkChainPossible/checkLeftSide';
import { checkTopSide } from './checkChainPossible/checkTopSide';
import { checkBottomSide } from './checkChainPossible/checkBottomSide';

export const chainPossible = (
  lights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  const newLights = [...lights];
  const interval = 5000;

  // チェイン可能なものをintervalミリ秒後にチェックする
  useEffect(() => {
    const timer = setTimeout(() => {
      checkRightSide(newLights, setState);
      checkLeftSide(newLights, setState);
      checkTopSide(newLights, setState);
      checkBottomSide(newLights, setState);
    }, interval);

    // lightsが更新される度にtimerのミリ秒を0にリセットする
    return () => clearTimeout(timer);
  }, [lights]);
};
