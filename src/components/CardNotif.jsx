import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Traktor from '../assets/Traktor.svg';

const CardNotif = () => {
  const user = localStorage.getItem('user');
  return (
    <>
      {user.role === 'seller' ? (
        <>
          <Button fullWidth>
            <Grid p={2} container direction='row' justifyContent='flex-start' alignItems='start'>
              <Box component='img' src={Traktor} width={65} />
              <Stack direction='column' ml={2}>
                <Typography variant='body1' fontWeight='bold' align='start' color='black'>Traktor Lurr</Typography>
                <Typography variant='caption' align='start' color='black'>Rp 200000 / hari</Typography>
                <Typography variant='caption' align='start' color='black' sx={{ whiteSpace: 'normal' }}>Nego disetujui seller dan akan <br /> segera dihubungi seller.</Typography>
              </Stack>
            </Grid>
          </Button>
          <Divider />
        </>
      ) : (
        <>
          <Button fullWidth>
            <Grid p={2} container direction='row' justifyContent='flex-start' alignItems='start'>
              <Box component='img' src={Traktor} width={65} />
              <Stack direction='column' ml={2}>
                <Typography variant='body1' fontWeight='bold' align='start' color='black'>Traktor Lurr</Typography>
                <Typography variant='caption' align='start' color='black'>Rp 250000 / hari</Typography>
                <Typography variant='caption' align='start' color='black' sx={{ whiteSpace: 'normal' }}>Produkmu ditawar Rp 200000 / hari.</Typography>
              </Stack>
            </Grid>
          </Button>
          <Divider />
        </>
      )
      }
    </>
  )
}

export default CardNotif;