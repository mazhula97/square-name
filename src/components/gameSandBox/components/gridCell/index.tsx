import { useEffect, useState } from 'react';
import { NumberParam, useQueryParam } from 'use-query-params';

import { ICell } from '../../../../types/game';
import { StyledGridCell } from './styled';
interface IProps {
  row: number;
  column: number;
  handleSelectCell: (cell: ICell) => void;
}

const GridCell = ({ row, column, handleSelectCell }: IProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [size] = useQueryParam('size', NumberParam);

  useEffect(() => {
    setIsSelected(false);
  }, [size]);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    handleSelectCell({ row, column });
    setIsSelected((prev) => !prev);
  };

  return (
    <StyledGridCell isSelected={isSelected} onMouseOver={handleMouseOver}>
      {isSelected ? '😄' : '😞'}
    </StyledGridCell>
  );
};
export default GridCell;
