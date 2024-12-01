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
        height: "100vh", // Full screen height
        textAlign: 'center',
        backgroundColor: '#121212', // Set background color to black
        width: "100%",
        top:0,
      }}
    >
      <Typography variant="h1" color="#FFF"> {/* White color for 404 text */}
        404
      </Typography>
      <Typography variant="h5" color="#FFF"> {/* White color for the heading */}
        There is no design yet
      </Typography>
      <Typography color="#CCC" sx={{ marginBottom: 2 }}> {/* Lighter color for the subtext */}
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
