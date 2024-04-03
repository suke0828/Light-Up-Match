import { DragEvent } from 'react';

export const handlePreventDefaultBehavior = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};
