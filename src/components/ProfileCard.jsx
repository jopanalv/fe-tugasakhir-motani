import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const ProfileCard = ({ profile }) => {
    return (
        <Box p={3} sx={{ boxShadow: 3, borderRadius: 3 }} mt={2}>
            <Grid container justifyContent='flex-start'>
                <Avatar sx={{ width: 50, height: 50 }} ><img src={profile?.Profile?.image} /></Avatar>
                <Stack direction='column' ml={3}>
                    <Typography variant='body1' fontWeight='bold'>{profile?.Profile?.name}</Typography>
                    <Typography variant='body1'>{profile?.Profile?.address}</Typography>
                </Stack>
            </Grid>
        </Box>
    )
}

export default ProfileCard