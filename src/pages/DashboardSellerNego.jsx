import { Container, Typography, Box, Stack, Grid, Avatar, Button, Divider } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowForwardIos, ViewList, AttachMoney, PendingActions, AddPhotoAlternate } from '@mui/icons-material';
import { lightGreen, grey } from '@mui/material/colors';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import ProfileCard from '../components/ProfileCard';
import MenuSidebar from '../components/MenuSidebar';
import NotFound from '../assets/notfound.png';
import MenuSidebarMobile from '../components/MenuSidebarMobile';
import NegoCard from '../components/NegoCard';

const DashboardSellerNego = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Navbar />
            <Container fixed sx={{ mt: 15, mb: 10 }}>
                <Typography variant='h5' fontWeight='bold'>Dashboard Saya</Typography>
                <ProfileCard />
                <Grid container direction='row' justifyContent='space-between' mt={5}>
                    <MenuSidebar />
                    <MenuSidebarMobile />
                    <Stack>
                        <Box display='grid' gap={2} sx={{ gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' } }}>
                            <NegoCard />
                            <NegoCard />
                            <NegoCard />
                        </Box>
                    </Stack>
                </Grid>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DashboardSellerNego;