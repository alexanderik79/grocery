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

const initialState: ShoppingState = {
  items: [],
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
    },
    togglePurchased: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.purchased = !item.purchased;
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, togglePurchased, deleteItem } = shoppingSlice.actions;
export const selectItems = (state: RootState) => state.shopping.items;
export default shoppingSlice.reducer;