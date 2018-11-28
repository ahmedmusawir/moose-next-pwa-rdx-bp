import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    margin-top: 55px; //due to fixed navbar
    // border: 1rem solid gray;
  }

  body {
    font-family: Arial;
    border: 1rem solid #e3e3e3;
  }

  body.fontLoaded {
    font-family: Arial;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  }

  .container {
    margin-bottom: 5rem;
  }
`;

export default GlobalStyle;
