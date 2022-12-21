import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Traktor from '../assets/Traktor.svg';
import { formatCurrency } from '../utils/formatCurrency';
import { formatDate } from '../utils/formatDate';

const CardOrder2 = ({ transaction }) => {
  return (
    <>
      <Box p={3} sx={{ boxShadow: 3, borderRadius: 3 }} mt={2}>
        <Grid container justifyContent='flex-start'>
          <Box component='img' src={transaction?.Product.image} width={100} />
          <Stack direction='column' ml={3}>
            <Typography variant='h6' fontWeight='bold'>{transaction?.Product.name}</Typography>
            <Typography variant='caption'>{formatCurrency(transaction?.Product.price)}</Typography>
            <Typography variant='caption'>Ditawar {formatCurrency(transaction?.offer_price)}</Typography>
            <Typography variant='caption'>Mulai sewa {formatDate(transaction?.start_rent)} - {transaction?.duration} hari</Typography>
            <Typography variant='caption'>Deposit {formatCurrency(transaction?.Product?.price)}</Typography>
            <Typography variant='caption'>Total Bayar {formatCurrency(transaction?.duration * transaction?.offer_price + transaction?.Product?.price)}</Typography>
            <Typography variant='body1'>Nego sudah disetujui, pesanan akan diantar <br/> {formatDate(transaction?.start_rent)} Jam 09.00.</Typography>
          </Stack>
        </Grid>
      </Box>
    </>
  )
}

export default CardOrder2;