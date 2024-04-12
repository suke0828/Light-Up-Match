import { TLight } from '@/features/lights/light.type';
import { BOARD_WIDTH } from '@/types/constants';

export const checkAbove = (
  newLights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  newLights
    .filter((light) => light.color !== '')
    .map((light) => {
      const top = light.idx - BOARD_WIDTH * 3;
      const topRight = light.idx + 1 - BOARD_WIDTH * 2;
      const topLeft = light.idx - 1 - BOARD_WIDTH * 2;

      // Top Right
      if (light.idx % BOARD_WIDTH < BOARD_WIDTH - 1 && light.idx >= BOARD_WIDTH * 2) {
        if (
          light.color === newLights[light.idx - BOARD_WIDTH].color &&
          light.color === newLights[topRight].color
        ) {
          newLights[topRight].rightChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Top Left
      if (light.idx % BOARD_WIDTH >= 1 && light.idx >= BOARD_WIDTH * 2) {
        if (
          light.color === newLights[light.idx - BOARD_WIDTH].color &&
          light.color === newLights[topLeft].color
        ) {
          newLights[topLeft].leftChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Top
      if (light.idx >= BOARD_WIDTH * 3) {
        if (
          light.color === newLights[light.idx - BOARD_WIDTH].color &&
          light.color === newLights[top].color
        ) {
          newLights[top].topChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }
    });
};
