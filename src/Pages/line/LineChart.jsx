import React from 'react';
import { Box, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from '@mui/material/styles';
import Header from "../../Components/Header";

const data = [
  {
    id: 't-shirts',
    data: [
      { x: 'Maroc', y: 1200 },
      { x: 'France', y: 1500 },
      { x: 'Espagne', y: 1100 },
    ],
  },
  {
    id: 'jeans',
    data: [
      { x: 'Maroc', y: 800 },
      { x: 'France', y: 1300 },
      { x: 'Espagne', y: 950 },
    ],
  },
  {
    id: 'robes',
    data: [
      { x: 'Maroc', y: 600 },
      { x: 'France', y: 1100 },
      { x: 'Espagne', y: 800 },
    ],
  },
  {
    id: 'chaussures',
    data: [
      { x: 'Maroc', y: 500 },
      { x: 'France', y: 900 },
      { x: 'Espagne', y: 700 },
    ],
  },
];

const LineChart = ({isDashbord =false}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const gridColor = isDarkMode ? '#444444' : '#DDDDDD';

  return (
    <Box
      sx={{
        height:isDashbord ?"290px":"55vh",
        padding: '20px',
        borderRadius: '12px',
        width: '800px',
        margin: 'auto',
      }}
    >
              {!isDashbord && <Header Title="LINE CHART" subTitle="Clothing Sales by Country" />}

  
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:isDashbord? null : 'Pays',
          legendOffset: 36,
          legendPosition: 'middle',
          tickColor: textColor,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashbord? null :'Ventes',
          legendOffset: -40,
          legendPosition: 'middle',
          tickColor: textColor,
        }}
        enableGridX={false}
        enableGridY={true}
        gridYValues={5}
        gridColor={gridColor}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        useMesh={true}
        enableCrosshair={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: textColor,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: textColor,
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        tooltip={({ point }) => (
          <div
            style={{
              color: isDarkMode ? '#FFFFFF' : '#000000',
              background: isDarkMode ? '#000000' : '#FFFFFF' ,
              padding: '5px',
              borderRadius: '4px',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <strong>{point.serieId}</strong>: {point.data.yFormatted} à {point.data.x}
          </div>
        )}
      />
    </Box>
  );
};

export default LineChart;
