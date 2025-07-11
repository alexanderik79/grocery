import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
import { addItem } from '../features/shopping/shoppingSlice';
import { FormContainer, Input, Button } from '../styles/AddItemStyles';

interface FormData {
  name: string;
  quantity: number;
}

const AddItem: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { name: '', quantity: 1 },
  });

  const onSubmit = (data: FormData) => {
    dispatch(addItem(data));
    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Product Name"
        {...register('name', { required: 'Name is required' })}
      />
      <Input
        type="number"
        placeholder="Quantity"
        {...register('quantity', {
          required: 'Quantity is required',
          min: { value: 1, message: 'Minimum 1' },
          valueAsNumber: true,
        })}
      />
      <Button type="submit">Add Item</Button>
    </FormContainer>
  );
};

export default AddItem;