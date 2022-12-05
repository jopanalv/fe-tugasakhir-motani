import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import Traktor from '../assets/Traktor.svg';

const CardNotif = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const { transactions } = useSelector(state => state.transaction)

  return (
    <>
      {user.role !== 'seller' ? (
        <>
          {transactions?.filter((transaction) => transaction?.status === 'approved' && transaction.ProfileId === user?.id).map((transaction) => (
            <>
              <Button fullWidth>
                <Grid p={2} container direction='row' justifyContent='flex-start' alignItems='start'>
                  <Box component='img' src={transaction?.Product?.image} width={65} sx={{ display: { xs: 'none', md: 'block' } }} />
                  <Stack direction='column' ml={2}>
                    <Typography variant='body1' fontWeight='bold' align='start' color='black'>{transaction?.Product?.name}</Typography>
                    <Typography variant='caption' align='start' color='black'>Rp {transaction?.offer_price} / hari</Typography>
                    <Typography variant='caption' align='start' color='black' sx={{ whiteSpace: 'normal' }}>Nego disetujui seller dan akan <br /> segera dihubungi seller.</Typography>
                  </Stack>
                </Grid>
              </Button>
              <Divider />
            </>
          ))}
        </>
      ) : (
        <>
          {transactions?.filter((transaction) => transaction?.status === 'pending' && transaction.SellerId === user?.id).map((transaction) => (
            <>
              <Button component={Link} to={'/transaction/detail/' + transaction.id} fullWidth>
                <Grid p={2} container direction='row' justifyContent='flex-start' alignItems='start'>
                  <Box component='img' src={transaction?.Product?.image} width={65} sx={{ display: { xs: 'none', md: 'block' } }} />
                  <Stack direction='column' ml={2}>
                    <Typography variant='body1' fontWeight='bold' align='start' color='black'>{transaction?.Product?.name}</Typography>
                    <Typography variant='caption' align='start' color='black'>Rp {transaction?.Product?.price} / hari</Typography>
                    <Typography variant='caption' align='start' color='black' sx={{ whiteSpace: 'normal' }}>Produkmu ditawar Rp {transaction?.offer_price} / hari.</Typography>
                  </Stack>
                </Grid>
              </Button>
              <Divider />
            </>
          ))}
        </>
      )}
    </>
  )
}

export default CardNotif;