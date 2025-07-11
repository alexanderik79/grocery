import styled from 'styled-components';
import { colors } from './GlobalStyles';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.card};
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 8px;
`;

export const ItemText = styled.span<{ purchased: boolean }>`
  flex-grow: 1;
  font-size: 0.9rem;
  text-decoration: ${({ purchased }) => (purchased ? 'line-through' : 'none')};
`;

export const DeleteButton = styled.button`
  font-size: 0.8rem;
  padding: 6px 12px;
  background-color: ${colors.error};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.errorHover};
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
`;

export const EmptyText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: ${colors.textSecondary};
`;