import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";  
import { useTheme } from "@emotion/react";

const Header = ({ Title, subTitle }) => {  
  const theme = useTheme(); 
  return (
    <Box>
      {/* Title and Subtitle Section */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.info.light,  
            fontWeight: "bold",
          }}
        >
          {Title}
        </Typography>
        <Typography variant="body1">{subTitle}</Typography>
      </Box>

      {/* Button Section */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
       
      </Box>
    </Box>
  );
};

export default Header;
