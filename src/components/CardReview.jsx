import { Avatar, Grid, Rating, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useState } from 'react';

const CardReview = ({ review }) => {
    const [rate, setRate] = useState(review.rate)
    return (
        <Grid p={2} container direction='row' justifyContent='flex-start' alignItems='start'>
            <Avatar alt='profile image' sx={{ width: 50, height: 50 }}>{review?.Profile?.name[0]}</Avatar>
            <Stack direction='column' ml={2}>
                <Rating name='half-rating-read' value={rate} precision={0.5} size='small' readOnly />
                <Typography variant='body1' fontWeight='bold' align='start' color='black'>{review?.Profile?.name}</Typography>
                <Typography variant='caption' align='start' color='black'>{review?.comment}</Typography>
            </Stack>
        </Grid>
    )
}

export default CardReview;