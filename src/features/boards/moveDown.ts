import { BOARD_WIDTH, LIGHTS_COLOR } from '@/types/constants';
import { TLight } from '../lights/light.type';

const lightsGenerateTopRowisEmpty = (lights: TLight[]) => {
  lights
    .filter((_, i) => i < BOARD_WIDTH) // 一番上のrowのみチェックする
    .filter((light) => light.color === '')
    .map((light) => {
      light.color = LIGHTS_COLOR[Math.floor(Math.random() * LIGHTS_COLOR.length)];
    });

  return lights;
};

const swapEmptyBottomLights = (lights: TLight[]) => {
  const excludeLastRow = BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH;
  lights
    .filter((_, i) => i < excludeLastRow) // 一番下のrowを除いたboardをチェックする
    .map((light, i) => {
      // 下の空のcellと現在のcellを入れ替える
      if (lights[i + BOARD_WIDTH].color === '') {
        lights[i + BOARD_WIDTH].color = light.color;
        light.color = '';
      }
    });

  return lights;
};

export const moveDown = (currentLights: TLight[]): TLight[] => {
  let nextLights = currentLights;
  nextLights = lightsGenerateTopRowisEmpty(nextLights);
  nextLights = swapEmptyBottomLights(nextLights);

  return nextLights;
};
