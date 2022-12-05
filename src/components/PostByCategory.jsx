import { Button, Grid, Typography, ThemeProvider, createTheme } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../redux/action/productAction';
import CardList from './CardList';

const PostByCategory = ({ category }) => {
    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProducts())
    }, []);

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
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{category.name}</Typography>
                <Link to={'/category/'+category.id} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Button variant='contained' size='small' sx={{ textDecoration: 'none', ml: 2, fontWeight: 'bold' }}>
                        Lihat semua
                    </Button>
                </Link>
            </Grid>
            <Grid container gap={1} direction='row' alignItems='center' sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {products?.map((product) =>
                    product.CategoryId === category?.id ? (
                        <CardList key={product.id} product={product} />
                    ) : null)}
            </Grid>
        </ThemeProvider>
    )
}

export default PostByCategory;