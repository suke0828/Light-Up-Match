import { DragEvent } from 'react';

export const handleDragStart = (
  e: DragEvent<HTMLDivElement>,
  setState: React.Dispatch<React.SetStateAction<number>>
) => {
  setState(Number(e.currentTarget.getAttribute('data-id')));
};
