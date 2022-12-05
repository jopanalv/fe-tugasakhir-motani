import { Container, Typography, Box, Grid } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import ProfileCard from '../components/ProfileCard';
import MenuSidebar from '../components/MenuSidebar';
import NotFound from '../assets/notfound.png';
import MenuSidebarMobile from '../components/MenuSidebarMobile';
import { useSelector } from 'react-redux';
import { formatDate } from '../utils/formatDate';

const DashboardSellerRented = () => {
    const columns = [
        { field: 'no', headerName: 'No', width: 50 },
        { field: 'produk', headerName: 'Produk', width: 220 },
        { field: 'penyewa', headerName: 'Penyewa', width: 150 },
        { field: 'mulaisewa', headerName: 'Mulai sewa', width: 200 },
        { field: 'durasi', headerName: 'Durasi', width: 80 },
        { field: 'harga', headerName: 'Harga', width: 100 },
        { field: 'total', headerName: 'Total', width: 100 },
        { field: 'status', headerName: 'Status', width: 80 },
    ];

    const { transactions } = useSelector(state => state.transaction)
    const { user } = useSelector((state) => state.auth)

    const rows = transactions.filter((trans) => trans.status == 'completed').map((trans, index) => {
        return {
            id: trans.id,
            no: index + 1,
            produk: trans.Product.name,
            penyewa: trans.Profile.name,
            mulaisewa: formatDate(trans.start_rent),
            durasi: trans.duration + ' hari',
            harga: trans.offer_price,
            total: trans.offer_price * trans.duration,
            status: trans.status == 'completed' ? 'Selesai' : 'Menunggu'
        }
    })

    return (
        <>
            <Navbar />
            <Container fixed sx={{ mt: 15, mb: 10 }}>
                <Typography variant='h5' fontWeight='bold'>Dashboard Saya</Typography>
                <ProfileCard profile={user} />
                <Grid container direction='row' justifyContent='space-between' mt={5}>
                    <MenuSidebar />
                    <MenuSidebarMobile />
                    <Box width={800} height={400}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            components={{
                                Toolbar: GridToolbar,
                            }}
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