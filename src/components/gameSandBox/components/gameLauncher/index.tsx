import { LaunchPanel, StartBtn, StyledSelect } from './styled';
import { ILevel } from '../../../../types/game';
import { useGameLauncher } from '../../../../hooks/useGameLauncher';

interface IProps {
  isStarted: boolean;
  startGame: (value: boolean) => void;
}

const GameLauncher = ({ startGame, isStarted }: IProps) => {
  const { isLoading, levels, selectedValue, handleLevelChange } = useGameLauncher(startGame);
  const startGameHandler = () => startGame(true);

  return (
    <LaunchPanel>
      <StyledSelect
        isDisabled={false}
        isLoading={isLoading}
        getOptionLabel={(level: ILevel) => level.name}
        getOptionValue={(level: ILevel) => level.field.toString()}
        options={levels}
        placeholder="Level"
        onChange={handleLevelChange}
        value={selectedValue}
      />
      <StartBtn disabled={isStarted} onClick={startGameHandler}>
        Start
      </StartBtn>
    </LaunchPanel>
  );
};
export default GameLauncher;
