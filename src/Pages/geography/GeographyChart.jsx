import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geo } from './world_countries'; // Assurez-vous que le chemin est correct
import { data } from './data'; // Assurez-vous que le chemin est correct

const GeographyChart = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                padding: '30px',
                borderRadius: '12px',
                height: '600px',
                width: '800px',
                margin: 'auto',
            }}
        >
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
                Geography Chart
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
                Distribution géographique des données.
            </Typography>
            <ResponsiveChoropleth
            
                data={data}
                features={geo.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 1000000]}
                unknownColor={theme.palette.mode === 'dark' ? '#444444' : '#666666'} // Couleur dynamique pour les zones inconnues
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule={true}
                graticuleLineColor={theme.palette.mode === 'dark' ? '#555555' : '#dddddd'} // Ligne graticule
                borderWidth={0.5}
                borderColor={theme.palette.mode === 'dark' ? '#fff' : '#000'} // Bordures dynamiques
                
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: theme.palette.mode === 'dark' ? '#bbdefb' : '#38bcb2', 
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: theme.palette.mode === 'dark' ? '#ffab00' : '#eed312', // Dynamique pour les lignes
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            {
                                offset: 0,
                                color: theme.palette.mode === 'dark' ? '#000' : '#222',
                            },
                            {
                                offset: 100,
                                color: 'inherit',
                            },
                        ],
                    },
                ]}
                fill={[
                    {
                        match: { id: 'CAN' },
                        id: 'dots',
                    },
                    {
                        match: { id: 'CHN' },
                        id: 'lines',
                    },
                    {
                        match: { id: 'ATA' },
                        id: 'gradient',
                    },
                ]}
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: theme.palette.text.primary, 
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </Box>
    );
};

export default GeographyChart;