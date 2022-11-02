import { Card, CardHeader, ThemeProvider, createTheme, CardContent, Grid } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import SpaIcon from '@mui/icons-material/Spa';
import React from 'react';
import CardList from './CardList';

const LatestSection = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: lightGreen[500],
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card variant='outlined'>
        <CardHeader avatar={<SpaIcon />} title='Terbaru' sx={{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        }} />
        <CardContent>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default LatestSection;