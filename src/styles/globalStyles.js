import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://use.typekit.net/your-kit-id.css'); 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Muli', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
    font-weight: 300;
  }

  button {
    font-family: 'Muli', sans-serif;
    cursor: pointer;
  }
`;

export default GlobalStyle;
