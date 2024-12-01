import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from "../../Components/Header";

const data = [
  {
    country: 'Maroc',
    't-shirts': 1200,
    'jeans': 800,
    'robes': 600,
    'chaussures': 500,
  },
  {
    country: 'France',
    't-shirts': 1500,
    'jeans': 1300,
    'robes': 1100,
    'chaussures': 900,
  },
  {
    country: 'Espagne',
    't-shirts': 1100,
    'jeans': 950,
    'robes': 800,
    'chaussures': 700,
  },
];

const BarChart = ({ isDashbord = false }) => {
  const theme = useTheme();

  const textColor = theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: isDashbord ? '450px' :'60vh', // Centrer verticalement
        width: isDashbord ? '450px' :  '100%', // Prendre toute la largeur
        backgroundColor: 'transparent',
      }}
    >
      <Box
        sx={{
          height: isDashbord ? '390px' : '55vh',
          width: isDashbord ? '690px' : '55vh',
        }}
      >
        {!isDashbord && <Header Title="BAR CHART" subTitle="Clothing Sales by Country" />}
        <ResponsiveBar
          data={data}
          keys={['t-shirts', 'jeans', 'robes', 'chaussures']}
          indexBy="country"
          margin={isDashbord ? { top: 20, right: 40, bottom: 10, left: 40 } : { top: 30, right: 130, bottom: 50, left: 60 }}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={({ id }) => {
            switch (id) {
              case 't-shirts':
                return theme.palette.primary.main;
              case 'jeans':
                return theme.palette.secondary.main;
              case 'robes':
                return theme.palette.error.main;
              case 'chaussures':
                return theme.palette.success.main;
              default:
                return theme.palette.text.primary;
            }
          }}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
          borderWidth={0}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Pays',
            legendPosition: 'middle',
            legendOffset: 32,
            tickTextColor: textColor,
            legendTextColor: textColor,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Ventes',
            legendPosition: 'middle',
            legendOffset: -40,
            tickTextColor: textColor,
            legendTextColor: textColor,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={textColor}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
              itemTextColor: textColor,
            },
          ]}
          role="application"
          ariaLabel="Ventes de vêtements en ligne"
          barAriaLabel={(e) => `${e.id}: ${e.formattedValue} dans le pays: ${e.indexValue}`}
          tooltip={({ id, value, indexValue }) => (
            <div
              style={{
                color: textColor,
                backgroundColor: theme.palette.background.paper,
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              {`${id}: ${value} dans ${indexValue}`}
            </div>
          )}
          theme={{
            background: 'transparent',
            axis: {
              ticks: {
                text: {
                  fill: textColor,
                },
              },
            },
            legends: {
              text: {
                fill: textColor,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default BarChart;
