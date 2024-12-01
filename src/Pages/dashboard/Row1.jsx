import React from "react";
import { Paper, Stack, Typography, Box } from "@mui/material";
import { MailOutline, Call, PersonAddAlt, Traffic } from "@mui/icons-material";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material/styles";

const Row1 = () => {
  const theme = useTheme();
  const items = [
    {
      icon: <MailOutline fontSize="large" />,
      title: "12,361",
      subtitle: "Emails Sent",
      chartData: [
        { id: "sent", label: "Sent", value: 14 },
        { id: "unsent", label: "Unsent", value: 86 },
      ],
    },
    {
      icon: <Call fontSize="large" />,
      title: "430,000",
      subtitle: "Sales",
      chartData: [
        { id: "completed", label: "Completed", value: 25 },
        { id: "pending", label: "Pending", value: 75 },
      ],
    },
    {
      icon: <PersonAddAlt fontSize="large" />,
      title: "10,000",
      subtitle: "New Clients",
      chartData: [
        { id: "new", label: "New", value: 40 },
        { id: "existing", label: "Existing", value: 60 },
      ],
    },
    {
      icon: <Traffic fontSize="large" />,
      title: "23,441,552",
      subtitle: "Traffic Volume",
      chartData: [
        { id: "mobile", label: "Mobile", value: 75 },
        { id: "desktop", label: "Desktop", value: 25 },
      ],
    },
  ];

  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="wrap"
      gap={2}
      justifyContent="space-between"
    >
      {items.map((item, index) => (
        <Paper
          key={index}
          sx={{
            minWidth: { xs: "100%", sm: "333px" },
            p: 2.5,
            display: "flex",
            flexDirection: "row", 
            alignItems: "center",  
            gap: 2,  
          }}
        >
           <Stack direction="column" spacing={1} sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.main,
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.icon}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.subtitle}
            </Typography>
          </Stack>

           <Box
            sx={{
              height: "100px",
              width: "100px",
              flexShrink: 0,  
            }}
          >
            <ResponsivePie
              data={item.chartData}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              innerRadius={0.6}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
              colors={{ scheme: 'nivo' }}
              enableArcLinkLabels={false}  
            />
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default Row1;
