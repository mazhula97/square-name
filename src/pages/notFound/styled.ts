import styled from '@emotion/styled';
import { THEME } from '../../theme';

const PageLayout = styled.div`
  width: 60%;
  min-width: 300px;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${THEME.palette.dark.background.alt};
  color: ${THEME.palette.light.primary.light};
`;
export { PageLayout };
