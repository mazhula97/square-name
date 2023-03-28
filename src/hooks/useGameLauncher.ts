import { useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import { NumberParam, useQueryParam } from 'use-query-params';

import { ILevel } from '../types/game';
import { useFetchingLevels } from './useFetchingLevels';

const getDefaultLevel = (levels: ILevel[], size: number | null | undefined): ILevel | undefined => {
  return levels.find((level) => level.field === size);
};

export const useGameLauncher = (startGame: (value: boolean) => void) => {
  const { levels, isLoading } = useFetchingLevels();
  const [size, setSize] = useQueryParam('size', NumberParam);

  const [selectedValue, setSelectedValue] = useState<ILevel | null | undefined>();

  useEffect(() => {
    setSelectedValue(getDefaultLevel(levels, size));
  }, [levels.length]);

  const handleLevelChange = (newValue: SingleValue<ILevel>): void => {
    setSelectedValue(newValue);
    setSize(newValue?.field);
    startGame(false);
  };

  return { isLoading, levels, selectedValue, handleLevelChange };
};
