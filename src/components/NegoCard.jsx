import { Avatar, Box, Button, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { green, grey, lightGreen, red } from '@mui/material/colors';
import React from 'react';
import Traktor from '../assets/Traktor.svg';

const NegoCard = () => {
  return (
    <Box width={380} sx={{ boxShadow: 3, borderRadius: 3 }}>
      <Grid p={2} container justifyContent='flex-start'>
        <Avatar sx={{ width: 50, height: 50 }} />
        <Stack direction='column' ml={2}>
          <Typography variant='body1' fontWeight='bold'>Nama</Typography>
          <Typography variant='body1'>Mulai sewa</Typography>
        </Stack>
      </Grid>
      <Divider />
      <Grid p={2} container justifyContent='flex-start'>
        <Box component='img' src={Traktor} alt='product img' sx={{ width: 130 }} />
        <Stack ml={2}>
          <Typography variant='h6' fontWeight='bold'>Traktor Lurrr</Typography>
          <Typography variant='body2'>Rp 250000 / hari</Typography>
          <Typography variant='body2'>Ditawar Rp 200000 / hari</Typography>
        </Stack>
      </Grid>
      <Divider />
      <Grid p={2} gap={1} container justifyContent='flex-end'>
        <Button variant='outlined' size='large' sx={{
          borderColor: lightGreen[500],
          color: lightGreen[500]
        }}>Tolak</Button>
        <Button variant='contained' size='large' sx={{
          bgcolor: lightGreen[500]
        }}>Terima</Button>
      </Grid>
    </Box>
  )
}

export default NegoCard;