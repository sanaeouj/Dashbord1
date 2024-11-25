import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Box } from '@mui/material';

// Jeu de données pour les ventes de vêtements
const data = [
  {
    country: 'Maroc',
    't-shirts': 1200,
    'jeans': 800,
    'robes': 600,
    'chaussures': 500,
    'vestes': 450,
    'accessoires': 350,
  },
  {
    country: 'France',
    't-shirts': 1500,
    'jeans': 1300,
    'robes': 1100,
    'chaussures': 900,
    'vestes': 850,
    'accessoires': 700,
  },
  {
    country: 'Espagne',
    't-shirts': 1100,
    'jeans': 950,
    'robes': 800,
    'chaussures': 700,
    'vestes': 600,
    'accessoires': 500,
  }
];

const BarChart = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}> {/* Définir une hauteur pour le graphique */}
      <ResponsiveBar
        data={data}
        keys={['t-shirts', 'jeans', 'robes', 'chaussures', 'vestes', 'accessoires']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'chaussures',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'vestes',
            },
            id: 'lines',
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Pays',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Ventes',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
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
          },
        ]}
        role="application"
        ariaLabel="Ventes de vêtements en ligne"
        barAriaLabel={(e) => `${e.id}: ${e.formattedValue} dans le pays: ${e.indexValue}`}
      />
    </Box>
  );
};

export default BarChart;