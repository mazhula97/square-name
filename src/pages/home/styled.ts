import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { THEME } from '../../theme';

const PageLayout = styled.div`
  width: 60%;
  min-width: 300px;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  background-color: ${THEME.palette.dark.background.alt};
  color: ${THEME.palette.light.neutral.medium};
`;

const LaunchBtn = styled(Link)`
  width: 300px;
  min-width: 150px;
  height: 50px;
  padding: 30px 10px;
  border: none;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  color: ${THEME.palette.light.primary.light};
  font-size: ${THEME.typography.h2};
  font-weight: ${THEME.typography.fontWeight.bold};
  background-color: ${THEME.palette.dark.primary.light};

  :hover {
    background-color: ${THEME.palette.dark.primary.main};
    transition: 0.5s;
  }
`;

export { PageLayout, LaunchBtn };
