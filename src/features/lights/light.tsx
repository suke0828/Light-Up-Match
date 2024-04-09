import { TLight } from './light.type';
import './light.css';

type LightsProps = {
  light: TLight;
};

export const Lights = ({ light }: LightsProps) => {
  return <div className={`lights ${light.color}`} key={light.idx}></div>;
};
