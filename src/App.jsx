import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './Components/Navbar'; 
import Sidebar from './Components/Sidebar'; 
import { CssBaseline, Box } from '@mui/material';
import { getDesignTokens } from './Components/Theme';  
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes

const App = () => {
  const [mode, setMode] = useState("light");
  const [open, setOpen] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme") || "light";
    setMode(savedMode);
  }, []);

  // Toggle theme mode
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  // Create a theme instance
  const theme = createTheme(getDesignTokens(mode));

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
        <Navbar 
          open={open} 
          handleDrawerOpen={handleDrawerOpen} 
          toggleMode={toggleMode} 
        />
        <Sidebar 
          open={open} 
          handleDrawerClose={handleDrawerClose} 
        />
        <Box 
          component="main" 
          sx={{ flexGrow: 1, p: 3 }}
          role="main" // Accessibility improvement
        >
          <Outlet /> {/* This will render the child routes */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;