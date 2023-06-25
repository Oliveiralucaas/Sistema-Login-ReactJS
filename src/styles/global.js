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
    background: radial-gradient(circle, rgba(4,4,4,1) 3%, rgba(102,102,102,1) 51%, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%);
    font-family: Arial, Helvetica, sans-serif
}
`;

export default GlobalStyle;
