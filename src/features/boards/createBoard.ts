import { BOARD_WIDTH, LIGHTS_COLOR } from '@/types/constants';
import { TLight } from '../lights/light.type';

export const createBoard = (): TLight[] => {
  const board = Array(BOARD_WIDTH * BOARD_WIDTH)
    .fill(null)
    .map(() => ({
      // lightをランダムに生成
      color: LIGHTS_COLOR[Math.floor(Math.random() * LIGHTS_COLOR.length)],
    }));

  return board;
};
