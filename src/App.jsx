import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './Components/Navbar'; 
import Sidebar from './Components/Sidebar'; 
import { CssBaseline, Box } from '@mui/material';
import { getDesignTokens } from './Components/Theme';  

const App = () => {
  const [mode, setMode] = useState("light");
  const [open, setOpen] = useState(false);
  const theme = createTheme(getDesignTokens(mode));

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} toggleMode={toggleMode} />
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Bienvenue dans l'application</h1>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;