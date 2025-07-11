import styled from 'styled-components';
import { colors } from './GlobalStyles';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${colors.card};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  font-size: 0.9rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${colors.primary};
  }
`;

export const Button = styled.button`
  font-size: 0.9rem;
  padding: 8px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primaryHover};
  }
`;