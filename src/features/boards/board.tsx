import { Lights } from '@/features/lights/light';
import { TLight } from '@/features/lights/light.type';
import './board.css';

type BoardProps = {
  lights: TLight[];
};

export const Board = ({ lights }: BoardProps) => {
  return (
    <div className="board">
      {lights.map((item, i) => (
        <div key={i}>
          <Lights light={item} index={i} />
        </div>
      ))}
    </div>
  );
};
