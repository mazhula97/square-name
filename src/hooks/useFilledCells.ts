import { useCallback, useState } from 'react';
import { ICell } from '../types/game';

export const useFilledCells = () => {
  const [filledCells, setFilledCells] = useState<ICell[]>([]);

  const handleSelectCell = useCallback((targetCell: ICell) => {
    setFilledCells((prev) => {
      if (prev.some((prevCell) => prevCell.row === targetCell.row && prevCell.column === targetCell.column)) {
        return prev.filter((prevCell) => prevCell.row !== targetCell.row || prevCell.column !== targetCell.column);
      } else {
        return [...prev, targetCell];
      }
    });
  }, []);

  return { filledCells, handleSelectCell };
};
