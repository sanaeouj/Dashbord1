import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { CssBaseline, Box } from "@mui/material";
import { getDesignTokens } from "./Components/Theme";
import { Outlet } from "react-router-dom";
import './index.css';

const App = () => {
  const [mode, setMode] = useState("light"); // Default theme
  const [open, setOpen] = useState(false); // Sidebar state

  // Load theme mode from localStorage on mount
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem("theme") || "light";
      setMode(savedMode);
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  // Toggle theme mode and save it to localStorage
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    try {
      localStorage.setItem("theme", newMode);
    } catch (error) {
      console.error("Could not save theme to localStorage:", error);
    }
  };

  // Theme instance
  const theme = createTheme(getDesignTokens(mode));

  // Handle drawer state
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      {/* Global styles */}
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* Navbar */}
        <Navbar 
          open={open} 
          handleDrawerOpen={handleDrawerOpen} 
          toggleMode={toggleMode} 
        />
        {/* Sidebar */}
        <Sidebar 
          open={open} 
          handleDrawerClose={handleDrawerClose} 
        />
        {/* Main content */}
        <Box 
          component="main" 
          sx={{ flexGrow: 1, p: 3, display: 'flex', height: "100%",weidth:'100%', mt: "100px" }} 
          role="main" 
          className="main"
        >
          <Outlet /> {/* Nested routes rendered here */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
