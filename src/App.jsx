import React, { useState, useMemo } from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggle mode={mode} toggleMode={toggleMode} />
      <Container maxWidth="sm" sx={{ py: 4, position: 'relative' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Expense Manager
        </Typography>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
