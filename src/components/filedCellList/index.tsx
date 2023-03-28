import { memo } from 'react';

import { THEME } from '../../theme';
import { ICell } from '../../types/game';
import { CustomLabel } from '../common/boxes';
import { ListLayout } from './styled';

interface IProps {
  filledCells: ICell[];
}

const FilledCellList = ({ filledCells }: IProps) => {
  return (
    <ListLayout>
      <CustomLabel fontSize="18px" color={THEME.palette.light.primary.light}>
        Hovered squares
      </CustomLabel>
      <ul>
        {filledCells.length === 0
          ? 'No selected cells'
          : filledCells.map(({ row, column }) => <li key={`${row}_${column}`}>{`Row: ${row}; Column: ${column}`}</li>)}
      </ul>
    </ListLayout>
  );
};
export default memo(FilledCellList);
