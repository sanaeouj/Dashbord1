import { Paper, Stack, Typography, Box, IconButton } from "@mui/material";
import React from "react";
import LineChart from "../line/LineChart";
import { useTheme } from "@mui/material/styles";
import { DownloadOutlined } from "@mui/icons-material";

const transactions = [
  { txId: "TX12345", user: "John Doe", date: "2024-11-25", cost: 250 },
  { txId: "TX67890", user: "Jane Smith", date: "2024-11-26", cost: 100 },
  { txId: "TX13579", user: "Alice Brown", date: "2024-11-27", cost: 300 },
  { txId: "TX12345", user: "John Doe", date: "2024-11-25", cost: 250 },
  { txId: "TX12345", user: "John Doe", date: "2024-11-25", cost: 250 },
  { txId: "TX67890", user: "Jane Smith", date: "2024-11-26", cost: 100 },
  { txId: "TX13579", user: "Alice Brown", date: "2024-11-27", cost: 300 },
  { txId: "TX12345", user: "John Doe", date: "2024-11-25", cost: 250 },
];

const Row2 = () => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={2}
      sx={{
        maxWidth: "100%",
        mt: "50px",
        height: 600,
      }}
    >
      <Paper
        sx={{
          maxWidth: 900,
          flexGrow: 1,
          p: 2,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Box sx={{ height: 300, mt: 2 }}>
          <LineChart isDashbord={true} />
        </Box>
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          maxHeight: 600,
          overflow: "auto",
        }}
      >
        <Paper sx={{ mb: 2, p: 2 }}>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight="bold"
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {transactions.map((transaction, index) => (
          <Paper
            key={index}
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box>
              <Typography variant="body1" fontWeight="600">
                {transaction.txId}
              </Typography>
              <Typography variant="body2">{transaction.user}</Typography>
            </Box>

            <Typography variant="body1">{transaction.date}</Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
              variant="body2"
            >
              ${transaction.cost}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Stack>
  );
};

export default Row2;
