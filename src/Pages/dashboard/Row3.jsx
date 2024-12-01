import { Stack, Paper, Typography } from "@mui/material";
import React from "react";
import PieChart from "../pie/PieChart";
import { useTheme } from "@mui/material/styles";
import BarChart from "../bar/BarChart";
import GeographyChart from "../geography/GeographyChart";

const Row3 = () => {
  const theme = useTheme();

  return (
    <Stack direction="row" flexWrap="wrap" gap={3} sx={{ marginTop: "30px" }}>
      {/* Pie Chart */}
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "300px",
          width: "32%",
          padding: "20px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
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

      {/* Bar Chart */}
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "300px",
          width: "32%",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <BarChart isDashbord={true} />
      </Paper>

      {/* Geography Chart */}
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "300px",
          width: "32%",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Geography
        </Typography>
        <GeographyChart isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
