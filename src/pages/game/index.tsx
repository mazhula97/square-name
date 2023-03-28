import FilledCellList from '../../components/filedCellList';
import GameSandBox from '../../components/gameSandBox';
import { useFilledCells } from '../../hooks/useFilledCells';
import { PageLayout } from './styled';

const GamePage = () => {
  return (
    <PageLayout>
      <GameSandBox />
    </PageLayout>
  );
};
export default GamePage;
