import styled from '@emotion/styled';
import Select from 'react-select';
import { THEME } from '../../../../theme';
import { ILevel } from '../../../../types/game';

const LaunchPanel = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;
`;

const StyledSelect = styled(Select<ILevel>)`
  width: calc(100% - 110px);
  min-width: 115px;
`;

const StartBtn = styled.button`
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 10px;

  font-size: ${THEME.typography.h5};
  font-weight: ${THEME.typography.fontWeight.semiBold};
  color: ${THEME.palette.light.primary.light};
  background-color: ${THEME.palette.dark.primary.main};
`;

export { StyledSelect, StartBtn, LaunchPanel };
