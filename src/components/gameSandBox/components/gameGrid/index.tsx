import { useEffect, useState } from 'react';
import { NumberParam, useQueryParam } from 'use-query-params';

import { ICell } from '../../../../types/game';
import GridCell from '../gridCell';
import { GridRow, GridTemplate } from './styled';

interface IProps {
  handleSelectCell: (cell: ICell) => void;
}

const GameGrid = ({ handleSelectCell }: IProps) => {
  const [sizeArray, setSizeArray] = useState<number[]>([]);
  const [size] = useQueryParam('size', NumberParam);

  useEffect(() => {
    setSizeArray(Array.from({ length: size || 0 }, (_, i) => i + 1));
  }, [size]);

  return (
    <GridTemplate>
      {sizeArray.map((r) => (
        <GridRow key={r}>
          {sizeArray.map((c) => (
            <GridCell key={c} row={r} column={c} handleSelectCell={handleSelectCell} />
          ))}
        </GridRow>
      ))}
    </GridTemplate>
  );
};

export default GameGrid;
