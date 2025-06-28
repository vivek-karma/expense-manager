import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

export default function ExpenseList({ expenses }) {
  return (
    <Box sx={{ mt: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Expenses
      </Typography>
      <List>
        {expenses.length === 0 && (
          <ListItem>
            <ListItemText primary="No expenses yet." />
          </ListItem>
        )}
        {expenses.map((exp, idx) => (
          <React.Fragment key={idx}>
            <ListItem>
              <ListItemText
                primary={`${exp.category} - $${exp.amount.toFixed(2)}`}
                secondary={`${exp.date} | ${exp.description}`}
              />
            </ListItem>
            {idx < expenses.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
