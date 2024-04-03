import { TLight } from '@/features/lights/light.type';

export const handleDragEnd = (
  lights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>,
  dragLight: number,
  dropLight: number
) => {
  const newLights = [...lights];
  let temp = newLights[dragLight].color;

  // swap light color
  newLights[dragLight].color = newLights[dropLight].color;
  newLights[dropLight].color = temp;

  return setState(newLights);
};
