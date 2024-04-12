import { removeChains } from '@/features/chains/removeChains/removeChains';
import { TLight } from '@/features/lights/light.type';
import { BOARD_WIDTH } from '@/types/constants';

export const handleDragEnd = (
  lights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>,
  dragIndex: number,
  dropIndex: number
) => {
  // dragしたcellの上下左右のcellを取得する
  const topCell = dragIndex - BOARD_WIDTH;
  const rightCell = dragIndex + 1;
  const bottomCell = dragIndex + BOARD_WIDTH;
  const leftCell = dragIndex - 1;

  // dropできるcellを決める補助関数
  const dropCell = (dragCell: number) => {
    return dropIndex === dragCell;
  };

  // 上下左右の隣接しているcellのみにdrag and dropできる
  const neighborCell =
    dropCell(topCell) || dropCell(rightCell) || dropCell(bottomCell) || dropCell(leftCell);

  // 左右の境界をまたがってのdrag and dropを無効にする
  const invalidRightEdges = dragIndex % BOARD_WIDTH === BOARD_WIDTH - 1 && rightCell === dropIndex;
  const invalidLeftEdges = dragIndex % BOARD_WIDTH === 0 && leftCell === dropIndex;

  // drag and dropが可能な範囲の有効な条件をまとめる
  const valid = neighborCell && !invalidRightEdges && !invalidLeftEdges;

  // swap light color
  const swapLightColor = (lights: TLight[]) => {
    let temp = lights[dragIndex].color;

    lights[dragIndex].color = lights[dropIndex].color;
    lights[dropIndex].color = temp;
  };

  // chainできる箇所だけdrag and dropできる
  if (valid) {
    let newLights = [...lights];

    swapLightColor(newLights);

    newLights.map((light) => {
      (light.topChainable = false),
        (light.rightChainable = false),
        (light.bottomChainable = false),
        (light.leftChainable = false);
    });

    // chainできるものをcheckし、削除する
    newLights = removeChains(newLights);

    // chainが発生しない場合はswapは無効にする
    if (newLights.filter((light) => light.color === '').length === 0) {
      swapLightColor(newLights); // もう一度swapして元に戻す
    } else {
      return setState(newLights);
    }
  }
};
