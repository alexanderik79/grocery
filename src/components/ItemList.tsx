import React, { useState } from 'react';
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
  const [removingItems, setRemovingItems] = useState<string[]>([]);

  const handleDelete = (id: string) => {
    setRemovingItems(prev => [...prev, id]);
    setTimeout(() => {
      dispatch(deleteItem(id));
      setRemovingItems(prev => prev.filter(itemId => itemId !== id));
    }, 300); // Длительность анимации slideOut (0.3s)
  };

  return (
    <ListContainer>
      {items.length === 0 ? (
        <EmptyText>No items yet</EmptyText>
      ) : (
        items.map(item => (
          <ItemContainer
            key={item.id}
            className={removingItems.includes(item.id) ? 'removing' : ''}
          >
            <Checkbox
              checked={item.purchased}
              onChange={() => dispatch(togglePurchased(item.id))}
            />
            <ItemText purchased={item.purchased}>
              {item.name} (x{item.quantity})
            </ItemText>
            <DeleteButton onClick={() => handleDelete(item.id)}>
              Delete
            </DeleteButton>
          </ItemContainer>
        ))
      )}
    </ListContainer>
  );
};

export default ItemList;