import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Dashboard = () => {
  const theme = useTheme(); // Correctly using 'theme'

  return (
    <div style={{ width: "100%",height:"100%" }}>
   
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined sx={{ marginRight: "8px" }} />
          Download Reports
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
