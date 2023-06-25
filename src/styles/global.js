import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    heiht: 100vh;
    background: linear-gradient(#e66465, #9198e5);
    font-family: Arial, Helvetica, sans-serif
}
`;

export default GlobalStyle;
