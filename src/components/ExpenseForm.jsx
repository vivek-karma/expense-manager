import React, { useState } from 'react';
import { Box, Button, TextField, Autocomplete, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const categories = [
  'Food',
  'Transport',
  'Utilities',
  'Shopping',
  'Health',
  'Entertainment',
  'Other',
];

export default function ExpenseForm({ onAddExpense }) {
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(categories[0]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) return;
    onAddExpense({
      date: date.toISOString().split('T')[0],
      category,
      amount: parseFloat(amount),
      description,
    });
    setAmount('');
    setDescription('');
    setCategory(categories[0]);
    setDate(new Date());
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, maxWidth: 400, mx: 'auto' }}>
      <Stack spacing={2}>
        <DatePicker
          label="Date"
          value={date}
          onChange={setDate}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
        <Autocomplete
          options={categories}
          value={category}
          onChange={(_, newValue) => setCategory(newValue || '')}
          renderInput={(params) => <TextField {...params} label="Category" fullWidth />}
        />
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Expense
        </Button>
      </Stack>
    </Box>
  );
}
