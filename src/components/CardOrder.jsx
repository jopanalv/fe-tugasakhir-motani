import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React from 'react';
import { useDispatch } from 'react-redux';
import Traktor from '../assets/Traktor.svg';
import { updateTransaction } from '../redux/action/transactionAction';
import { formatDate } from '../utils/formatDate';

const CardOrder = ({ transaction }) => {
  const dispatch = useDispatch()

  const handleStatus = (id, status) => {
    dispatch(updateTransaction({ id, status }))
  }
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
            <Grid container justifyContent='space-between' alignItems='center'>
              <Typography variant='body1'>Menunggu persetujuan dari seller.</Typography>
              <Button onClick={() => handleStatus(transaction?.id, 'cancel')} variant='outlined' size='small' sx={{
                borderColor: lightGreen[500],
                color: lightGreen[500]
              }}>Batal</Button>
            </Grid>
          </Stack>
        </Grid>
      </Box>
    </>
  )
}

export default CardOrder;