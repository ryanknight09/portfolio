import { createGlobalStyle } from "styled-components";
import FuturaBold from "../fonts/futura_bold-webfont.woff";
import FuturaMedium from "../fonts/futura_medium-webfont.woff";

const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif, "futura";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    @font-face {
        font-family: futura-medium;
        src: url(${FuturaMedium}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: futura-bold;
        src: url(${FuturaBold}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
`;

export default GlobalStyles;
