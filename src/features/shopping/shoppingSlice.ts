import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface Item {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
}

interface ShoppingState {
  items: Item[];
}

const loadFromLocalStorage = (): Item[] => {
  try {
    const serializedState = localStorage.getItem('shoppingList');
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Failed to load from localStorage:', e);
    return [];
  }
};

const initialState: ShoppingState = {
  items: loadFromLocalStorage(),
};

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<Item, 'id' | 'purchased'>>) => {
      state.items.push({
        ...action.payload,
        id: crypto.randomUUID(),
        purchased: false,
      });
      localStorage.setItem('shoppingList', JSON.stringify(state.items));
    },
    togglePurchased: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.purchased = !item.purchased;
      localStorage.setItem('shoppingList', JSON.stringify(state.items));
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('shoppingList', JSON.stringify(state.items));
    },
    clearAll: (state) => {
      state.items = [];
      localStorage.setItem('shoppingList', JSON.stringify(state.items));
    },
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
      localStorage.setItem('shoppingList', JSON.stringify(state.items));
    },
  },
});

export const { addItem, togglePurchased, deleteItem, clearAll, setItems } = shoppingSlice.actions;
export const selectItems = (state: RootState) => state.shopping.items;
export default shoppingSlice.reducer;