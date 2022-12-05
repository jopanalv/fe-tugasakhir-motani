import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Traktor from '../assets/Traktor.svg';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const CardNego = ({ product }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <Card sx={{ maxWidth: { xs: 150, md: 220 }, mb: { xs: 3 }, height: 270 }}>
            <Link to={'/transaction/detail/' + product.id} style={{ color: 'inherit', textDecoration: 'none' }}>
                <CardActionArea>
                    <CardMedia component='img' image={product.Product.image} alt='gambar product' sx={{ width: { xs: 150, md: 220 }, height: 133 }} />
                    <CardContent sx={{ textDecoration: 'none' }}>
                        <Typography variant='body2' fontWeight='bold'>
                            {product.Product.name}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                            {product.Product.Category.name}
                        </Typography>
                        <Typography variant='body1'>
                            Rp <s>{product.Product.price}</s>
                        </Typography>
                        <Typography variant='body1'>
                            Jadi Rp {product.offer_price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}

export default CardNego;