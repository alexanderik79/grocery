import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #121212;
    color: #f1f1f1;
  }

  input, button, select, textarea {
    font-family: inherit;
    background-color: #1e1e1e;
    color: #f1f1f1;
    border: 1px solid #444;
    padding: 0.5rem;
    border-radius: 4px;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.3);
  }

  button {
    cursor: pointer;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #357ab8;
  }

  button:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

export const colors = {
  primary: '#4a90e2',
  primaryHover: '#357ab8',
  error: '#e57373',
  errorHover: '#d32f2f',
  text: '#f1f1f1',
  textSecondary: '#bbb',
  background: '#121212',
  card: '#1e1e1e',
};
