import { TLight } from '@/features/lights/light.type';
import { BOARD_WIDTH } from '@/types/constants';

export const checkCenter = (
  newLights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  newLights
    .filter((light) => light.color !== '')
    .map((light) => {
      const top = light.idx + 1 - BOARD_WIDTH;
      const bottom = light.idx + 1 + BOARD_WIDTH;
      const right = light.idx + 1 + BOARD_WIDTH;
      const left = light.idx - 1 + BOARD_WIDTH;

      // Top
      if ((light.idx % BOARD_WIDTH) + 2 < BOARD_WIDTH && light.idx >= BOARD_WIDTH) {
        if (
          light.color === newLights[light.idx + 2].color &&
          light.color === newLights[top].color
        ) {
          newLights[top].topChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Bottom
      if (
        (light.idx % BOARD_WIDTH) + 2 < BOARD_WIDTH &&
        light.idx < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH
      ) {
        if (
          light.color === newLights[light.idx + 2].color &&
          light.color === newLights[bottom].color
        ) {
          newLights[bottom].bottomChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Right
      if (
        light.idx % BOARD_WIDTH < BOARD_WIDTH - 1 &&
        light.idx < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH * 2
      ) {
        if (
          light.color === newLights[light.idx + BOARD_WIDTH * 2].color &&
          light.color === newLights[right].color
        ) {
          newLights[right].rightChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Left
      if (light.idx % BOARD_WIDTH > 0 && light.idx < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH * 2) {
        if (
          light.color === newLights[light.idx + BOARD_WIDTH * 2].color &&
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
