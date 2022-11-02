import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Traktor from '../assets/Traktor.svg';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const CardList = ({ product }) => {
    const user = localStorage.getItem('user');
    return (
        <Card sx={{ maxWidth: 200, mb: { xs: 3 } }}>
            <Link to={user?.role === 'buyer' ? '/detail/' + product.slug : '/product/edit/' + product.slug} style={{ color: 'inherit', textDecoration: 'none' }}>
                <CardActionArea>
                    <CardMedia component='img' image={product.image} alt='gambar product' sx={{ width: 200, height: 133 }} />
                    <CardContent sx={{ textDecoration: 'none' }}>
                        <Typography variant='h6' fontWeight='bold'>
                            {product.name}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                            {product.Category.name}
                        </Typography>
                        <Typography variant='body1'>
                            Rp {product.price}
                        </Typography>
                        <Typography variant='body2' color={green[700]}>
                            {product.stock} Tersedia
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}

export default CardList