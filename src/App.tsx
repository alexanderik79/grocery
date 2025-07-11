import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import { GlobalStyle } from './styles/GlobalStyles';
import { AppContainer, Title } from './styles/AppStyles';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <AppContainer>
      <Title>Shopping List</Title>
      <AddItem />
      <ItemList />
    </AppContainer>
  </Provider>
);

export default App;