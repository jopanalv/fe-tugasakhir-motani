import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const ProfileCard = () => {
    return (
        <Box p={3} sx={{ boxShadow: 3, borderRadius: 3 }} mt={2}>
            <Grid container justifyContent='flex-start'>
                <Avatar sx={{ width: 50, height: 50 }} />
                <Stack direction='column' ml={3}>
                    <Typography variant='body1' fontWeight='bold'>Nama</Typography>
                    <Typography variant='body1'>Kota</Typography>
                </Stack>
            </Grid>
        </Box>
    )
}

export default ProfileCard