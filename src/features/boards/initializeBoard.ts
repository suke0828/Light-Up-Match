import { TLight } from '../lights/light.type';
import { createBoard } from './createBoard';
import { removeChains } from './removeChains';

export const initializeBoard = (): TLight[] => {
  let board = createBoard();
  board = removeChains(board);
  return board;
};
