import { createGlobalStyle } from 'styled-components';
import { device } from './config/css';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        @media ${device.mobileS} {
            font-size: 14px;
        }

        @media ${device.mobileL} {
            font-size: 16px;
        }

        @media ${device.desktop} {
            font-size: 18px;
        }
    }

    *, *::before, &::after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
    }

    p {
        font-size: inherit;
    }

    a {
        color: white;
        text-decoration: none;
        display: inline-block;
        font-weight: bold;
    }

    ul {
        padding-left: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    .fa-heart {
        color: red;
        margin-right: 2px;
    }

    h1 {
        text-align: center;
    }

    h3 {
        margin-bottom: 0;
    }

    textarea {
        resize: none;
        outline: none;
    }

    button {
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
        background-color: transparent;
        color: white;
        border: none;
        font-weight: bold;
    }

    a {
        display: inline-block;
        margin: 0.6rem;
    }

    button:hover {
        cursor: pointer;
    }
`;

export default GlobalStyles;
