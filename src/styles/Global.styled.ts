import {createGlobalStyle} from "styled-components";
import {theme} from "styles/Theme";

export const GlobalStyled = createGlobalStyle`

  body {
    margin: 0;
    
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: unset;
    text-decoration: unset;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

`