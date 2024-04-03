import './App.css';
import { Board } from './features/boards/board';
import { Title } from './features/title/title';

export const App = () => {
  return (
    <div className="app">
      <Title />
      <Board />
    </div>
  );
};
