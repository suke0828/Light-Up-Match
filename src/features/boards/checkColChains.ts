import { BOARD_WIDTH } from '@/types/constants';
import { TLight } from '../lights/light.type';

export const checkColChains = (colItems: TLight[], chainLength: number) => {
  // boardで縦一列を上からカウントできる範囲を定義
  const fixedCellIndex = 1;
  const checkRange = BOARD_WIDTH - (chainLength - 1);
  const rangeCheckBoard = BOARD_WIDTH * checkRange - fixedCellIndex;

  // chains
  colItems
    .filter((_, i) => i <= rangeCheckBoard)
    .filter((item) => item.color !== '')
    .map((_, i) => {
      // 縦chainLengthマスのindexを取得
      const chainIndices = Array.from({ length: chainLength }, (_, j) => i + j * BOARD_WIDTH);

      // board上の縦chainLengthマスの範囲のアイテムを配列に入れる(5chainの場合, ['orange', 'blue', 'red', 'yellow', 'red'])
      const checkColsChains = chainIndices.map((index) => colItems[index]?.color);

      // 配列内の最初の要素の色を基準に配列内の他の要素と色を比較する
      // ['green', 'green', 'green', 'green', 'green'] = true
      // ['green', 'green', 'green', 'green', 'red'] = false
      const isAllSameLightColor = checkColsChains.every(
        (color, index) => index === 0 || color === checkColsChains[0]
      );

      // アイテムを削除する
      if (isAllSameLightColor) {
        chainIndices.map((index) => (colItems[index].color = ''));
      }
    });
  return colItems;
};
