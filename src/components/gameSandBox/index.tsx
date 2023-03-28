import { useState } from 'react';

import { useFilledCells } from '../../hooks/useFilledCells';
import { THEME } from '../../theme';
import { CustomLabel } from '../common/boxes';
import FilledCellList from '../filedCellList';
import GameGrid from './components/gameGrid';
import GameLauncher from './components/gameLauncher';
import { SandBoxLayout } from './styled';

const GameSandBox = () => {
  const { filledCells, handleSelectCell } = useFilledCells();

  const [isStarted, setIsStarted] = useState(false);

  return (
    <SandBoxLayout>
      <GameLauncher startGame={setIsStarted} isStarted={isStarted} />
      {isStarted ? (
        <GameGrid handleSelectCell={handleSelectCell} />
      ) : (
        <CustomLabel fontWeight={THEME.typography.fontWeight.bold}>Choose your level</CustomLabel>
      )}
      {isStarted && <FilledCellList filledCells={filledCells} />}
    </SandBoxLayout>
  );
};

export default GameSandBox;
