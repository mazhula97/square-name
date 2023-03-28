import { useEffect, useState } from 'react';

import { ILevel } from './../types/game';
import GameService from '../service/gameService/GameService';

export const useFetchingLevels = () => {
  const [levels, setLevels] = useState<ILevel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getLevels = async () => {
      setIsLoading(true);

      const response = await GameService.getLevels();
      setLevels(response);
      setIsLoading(false);
    };
    getLevels();
  }, []);

  return { levels, isLoading };
};
