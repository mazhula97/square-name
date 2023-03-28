import { useState } from 'react';
import { useFilledCells } from '../../hooks/useFilledCells';
import FilledCellList from '../filedCellList';
import GameGrid from './components/gameGrid';
import GameLauncher from './components/gameLauncher';
import { SandBoxLayout } from './styled';

const GameSandBox = () => {
  const { filledCells, handleSelectCell } = useFilledCells();

  const [isStarted, setIsStarted] = useState(false);

  return (
    <SandBoxLayout>
      <GameLauncher startGame={setIsStarted} />
      {isStarted ? <GameGrid handleSelectCell={handleSelectCell} /> : 'Choose your level'}
      <FilledCellList filledCells={filledCells} />
    </SandBoxLayout>
  );
};

export default GameSandBox;
