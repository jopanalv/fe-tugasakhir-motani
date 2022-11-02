import React from 'react';
import StaticNavbar from '../components/StaticNavbar';
import { Avatar, Button, Stack, Typography, Container, Grid } from '@mui/material';
import { Settings, ShoppingCart, Logout } from '@mui/icons-material';
import { lightGreen, grey } from '@mui/material/colors';
import BotNavbar from '../components/BotNavbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser } from '../redux/action/authAction';

const ProfileMenu = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(LogoutUser());
    } 
    return (
        <>
            <StaticNavbar title='Menu Profil' />
            <Container fixed>
                <Stack justifyContent='center' alignItems='center' spacing={2}>
                    <Avatar alt='profile image' sx={{ width: 100, height: 100, mt: 13, fontSize: 50, fontWeight: 'bold' }}>{user?.Profile.name[0]}</Avatar>
                    <Typography variant='h6'>{user.Profile.name}</Typography>
                </Stack>
                <Stack mt={5} spacing={3} sx={{ mb: 13.5, mx: { xs: 0, md: 30 } }}>
                    <Link to={'/profile/edit/' + user.id} style={{ textDecoration: 'none' }}>
                        <Button sx={{ p: 2, borderBottom: 3, borderBottomColor: lightGreen[500], borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} fullWidth>
                            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                                <Typography color={'#000'}>Ubah Profil</Typography>
                                <Settings sx={{ color: lightGreen[500] }} />
                            </Grid>
                        </Button>
                    </Link>
                    <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                        <Button sx={{ p: 2, borderBottom: 3, borderBottomColor: lightGreen[500], borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} fullWidth>
                            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                                <Typography color={'#000'}>Dashboard Saya</Typography>
                                <ShoppingCart sx={{ color: lightGreen[500] }} />
                            </Grid>
                        </Button>
                    </Link>
                    <Button onClick={() => handleLogout()} sx={{ p: 2, borderBottom: 3, borderBottomColor: lightGreen[500], borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} fullWidth>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography color={'#000'}>Keluar</Typography>
                            <Logout sx={{ color: lightGreen[500] }} />
                        </Grid>
                    </Button>
                    <Typography variant='body2' align='center' color={grey[700]}>Version 1.0</Typography>
                </Stack>
            </Container>
            <BotNavbar />
            <Footer />
        </>
    )
}

export default ProfileMenu;