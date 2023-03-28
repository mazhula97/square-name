import styled from '@emotion/styled';
import { THEME } from '../../../../theme';

const StyledGridCell = styled.div<{ isSelected: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid ${THEME.palette.dark.background.default};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isSelected }) => (isSelected ? THEME.palette.dark.primary.main : 'transparent')};
  :hover {
    cursor: pointer;
  }
`;

export { StyledGridCell };
