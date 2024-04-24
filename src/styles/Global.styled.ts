import {createGlobalStyle} from "styled-components";
import {Theme} from "styles/Theme";

export const GlobalStyled = createGlobalStyle`

  body {
    
    margin: 0;

    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.font};
    line-height: 1.2;

   
    
  }
  
  body.scroll-blocked {
    overflow: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: unset;
    text-decoration: unset;
    cursor:pointer;
  }

  h1, h2, h3 {
    margin: 0;
  }

  ul {
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor:pointer;
  }
  
  

  section {
    padding: 100px 0;

    @media ${Theme.media.tablet}{
      padding: 70px 0;
    }
  }

  section:nth-of-type(odd) {
    background-color: ${Theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${Theme.colors.secondaryBg};
  }
  
  

`