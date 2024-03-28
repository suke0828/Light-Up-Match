import { useState } from 'react';
import './App.css';
import { TLight } from './features/lights/light.type';
import { Board } from './features/boards/board';
import { Title } from './features/title/title';
import { initializeBoard } from './features/boards/initializeBoard';

export const App = () => {
  const [lights] = useState<TLight[]>(initializeBoard());

  return (
    <div className="app">
      <Title />
      <Board lights={lights} />
    </div>
  );
};
