import styled, { keyframes } from 'styled-components';
import { colors } from './GlobalStyles';

const slideIn = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(30px);
    opacity: 0;
  }
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  gap: 8px;
  animation: ${slideIn} 0.3s ease-out forwards;

  &.removing {
    animation: ${slideOut} 0.3s ease-out forwards;
  }
`;

export const ItemText = styled.span<{ purchased?: boolean }>`
  flex-grow: 1;
  font-size: 2rem;
  color: ${colors.text};
  text-decoration: ${({ purchased }) => (purchased ? 'line-through' : 'none')};
`;

export const DeleteButton = styled.button`
  font-size: 2rem;
  padding: 6px 12px;
  background-color: ${colors.error};
  color: ${colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.errorHover};
  }
`;

export const ClearAllButton = styled.button`
  font-size: 1.2rem;
  padding: 8px;
  background-color: ${colors.error};
  color: ${colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  margin-top: 12px;
  &:hover {
    background-color: ${colors.errorHover};
  }
  &:disabled {
    background-color: ${colors.textSecondary};
    cursor: not-allowed;
  }
`;

export const ShareButton = styled.button`
  font-size: 1.2rem;
  padding: 8px;
  background-color: ${colors.primary};
  color: ${colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  margin-top: 8px;
  &:hover {
    background-color: ${colors.primaryHover};
  }
  &:disabled {
    background-color: ${colors.textSecondary};
    cursor: not-allowed;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 26px;
  height: 26px;
  accent-color: ${colors.primary};
  cursor: pointer;
  &:checked {
    animation: ${scale} 0.2s ease;
  }
`;

export const EmptyText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${colors.textSecondary};
`;