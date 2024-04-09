import { BOARD_WIDTH } from '@/types/constants';
import { TLight } from '@/features/lights/light.type';

export const checkColChains = (colItems: TLight[]) => {
  const top = colItems.map((_, i) => i - BOARD_WIDTH);
  const bottom = colItems.map((_, i) => i + BOARD_WIDTH);

  // chains
  colItems
    .filter((_, i) => i < BOARD_WIDTH * BOARD_WIDTH - BOARD_WIDTH)
    .filter((item) => item.color !== '')
    .map((item, i) => {
      if (i >= BOARD_WIDTH && i < BOARD_WIDTH * BOARD_WIDTH) {
        if (
          colItems[item.idx].color === colItems[top[item.idx]].color &&
          colItems[item.idx].color === colItems[bottom[item.idx]].color &&
          colItems[top[item.idx]].color === colItems[bottom[item.idx]].color &&
          colItems[item.idx].color !== ''
        ) {
          item.chain = true;
          colItems[top[item.idx]].chain = true;
          colItems[bottom[item.idx]].chain = true;
        }
      }
    });

  return colItems;
};
