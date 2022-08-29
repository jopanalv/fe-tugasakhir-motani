import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Traktor from '../assets/Traktor.svg';

const CardList = () => {
    return (
        <Card sx={{maxWidth: 200}}>
            <CardActionArea>
                <CardMedia component='img' height='133' width='200' image={Traktor} alt='traktor'/>
                <CardContent>
                    <Typography variant='h6'>
                        Traktor Lurr
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Alat Berat
                    </Typography>
                    <Typography variant='h6'>
                        Rp 2000000
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardList