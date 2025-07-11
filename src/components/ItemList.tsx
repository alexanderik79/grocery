import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { togglePurchased, deleteItem, clearAll } from '../features/shopping/shoppingSlice';
import {
  ListContainer,
  ItemContainer,
  ItemText,
  DeleteButton,
  ClearAllButton,
  ShareButton,
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
    }, 300);
  };

  const handleClearAll = () => {
    if (items.length === 0) return;
    if (window.confirm('Are you sure you want to clear the entire list?')) {
      setRemovingItems(items.map(item => item.id));
      setTimeout(() => {
        dispatch(clearAll());
        setRemovingItems([]);
      }, 300);
    }
  };

  const handleShare = () => {
    if (items.length === 0) return;
    try {
      const encodedList = btoa(JSON.stringify(items));
      const shareUrl = `${window.location.origin}/?list=${encodedList}`;
      navigator.clipboard.writeText(shareUrl);
      window.alert('Share link copied to clipboard!');
    } catch (e) {
      window.alert('Failed to generate share link.');
      console.warn('Share error:', e);
    }
  };

  return (
    <ListContainer>
      {items.length === 0 ? (
        <EmptyText>No items yet</EmptyText>
      ) : (
        <>
          {items.map(item => (
            <ItemContainer
              key={item.id}
              className={removingItems.includes(item.id) ? 'removing' : ''}
            >
              <Checkbox
                checked={item.purchased}
                onChange={() => dispatch(togglePurchased(item.id))}
              />
              <ItemText purchased={item.purchased ? true : undefined}>
                {item.name} (x{item.quantity})
              </ItemText>
              <DeleteButton onClick={() => handleDelete(item.id)}>
                Delete
              </DeleteButton>
            </ItemContainer>
          ))}
          <ClearAllButton onClick={handleClearAll} disabled={items.length === 0}>
            Clear All
          </ClearAllButton>
          <ShareButton onClick={handleShare} disabled={items.length === 0}>
            Share
          </ShareButton>
        </>
      )}
    </ListContainer>
  );
};

export default ItemList;