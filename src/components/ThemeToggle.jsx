import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ThemeToggle({ mode, toggleMode }) {
  const theme = useTheme();
  return (
    <IconButton onClick={toggleMode} color="inherit" sx={{ position: 'absolute', top: 16, right: 16 }} aria-label="toggle dark mode">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
