import { Avatar, Box, Button, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { green, grey, lightGreen, red } from '@mui/material/colors';
import React from 'react';
import Traktor from '../assets/Traktor.svg';

const NegoCard = () => {
  return (
    <Box sx={{ boxShadow: 3, borderRadius: 3 }}>
      <Grid p={3} gap={3} container justifyContent='flex-start'>
        <Box component='img' src={Traktor} alt='product img' sx={{ width: 130 }} />
        <Stack ml={2} gap={2}>
          <Typography variant='h5' fontWeight='bold'>Traktor Lurrr</Typography>
          <Typography variant='body1'>Rp 250000 / hari</Typography>
          <Typography variant='body1'>Ditawar Rp 200000 / hari</Typography>
        </Stack>
      </Grid>
      <Grid p={3} gap={1} container justifyContent='flex-end'>
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