import { createGlobalStyle } from "styled-components";
import FuturaBold from "../fonts/futura_bold-webfont.woff";
import FuturaMedium from "../fonts/futura_medium-webfont.woff";
import variables from "./variables";

const GlobalStyles = createGlobalStyle`
    ${variables};

    body {
        ${({ theme }) => theme.mixins.backGroundRotation};
        background-color: #9f87af;
        margin: 0;
        font-family: futura-medium -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif, "futura";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }

     /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: #4B4B4B;
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, .5);
  }

    section {
        margin: 0 auto;
        max-width: 1000px;
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
