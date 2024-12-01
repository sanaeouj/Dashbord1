import React from 'react';
import { Box, Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import { useTheme } from '@mui/material/styles';

const data = [
  { id: 't-shirts', label: 'T-Shirts', value: 1200 },
  { id: 'jeans', label: 'Jeans', value: 800 },
  { id: 'robes', label: 'Robes', value: 600 },
  { id: 'chaussures', label: 'Chaussures', value: 500 },
];

// Function to get colors based on the theme
const getColors = (mode) => {
  return mode === 'dark'
    ? ['#1E88E5', '#FF5722', '#9C27B0', '#4CAF50']
    : ['#00C853', '#FFD600', '#FF3D00', '#FFAB00'];
};

const PieChart = ({ isDashbord = false }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const colors = getColors(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: isDashbord ? '390px' : '55vh',
        width: isDashbord ? '390px' : '55vh',
        margin: 'auto',
        marginTop: '20px',
        padding: '20px',
      }}
    >
      {!isDashbord && (
        <Typography variant="body1" sx={{ color: textColor }}>
          Wind Distribution Broadway Bar.
        </Typography>
      )}
      <ResponsivePie
        data={data}
        margin={isDashbord ? {top: 10, right: 0, bottom: 10, left: 0}: {top: 50, right: 80, bottom: 80, left: 80} }
        innerRadius={ isDarkMode ? 0.5 : 0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={textColor}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        colors={colors}
        legends={isDashbord ? [] : [ // Ensure legends is an array
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: textColor,
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: textColor,
                },
              },
            ],
          },
        ]}
        tooltip={({ datum }) => (
          <div
            style={{
              color: isDarkMode ? '#FFFFFF' : '#000000',
              background: isDarkMode ? '#000000' : '#FFFFFF',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <strong>{datum.label}</strong>: {datum.value}
          </div>
        )}
      />
    </Box>
  );
};

export default PieChart;
