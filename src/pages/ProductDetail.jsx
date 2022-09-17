import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography, Fab } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Traktor from '../assets/Traktor.svg';
import { grey, lightGreen } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import { ShoppingCart, Favorite } from '@mui/icons-material';

const ProductDetail = () => {
    return (
        <>
            <Navbar />
            <Container fixed sx={{ my: 13 }}>
                <Grid container direction='column' alignItems='center'>
                    <Grid container justifyContent='space-evenly'>
                        <Box sx={{ boxShadow: 3, borderRadius: 3, height: {xs: 400, md: 500}, width: { xs: 1, md: 500 } }}>
                            <img src={Traktor} />
                        </Box>
                        <Stack direction='column' spacing={6} sx={{ mt: { xs: 5, md: 0 } }}>
                            <Box p={3} sx={{ boxShadow: 3, borderRadius: 3, height: { xs: 150, md: 300 }, width: 350 }}>
                                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Traktor Lurrr</Typography>
                                <Typography variant='body1' sx={{ color: grey[600], my: 1 }}>Kategori</Typography>
                                <Typography variant='h5'>Rp 2000000 / hari</Typography>
                                <Button variant='contained' size='large' fullWidth sx={{
                                    backgroundColor: lightGreen[500], '&:hover': {
                                        backgroundColor: lightGreen[500],
                                        opacity: [0.7, 0.8, 0.9],
                                    }, mt: 10, display: { xs: 'none', md: 'block' }
                                }}>Sewa dan Nego Sekarang</Button>
                                <Button variant='contained' size='large' fullWidth sx={{
                                    backgroundColor: lightGreen[500], '&:hover': {
                                        backgroundColor: lightGreen[500],
                                        opacity: [0.7, 0.8, 0.9],
                                    }, mt: 2, display: { xs: 'none', md: 'block' }
                                }}>Masukkan ke wishlist</Button>
                            </Box>
                            <Box p={3} sx={{ boxShadow: 3, borderRadius: 3 }}>
                                <Grid container justifyContent='space-center'>
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                    <Stack direction='column' ml={3}>
                                        <Typography variant='h6'>Nama</Typography>
                                        <Typography variant='body1'>Kota</Typography>
                                    </Stack>
                                </Grid>
                            </Box>
                        </Stack>
                    </Grid>
                    <Box p={3} sx={{ boxShadow: 3, width: { xs: 350, md: 940 }, mt: 6, borderRadius: 3 }}>
                        <Typography variant='h5'>Deskripsi</Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a bibendum tortor, a fermentum magna. Vivamus dignissim varius interdum. Nulla semper ex dolor, non ultrices velit eleifend quis. Praesent sit amet erat nec ex mollis faucibus non et eros. Pellentesque dignissim ornare ligula a porttitor. Curabitur sit amet libero lectus. Nam mattis, felis ut egestas tincidunt, eros ex ultricies elit, in accumsan neque purus quis diam. Sed pellentesque malesuada neque et pharetra. Mauris metus metus, dapibus eu justo eget, fringilla facilisis neque. Ut eget purus porttitor massa fringilla sagittis vel vel risus. Sed in varius nibh. Morbi ultricies, lectus non luctus porttitor, est arcu hendrerit diam, eget molestie quam libero vitae ipsum. Etiam consequat ac ligula nec gravida. Fusce nulla ligula, sollicitudin quis nunc a, ultrices pellentesque ligula. Sed tortor nibh, tristique ac maximus tempor, porttitor et nulla.
                        </Typography>
                    </Box>
                    <Grid direction='column' sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 70, display: { xs: 'block', md: 'none' } }}>
                        <Fab variant='extended' color={lightGreen[500]} aria-label="add" sx={{ backgroundColor: lightGreen[500], color: '#fff' }}>
                            <ShoppingCart />
                            Sewa dan Nego
                        </Fab>
                        <Fab variant='extended' color={lightGreen[500]} aria-label="add" sx={{ backgroundColor: lightGreen[500], color: '#fff' }}>
                            <Favorite />
                            Wishlist
                        </Fab>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default ProductDetail;