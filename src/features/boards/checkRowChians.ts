import { BOARD_WIDTH } from '@/types/constants';
import { TLight } from '../lights/light.type';

export const checkRowChains = (rowItems: TLight[], chainLength: number) => {
  // boardで横一行を上からカウントできる範囲を定義
  const rangeCheckBoard = BOARD_WIDTH * BOARD_WIDTH - chainLength;

  // chains
  rowItems
    .filter((_, i) => i <= rangeCheckBoard)
    .filter((item) => item.color !== '')
    .map((_, i) => {
      const colsIndex = i % BOARD_WIDTH; //縦一列のindexを取得

      // 横のchain数がボードの幅の大きさの範囲に収まっているか
      // (i % BOARD_WIDTH) の余りに chainLength を足したものがBOARD_WIDTHより大きいものはスキップする
      if (colsIndex + chainLength <= BOARD_WIDTH) {
        // 横chainLengthマスのindexを取得
        const chainIndices = Array.from({ length: chainLength }, (_, j) => i + j);

        // board上の横chainLengthマスの範囲のアイテムを配列に入れる(5chainの場合, ['orange', 'blue', 'red', 'yellow', 'red'])
        const checkColsChains = chainIndices.map((index) => rowItems[index].color);

        // 配列内の最初の要素の色を基準に配列内の他の要素と色を比較する
        // ['green', 'green', 'green', 'green', 'green'] = true
        // ['green', 'green', 'green', 'green', 'red'] = false
        const isAllSameLightColor = checkColsChains.every(
          (color, index) => index === 0 || color === checkColsChains[0]
        );

        // アイテムを削除する
        if (isAllSameLightColor) {
          chainIndices.map((index) => (rowItems[index].color = ''));
        }
      }
    });
  return rowItems;
};
