import styled from '@emotion/styled';
import { THEME } from '../../../../theme';

const GridTemplate = styled.div`
  width: fit-content;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  background-color: ${THEME.palette.light.background.alt};
`;

const GridRow = styled.div`
  display: flex;
`;

export { GridTemplate, GridRow };
