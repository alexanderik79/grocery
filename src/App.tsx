import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import type { AppDispatch } from './store';
import { store } from './store';
import { setItems } from './features/shopping/shoppingSlice';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import { GlobalStyle } from './styles/GlobalStyles';
import { AppContainer, Title } from './styles/AppStyles';
import { useEffect } from 'react';

const AppContent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedList = params.get('list');
    if (encodedList) {
      try {
        const decodedList = JSON.parse(decodeURIComponent(atob(encodedList)));
        // Проверяем, что decodedList — массив объектов с нужной структурой
        if (Array.isArray(decodedList) && decodedList.every(item => 
          typeof item.id === 'string' &&
          typeof item.name === 'string' &&
          typeof item.quantity === 'number' &&
          typeof item.purchased === 'boolean'
        )) {
          dispatch(setItems(decodedList));
        } else {
          console.warn('Invalid list format in URL');
        }
      } catch (e) {
        console.warn('Failed to load list from URL:', e);
      }
    }
  }, [dispatch]);

  return (
    <AppContainer>
      <Title>Shopping List</Title>
      <AddItem />
      <ItemList />
    </AppContainer>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <AppContent />
  </Provider>
);

export default App;