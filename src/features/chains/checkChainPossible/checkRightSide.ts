import { TLight } from '@/features/lights/light.type';
import { BOARD_WIDTH } from '@/types/constants';

export const checkRightSide = (
  newLights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>
) => {
  newLights
    .filter((light) => light.color !== '')
    .map((light) => {
      const right = light.idx + 3;
      const rightTop = light.idx + 2 - BOARD_WIDTH;
      const rightBottom = light.idx + 2 + BOARD_WIDTH;

      // Right Top
      if ((light.idx % BOARD_WIDTH) + 2 < BOARD_WIDTH && light.idx >= BOARD_WIDTH) {
        if (
          light.color === newLights[light.idx + 1].color &&
          light.color === newLights[rightTop].color
        ) {
          newLights[rightTop].topChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Right Bottom
      if (
        (light.idx % BOARD_WIDTH) + 2 < BOARD_WIDTH &&
        light.idx < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH
      ) {
        if (
          light.color === newLights[light.idx + 1].color &&
          light.color === newLights[rightBottom].color
        ) {
          newLights[rightBottom].bottomChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }

      // Right
      if ((light.idx % BOARD_WIDTH) + 3 < BOARD_WIDTH) {
        if (
          light.color === newLights[light.idx + 1].color &&
          light.color === newLights[right].color
        ) {
          newLights[right].rightChainable = true;

          return newLights;
        } else {
          setState(newLights);
        }
      }
    });
};
