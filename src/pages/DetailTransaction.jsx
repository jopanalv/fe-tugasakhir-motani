import { Container, Typography } from '@mui/material';
import React from 'react';
import BotNavbar from '../components/BotNavbar';
import Footer from '../components/Footer';
import NegoCard from '../components/NegoCard';
import ProfileCard from '../components/ProfileCard';
import StaticNavbar from '../components/StaticNavbar';

const DetailTransaction = () => {
    return (
        <>
            <StaticNavbar title='Detail Transaksi' />
            <Container fixed sx={{ mt: 13, mb: 16.9, width: 800 }}>
                <ProfileCard />
                <Typography variant='h5' fontWeight='bold' sx={{ mt: 5, mb: 2 }}>Informasi Penawaran</Typography>
                <NegoCard />
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DetailTransaction;