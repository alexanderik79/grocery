import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import type { RootState, AppDispatch } from '../store';
import { togglePurchased, deleteItem, clearAll } from '../features/shopping/shoppingSlice';
import { FiTrash2 } from 'react-icons/fi';
import { FiShare2 } from 'react-icons/fi';
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
  const navigate = useNavigate(); // Initialize useNavigate
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
        navigate('/'); // Redirect to the root path after clearing
      }, 300);
    }
  };

  const handleShare = async () => {
    if (items.length === 0) return;
    try {
      const encodedList = btoa(encodeURIComponent(JSON.stringify(items)));
      const shareUrl = `${window.location.origin}/?list=${encodedList}`;
      if (navigator.share) {
        await navigator.share({
          title: 'Shopping List',
          text: 'Check out my shopping list!',
          url: shareUrl,
        });
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        window.alert('Share link copied to clipboard!');
      } else {
        window.alert('Sharing not supported. Please copy the link manually: ' + shareUrl);
      }
    } catch (e) {
      window.alert('Failed to share list. Try again.');
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
                <FiTrash2 style={{ marginTop: '4px' }} />
              </DeleteButton>
            </ItemContainer>
          ))}
          <ClearAllButton onClick={handleClearAll} disabled={items.length === 0}>
            <FiTrash2 style={{ marginRight: '8px' }} />
            Clear All
          </ClearAllButton>

          <ShareButton onClick={handleShare} disabled={items.length === 0}>
            <FiShare2 style={{ marginRight: '8px' }} />
            Share
          </ShareButton>
        </>
      )}
    </ListContainer>
  );
};

export default ItemList;