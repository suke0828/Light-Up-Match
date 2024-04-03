import { Lights } from '@/features/lights/light';
import { TLight } from '@/features/lights/light.type';
import './board.css';
import { useState } from 'react';
import { handleDragStart } from '@/utils/dragAndDraop/dragStart';
import { handlePreventDefaultBehavior } from '@/utils/dragAndDraop/preventDefaultBehavior';
import { handleDrop } from '@/utils/dragAndDraop/drop';
import { handleDragEnd } from '@/utils/dragAndDraop/dragEnd';
import { initializeBoard } from './initializeBoard';

export const Board = () => {
  const [lights, setLights] = useState<TLight[]>(initializeBoard);
  const notHaveAnythingDefaultItems = -1;
  const [dragging, setDragging] = useState<number>(notHaveAnythingDefaultItems);
  const [dropping, setDropping] = useState<number>(notHaveAnythingDefaultItems);

  return (
    <div className="board">
      {lights.map((item, i) => (
        <div
          className="drag-item"
          key={i}
          data-id={i}
          draggable={true}
          onDragStart={(e) => handleDragStart(e, setDragging)}
          onDragEnter={(e) => handlePreventDefaultBehavior(e)} // デフォルトの動作を無効にする
          onDragOver={(e) => handlePreventDefaultBehavior(e)} // デフォルトの動作を無効にする
          onDragLeave={(e) => handlePreventDefaultBehavior(e)} // デフォルトの動作を無効にする
          onDrop={(e) => handleDrop(e, setDropping)}
          onDragEnd={() => handleDragEnd(lights, setLights, dragging, dropping)}
        >
          <Lights light={item} index={i} />
        </div>
      ))}
    </div>
  );
};
