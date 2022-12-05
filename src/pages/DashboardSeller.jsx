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
import MenuSidebarMobile from '../components/MenuSidebarMobile';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllTransaction } from '../redux/action/transactionAction';

const DashboardSeller = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.product);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getAllTransaction())
    }, []);
    // console.log(user)
    return (
        <>
            <Navbar />
            <Container fixed sx={{ mt: 15, mb: 10 }}>
                <Typography variant='h5' fontWeight='bold'>Dashboard Saya</Typography>
                <ProfileCard profile={user} />
                <Grid container direction='row' justifyContent='space-between' mt={5}>
                    <MenuSidebar />
                    <MenuSidebarMobile />
                    <Stack sx={{ width: { xs: '100%', md: 800 } }}>
                        <Box mb={3} height={135} sx={{ border: 2, borderColor: grey[300], borderStyle: 'dashed', borderRadius: 2 }}>
                            <Link to='/product/add' style={{ textDecoration: 'none' }}>
                                <Button fullWidth sx={{ color: grey[500], p: 2 }}>
                                    <Stack display='flex'>
                                        <AddPhotoAlternate sx={{ width: 80, height: 80, m: 'auto' }} />
                                        Tambah Produk
                                    </Stack>
                                </Button>
                            </Link>
                        </Box>
                        <Box display='grid' gap={2} sx={{ gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
                            {products.map((product) => (
                                product.ProfileId === user.id ? (
                                    <CardList key={product.id} product={product} />
                                ) : null
                            ))}
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