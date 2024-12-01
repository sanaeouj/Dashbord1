import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import PieChart from "../pie/PieChart";
import { useTheme } from "@mui/material/styles";
import BarChart from "../Bar/BarChart";

const Row3 = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      justifyContent="space-between"
      sx={{ marginTop: "20px" }}
    >
      <Paper sx={{ minWidth:"300px" ,width: "32%", padding: "20px" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          Campaign
        </Typography>
        <PieChart isDashbord={true} />
      </Paper>
      <Paper sx={{minWidth:"300px" , width: "32%", padding: "20px", textAlign: "center" }}>
      <Typography
  color={theme.palette.secondary.main}
  variant="h6"
  fontWeight="600"
  sx={{ padding: "30px 30px 0 30px" }}
>
  Sales Quantity
</Typography>
<BarChart isDashbord={true}  />
      </Paper>
      <Paper sx={{minWidth:"300px" , width: "32%", padding: "20px", textAlign: "center" }}>
        <Typography variant="body1" fontWeight={500}>
          Sanae
        </Typography>
      </Paper>
    </Box>
  );
};

export default Row3;
