import styled from '@emotion/styled';
import { THEME } from '../../theme';

const ErrorBoundaryLayout = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${THEME.palette.dark.background.alt};
  color: ${THEME.palette.dark.primary.main};
`;
export { ErrorBoundaryLayout };
