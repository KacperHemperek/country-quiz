import { createGlobalStyle } from "styled-components";
import background from "./assets/images/background.png";
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-size: ${({ theme }) => theme.fontSize.questionBody};
    font-weight: 500;
    background: url(${background}) no-repeat;
    background-position: center;
    font-family: ${({ theme }) => theme.fonts.poppins};
    min-width: 100vw;
    min-height: 100vh;
    
  }
`;
