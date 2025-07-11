import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  input, button {
    font-family: inherit;
  }
`;

export const colors = {
  primary: '#007bff',
  primaryHover: '#0056b3',
  error: '#dc3545',
  errorHover: '#b02a37',
  text: '#333',
  textSecondary: '#666',
  background: '#f5f5f5',
  card: '#fff',
};