import React from "react";
import { Typography, Box, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Change to 100vh for full screen height
        textAlign: 'center',
        margin: '0 auto',
        backgroundColor: theme.palette.background.default,
        padding: 2,
      }}
    >
      <Typography variant="h1" color={theme.palette.error.main}>
        404
      </Typography>
      <Typography variant="h5" color={theme.palette.text.primary}>
        There is no design yet
      </Typography>
      <Typography color={theme.palette.text.secondary} sx={{ marginBottom: 2 }}>
        Please try again later..
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/dashboard"  
        sx={{ marginBottom: 1 }}  
      >
        Go to Home
      </Button>
     
    </Box>
  );
};

export default NotFound;