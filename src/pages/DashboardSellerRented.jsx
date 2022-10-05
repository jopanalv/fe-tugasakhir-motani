import { Container, Typography, Box, Stack, Grid, Avatar, Button, Divider } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowForwardIos, ViewList, AttachMoney, PendingActions, AddPhotoAlternate } from '@mui/icons-material';
import { lightGreen, grey } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import ProfileCard from '../components/ProfileCard';
import MenuSidebar from '../components/MenuSidebar';
import NotFound from '../assets/notfound.png';
import MenuSidebarMobile from '../components/MenuSidebarMobile';

const DashboardSellerRented = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'produk', headerName: 'Produk', width: 140 },
        { field: 'penyewa', headerName: 'Penyewa', width: 140 },
        { field: 'mulaisewa', headerName: 'Mulai sewa', width: 110 },
        { field: 'durasi', headerName: 'Durasi', width: 80 },
        { field: 'harga', headerName: 'Harga', width: 100 },
        { field: 'status', headerName: 'Status', width: 80 },
    ];

    const rows = [
    ];

    return (
        <>
            <Navbar />
            <Container fixed sx={{ mt: 15, mb: 10 }}>
                <Typography variant='h5' fontWeight='bold'>Dashboard Saya</Typography>
                <ProfileCard />
                <Grid container direction='row' justifyContent='space-between' mt={5}>
                    <MenuSidebar />
                    <MenuSidebarMobile />
                    <Box width={800} height={400}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                        />
                    </Box>
                </Grid>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DashboardSellerRented;