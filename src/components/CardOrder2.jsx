import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Traktor from '../assets/Traktor.svg';

const CardOrder2 = () => {
  return (
    <>
      <Box p={3} sx={{ boxShadow: 3, borderRadius: 3 }} mt={2}>
        <Grid container justifyContent='flex-start'>
          <Box component='img' src={Traktor} width={100} />
          <Stack direction='column' ml={3}>
            <Typography variant='h6' fontWeight='bold'>Traktor Lurr</Typography>
            <Typography variant='caption'>Rp 250000 &gt; Rp 200000</Typography>
            <Typography variant='body1'>Nego sudah disetujui, pesanan akan diantar.</Typography>
          </Stack>
        </Grid>
      </Box>
    </>
  )
}

export default CardOrder2;