import { LaunchPanel, StartBtn, StyledSelect } from './styled';
import { ILevel } from '../../../../types/game';
import { useGameLauncher } from '../../../../hooks/useGameLauncher';

interface IProps {
  startGame: (value: boolean) => void;
}

const GameLauncher = ({ startGame }: IProps) => {
  const { isLoading, levels, selectedValue, handleLevelChange } = useGameLauncher();

  return (
    <LaunchPanel>
      <StyledSelect
        isDisabled={false}
        isLoading={isLoading}
        getOptionLabel={(level: ILevel) => level.name}
        getOptionValue={(level: ILevel) => level.field.toString()}
        name="color"
        options={levels}
        placeholder="Level"
        onChange={handleLevelChange}
        value={selectedValue}
      />
      <StartBtn onClick={() => startGame(true)}>Start</StartBtn>
    </LaunchPanel>
  );
};
export default GameLauncher;
