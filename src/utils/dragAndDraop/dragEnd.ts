import { checkColumnChains } from '@/features/chains/checkColumnChains';
import { checkRowChains } from '@/features/chains/checkRowChains';
import { TLight } from '@/features/lights/light.type';

export const handleDragEnd = (
  lights: TLight[],
  setState: React.Dispatch<React.SetStateAction<TLight[]>>,
  dragLight: number,
  dropLight: number
) => {
  let newLights = [...lights];
  let temp = newLights[dragLight].color;

  // swap light color
  newLights[dragLight].color = newLights[dropLight].color;
  newLights[dropLight].color = temp;

  newLights = checkColumnChains(newLights);
  newLights = checkRowChains(newLights);

  return setState(newLights);
};
