import { createGlobalStyle } from "styled-components";
import FuturaBold from "../fonts/futura_bold-webfont.woff";
import FuturaMedium from "../fonts/futura_medium-webfont.woff";

const GlobalStyles = createGlobalStyle`
    body {
        animation-name: backgroundColorCycle;
        animation-duration: 65s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: linear; 
        margin: 0;
        font-family: futura-medium -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
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

    @keyframes backgroundColorCycle {
        0% {
            background: #a7d1ab ;
        }
        25% {
            background: #d69382;
        }
        50% {
            background: #adcc9d;
        }
        75% {
            background: #9f87af;
        }
        100% {
            background: #89B6C4;
        }
    }
`;

export default GlobalStyles;
