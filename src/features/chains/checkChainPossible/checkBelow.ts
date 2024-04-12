import { TLight } from '@/features/lights/light.type';
import { BOARD_WIDTH } from '@/types/constants';

export const checkBelow = (
  newLights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  newLights
    .filter((light) => light.color !== '')
    .map((light) => {
      const bottom = light.idx + BOARD_WIDTH * 3;
      const bottomRight = light.idx + 1 + BOARD_WIDTH * 2;
      const bottomLeft = light.idx - 1 + BOARD_WIDTH * 2;

      // Bottom Right
      if (
        light.idx % BOARD_WIDTH < BOARD_WIDTH - 1 &&
        light.idx < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH * 2
      ) {
        if (
          light.color === newLights[light.idx + BOARD_WIDTH].color &&
          light.color === newLights[bottomRight].color
        ) {
          newLights[bottomRight].rightChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Bottom Left
      if (light.idx % BOARD_WIDTH >= 1 && light.idx < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH * 2) {
        if (
          light.color === newLights[light.idx + BOARD_WIDTH].color &&
          light.color === newLights[bottomLeft].color
        ) {
          newLights[bottomLeft].leftChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Bottom
      if (light.idx < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH * 3) {
        if (
          light.color === newLights[light.idx + BOARD_WIDTH].color &&
          light.color === newLights[bottom].color
        ) {
          newLights[bottom].bottomChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }
    });
};
