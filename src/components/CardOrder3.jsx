import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Traktor from '../assets/Traktor.svg';
import { formatDate } from '../utils/formatDate';

const CardOrder3 = ({ transaction }) => {
  return (
    <>
      <Box p={3} sx={{ boxShadow: 3, borderRadius: 3 }} mt={2}>
        <Grid container justifyContent='flex-start'>
          <Box component='img' src={transaction?.Product.image} width={100} />
          <Stack direction='column' ml={3}>
            <Typography variant='h6' fontWeight='bold'>{transaction?.Product.name}</Typography>
            <Typography variant='caption'>Rp {transaction?.Product.price}</Typography>
            <Typography variant='caption'>Ditawar Rp {transaction?.offer_price}</Typography>
            <Typography variant='caption'>Mulai sewa {formatDate(transaction?.start_rent)} - {transaction?.duration} hari</Typography>
            <Typography variant='caption'>Total Bayar Rp {transaction?.duration * transaction?.offer_price}</Typography>
            <Typography variant='body1'>Transaksi selesai.</Typography>
          </Stack>
        </Grid>
      </Box>
    </>
  )
}

export default CardOrder3;