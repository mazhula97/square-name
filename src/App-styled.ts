import { css } from '@emotion/react';
import { THEME } from './theme';

export const GLOBAL_STYLES = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Rubik:wght@400;500;700&display=swap');
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }
  main {
    min-height: calc(100vh - 100px);
    padding: 20px;

    display: flex;
    justify-content: center;

    background-color: ${THEME.palette.dark.background.default};
  }
`;
