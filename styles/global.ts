import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    @media (max-width: 500px) {
      font-size: 81.25%;
    }
    @media (max-width: 385px) {
      font-size: 75%;
    }
    @media (max-width: 300px) {
      font-size: 71.875%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    --background: #F9F9F9;
    --shapped: #ddd9d9;

    --primary-black: #202020;

    --primary-gray: #2C2C2C;
    --secondary-gray: #B4B6C1;

    --primary-blue: #3786B3;
    --secondary-blue: #275b79;

    --primary-red: #b1202c;

    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
    color: var(--text-title);
  }

  a {
    color: inherit;
    text-decoration: none;
  }  

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;

    :hover {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`