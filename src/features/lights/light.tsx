import { TLight } from './light.type';
import './light.css';

type LightsProps = {
  light: TLight;
  index: number;
};

export const Lights = ({ light, index }: LightsProps) => {
  return <div className={`lights ${light.color}`} key={index}></div>;
};
