import { TLight } from '@/features/lights/light.type';
import { BOARD_WIDTH } from '@/types/constants';

export const checkLeftSide = (
  newLights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  newLights
    .filter((light) => light.color !== '')
    .map((light) => {
      const left = light.idx - 3;
      const leftTop = light.idx - 2 - BOARD_WIDTH;
      const leftBottom = light.idx - 2 + BOARD_WIDTH;

      // Left Top
      if (light.idx % BOARD_WIDTH >= 2 && light.idx >= BOARD_WIDTH) {
        if (
          light.color === newLights[light.idx - 1].color &&
          light.color === newLights[leftTop].color
        ) {
          newLights[leftTop].topChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Left Bottom
      if (light.idx % BOARD_WIDTH >= 2 && light.idx < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH) {
        if (
          light.color === newLights[light.idx - 1].color &&
          light.color === newLights[leftBottom].color
        ) {
          newLights[leftBottom].bottomChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Left
      if (light.idx % BOARD_WIDTH >= 3) {
        if (
          light.color === newLights[light.idx - 1].color &&
          light.color === newLights[left].color
        ) {
          newLights[left].leftChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }
    });
};
