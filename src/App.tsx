import { useState } from 'react';
import './App.css';
import { createBoard } from './features/boards/createBoard';
import { TLight } from './features/lights/light.type';
import { Board } from './features/boards/board';
import { Title } from './features/title/title';

export const App = () => {
  const init = () => {
    let board = createBoard();
    return board;
  };

  const [lights] = useState<TLight[]>(init());

  return (
    <div className="app">
      <Title />
      <Board lights={lights} />
    </div>
  );
};
