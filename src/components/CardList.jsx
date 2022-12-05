import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Traktor from '../assets/Traktor.svg';
import { green, red } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const CardList = ({ product }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <Card sx={{ maxWidth: { xs: 150, md: 220 }, mb: { xs: 3 }, height: 270 }}>
            <Link to={user?.role === 'buyer' || !user ? '/detail/' + product.slug : '/product/edit/' + product.slug} style={{ color: 'inherit', textDecoration: 'none' }}>
                <CardActionArea>
                    <CardMedia component='img' image={product.image} alt='gambar product' sx={{ width: { xs: 150, md: 220 }, height: 133 }} />
                    <CardContent sx={{ textDecoration: 'none' }}>
                        <Typography variant='body2' fontWeight='bold'>
                            {product.name}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                            {product.Category.name}
                        </Typography>
                        <Typography variant='body1'>
                            Rp {product.price} / hari
                        </Typography>
                        <Typography variant='body2' color={green[700]}>
                        </Typography>
                        {product.stock > 0 ? (
                            <Typography variant='body2' color={green[700]}>
                                Tersedia
                            </Typography>
                        ) : (
                            <Typography variant='body2' color={red[700]}>
                                Tidak Tersedia
                            </Typography>
                        )}
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}

export default CardList