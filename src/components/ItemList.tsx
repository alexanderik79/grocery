import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { togglePurchased, deleteItem } from '../features/shopping/shoppingSlice';
import {
  ListContainer,
  ItemContainer,
  ItemText,
  DeleteButton,
  Checkbox,
  EmptyText,
} from '../styles/ItemListStyles';

const ItemList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector((state: RootState) => state.shopping.items);

  return (
    <ListContainer>
      {items.length === 0 ? (
        <EmptyText>No items yet</EmptyText>
      ) : (
        items.map(item => (
          <ItemContainer key={item.id}>
            <Checkbox
              checked={item.purchased}
              onChange={() => dispatch(togglePurchased(item.id))}
            />
            <ItemText purchased={item.purchased}>
              {item.name} (x{item.quantity})
            </ItemText>
            <DeleteButton onClick={() => dispatch(deleteItem(item.id))}>
              Delete
            </DeleteButton>
          </ItemContainer>
        ))
      )}
    </ListContainer>
  );
};

export default ItemList;