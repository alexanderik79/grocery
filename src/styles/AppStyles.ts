import styled from 'styled-components';
import { colors } from './GlobalStyles';

export const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  min-height: 100vh;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
  color: ${colors.text};
`;