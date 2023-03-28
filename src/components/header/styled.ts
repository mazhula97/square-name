import styled from '@emotion/styled';
import { THEME } from '../../theme';

const HeaderWrapper = styled.header`
  height: 100px;
  padding: 20px;

  display: flex;
  align-items: center;

  font-size: ${THEME.typography.h2};
  font-weight: ${THEME.typography.fontWeight.bold};
  background-color: ${THEME.palette.dark.background.alt};

  a {
    text-decoration: none;
    color: ${THEME.palette.dark.primary.main};
  }
`;
export { HeaderWrapper };
