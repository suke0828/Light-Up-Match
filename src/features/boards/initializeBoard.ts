import { TLight } from '../lights/light.type';
import { createBoard } from './createBoard';
import { chainsBehavior } from '../chains/chainsBehavior';

export const initializeBoard = (): TLight[] => {
  let board = createBoard();
  board = chainsBehavior(board);
  return board;
};
