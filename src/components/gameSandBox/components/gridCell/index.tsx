import { useState } from 'react';
import { ICell } from '../../../../types/game';
import { StyledGridCell } from './styled';
interface IProps {
  row: number;
  column: number;
  handleSelectCell: (cell: ICell) => void;
}
const GridCell = ({ row, column, handleSelectCell }: IProps) => {
  const [isSelected, setIsSelected] = useState(false);

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
