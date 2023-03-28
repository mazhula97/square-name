import styled from '@emotion/styled';
import { THEME } from '../../theme';

const ListLayout = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;

  background-color: ${THEME.palette.dark.primary.light};
  color: ${THEME.palette.light.neutral.medium};

  ul {
    list-style: none;
    padding: none;
  }
`;
export { ListLayout };
