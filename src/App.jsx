import React, { useState } from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Expense Manager
        </Typography>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} />
      </Container>
    </>
  );
}

export default App;
