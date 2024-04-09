import { BOARD_WIDTH } from '@/types/constants';
import { TLight } from '@/features/lights/light.type';

export const checkRowChains = (rowItems: TLight[]) => {
  const right = rowItems.map((_, i) => i + 1);
  const left = rowItems.map((_, i) => i - 1);

  // chains
  rowItems
    .filter((item) => item.color !== '')
    .map((item, i) => {
      if (i % BOARD_WIDTH !== 0 && (i % BOARD_WIDTH) + 1 < BOARD_WIDTH) {
        if (
          rowItems[i].color === rowItems[right[i]].color &&
          rowItems[i].color === rowItems[left[i]].color &&
          rowItems[right[i]].color === rowItems[left[i]].color &&
          rowItems[i].color !== ''
        ) {
          item.chain = true;
          rowItems[right[i]].chain = true;
          rowItems[left[i]].chain = true;
        }
      }
    });

  return rowItems;
};
