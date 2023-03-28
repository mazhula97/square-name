import styled from '@emotion/styled';
import { THEME } from '../../theme';

const PageLayout = styled.div`
  width: 70%;
  min-width: 300px;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  justify-content: center;
  gap: 20px;

  background-color: ${THEME.palette.dark.background.alt};
  color: ${THEME.palette.light.neutral.medium};
`;

export { PageLayout };
