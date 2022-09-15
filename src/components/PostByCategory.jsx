import { Button, Grid, Typography, ThemeProvider, createTheme } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React from 'react';
import CardList from './CardList';

const PostByCategory = () => {
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
            <Grid container direction='row' mb={3}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Kategori</Typography>
                <Button variant='contained' size='small' sx={{ textDecoration: 'none', ml: 2 }}>
                    Lihat semua
                </Button>
            </Grid>
            <Grid container spacing={1} direction='row' justifyContent='space-between' alignItems='center'>
                <CardList />
                <CardList />
                <CardList />
                <CardList />
                <CardList />
                <CardList />
            </Grid>
        </ThemeProvider>
    )
}

export default PostByCategory;