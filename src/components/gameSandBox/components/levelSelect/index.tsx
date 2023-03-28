import { SingleValue } from 'react-select/dist/declarations/src';
import { NumberParam, useQueryParam } from 'use-query-params';
import { useFetchingLevels } from '../../../../hooks/useFetchingLevels';
import { LaunchPanel, StartBtn, StyledSelect } from './styled';
import { ILevel } from '../../../../types/game';
import { useEffect, useState } from 'react';
import { getDefaultLevel } from './helpers';

interface IProps {
  startGame: (value: boolean) => void;
}

const LevelSelect = ({ startGame }: IProps) => {
  const { levels, isLoading } = useFetchingLevels();
  const [size, setSize] = useQueryParam('size', NumberParam);

  const [selectedValue, setSelectedValue] = useState<ILevel | null | undefined>();

  useEffect(() => {
    setSelectedValue(getDefaultLevel(levels, size));
  }, [levels.length]);

  const handleLevelChange = (newValue: SingleValue<ILevel>): void => {
    setSelectedValue(newValue);
    setSize(newValue?.field);
  };

  const handleGameStart = () => {
    startGame(true);
  };

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
      <StartBtn onClick={handleGameStart}>Start</StartBtn>
    </LaunchPanel>
  );
};
export default LevelSelect;
