import styled from 'styled-components';
import { colors } from './GlobalStyles';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${colors.card};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  font-size: 1.4rem;
  padding: 8px;
  background-color: ${colors.card};
  color: ${colors.text};
  border: 1px solid ${colors.textSecondary};
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.3);
  }
`;

export const Button = styled.button`
  font-size: 1.4rem;
  padding: 8px;
  background-color: ${colors.primary};
  color: ${colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primaryHover};
  }
  &:disabled {
    background-color: ${colors.textSecondary};
    cursor: not-allowed;
  }
`;