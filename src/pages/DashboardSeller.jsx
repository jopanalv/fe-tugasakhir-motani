import { Container, Typography, Box, Stack, Grid, Avatar, Button, Divider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import { ArrowForwardIos, ViewList, AttachMoney, PendingActions, AddPhotoAlternate } from '@mui/icons-material';
import { lightGreen, grey } from '@mui/material/colors';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';

const DashboardSeller = () => {
    return (
        <>
            <Navbar />
            <Container fixed sx={{ mt: 15, mb: 10 }}>
                <Typography variant='h5' fontWeight='bold'>Dashboard Saya</Typography>
                <Box p={3} sx={{ boxShadow: 3, borderRadius: 3 }} mt={2}>
                    <Grid container justifyContent='flex-start'>
                        <Avatar sx={{ width: 56, height: 56 }} />
                        <Stack direction='column' ml={3}>
                            <Typography variant='h6'>Nama</Typography>
                            <Typography variant='body1'>Kota</Typography>
                        </Stack>
                    </Grid>
                </Box>
                <Grid container direction='row' justifyContent='space-between' mt={5}>
                    <Box mb={3} height={170} p={3} sx={{ boxShadow: 3, borderRadius: 3, width: { xs: 1, md: 280 }, display: {xs: 'none', md: 'block'} }}>
                        <Button startIcon={<ViewList />} fullWidth sx={{ color: lightGreen[500], p: 2 }}>
                            <Grid container direction='row' justifyContent='space-between'>
                                Semua Produk
                                <ArrowForwardIos />
                            </Grid>
                        </Button>
                        <Divider />
                        <Button startIcon={<AttachMoney />} fullWidth sx={{ color: lightGreen[500], p: 2 }}>
                            <Grid container direction='row' justifyContent='space-between'>
                                Berhasil disewa
                                <ArrowForwardIos />
                            </Grid>
                        </Button>
                        <Divider />
                        <Button startIcon={<PendingActions />} fullWidth sx={{ color: lightGreen[500], p: 2 }}>
                            <Grid container direction='row' justifyContent='space-between'>
                                Transaksi Pending
                                <ArrowForwardIos />
                            </Grid>
                        </Button>
                    </Box>
                    <Box mb={3} p={1} sx={{ boxShadow: 3, borderRadius: 3, width: { xs: 1, md: 280 }, display: {xs: 'block', md: 'none'} }}>
                        <Grid container direction='row' justifyContent='space-around'>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <ViewList sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Semua produk</Typography> */}
                                </Stack>
                            </Button>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <AttachMoney sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Berhasil disewa</Typography> */}
                                </Stack>
                            </Button>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <PendingActions sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Transaksi pending</Typography> */}
                                </Stack>
                            </Button>
                        </Grid>
                    </Box>
                    <Stack>
                        <Box mb={3} height={135} sx={{ border: 2, borderColor: grey[300], borderStyle: 'dashed', borderRadius: 2 }}>
                            <Button fullWidth sx={{ color: grey[500], p: 2 }}>
                                <Stack display='flex'>
                                    <AddPhotoAlternate sx={{ width: 80, height: 80, m: 'auto' }} />
                                    Tambah Produk
                                </Stack>
                            </Button>
                        </Box>
                        <Box display='grid' gap={2} sx={{ gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' } }}>
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                            <CardList />
                        </Box>
                    </Stack>
                </Grid>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DashboardSeller;