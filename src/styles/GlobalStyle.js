import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    /* START = LAYOUTING */
    .container {
      width: 1500px;
      margin: 0 auto;
    }
    /* END = LAYOUTING */

    /* START = COLORING */
    .gray-bg {
      background-color: #F6F6F6;
    }
    .gray-color {
      color: #595959;
    }
    .white-bg {
      background-color: #FFFFFF;
    }
    /* END = COLORING */


    /* START = TYPHOGRAPHY */
    font-family: 'Roboto', sans-serif;
    .text-md {
      font-size: 1rem;
    }
    /* END = TYPHOGRAPHY */
  }
`;
