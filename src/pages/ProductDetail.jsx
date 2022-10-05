import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography, Fab, Modal, IconButton, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Card, CardMedia, CardContent, InputLabel, Input, TextField, OutlinedInput, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Navbar from '../components/Navbar';
import Traktor from '../assets/Traktor.svg';
import { grey, lightGreen } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import { ShoppingCart, Favorite, Close, FilterAlt } from '@mui/icons-material';
import ProfileCard from '../components/ProfileCard';

const ProductDetail = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(dayjs())
    
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar />
            <Container fixed sx={{ my: 13 }}>
                <Grid container direction='column' alignItems='center'>
                    <Grid container justifyContent='space-evenly'>
                        <Box sx={{ boxShadow: 3, borderRadius: 3, height: { xs: 400, md: 500 }, width: { xs: 1, md: 500 } }}>
                            <img src={Traktor} />
                        </Box>
                        <Stack direction='column' spacing={3} sx={{ mt: { xs: 5, md: 0 } }}>
                            <Box p={3} sx={{ boxShadow: 3, borderRadius: 3, height: { xs: 150, md: 330 }, width: 350 }}>
                                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Traktor Lurrr</Typography>
                                <Typography variant='body1' sx={{ color: grey[600] }}>Kategori</Typography>
                                <Typography variant='h6'>Rp 2000000 / hari</Typography>
                                <Grid mt={2} container justifyContent='space-between' alignItems='center'>
                                    <Box width={200}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <Typography variant='body2' fontWeight='bold'>Mulai sewa</Typography>
                                            <MobileDatePicker inputFormat='DD/MM/YYYY' value={value}
                                                onChange={handleChange} renderInput={(params) => <TextField {...params} />} />
                                        </LocalizationProvider>
                                    </Box>
                                    <Box width={100}>
                                        <Typography variant='body2' fontWeight='bold'>Durasi</Typography>
                                        <TextField InputProps={{
                                            endAdornment: <InputAdornment>hari</InputAdornment>
                                        }} />
                                    </Box>
                                </Grid>
                                <Button onClick={handleOpen} variant='contained' size='large' fullWidth sx={{
                                    backgroundColor: lightGreen[500], '&:hover': {
                                        backgroundColor: lightGreen[500],
                                        opacity: [0.7, 0.8, 0.9],
                                    }, mt: 3, display: { xs: 'none', md: 'block' }
                                }}>Sewa dan Nego Sekarang</Button>
                                <Button variant='contained' size='large' fullWidth sx={{
                                    backgroundColor: lightGreen[500], '&:hover': {
                                        backgroundColor: lightGreen[500],
                                        opacity: [0.7, 0.8, 0.9],
                                    }, mt: 2, display: { xs: 'none', md: 'block' }
                                }}>Masukkan ke wishlist</Button>
                            </Box>
                            <ProfileCard />
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
                        <Fab onClick={handleOpen} variant='extended' color={lightGreen[500]} aria-label="add" sx={{ backgroundColor: lightGreen[500], color: '#fff' }}>
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
            <Modal open={open} onClose={handleClose}>
                <Box position='absolute' left={0} top={0} right={0} bgcolor='#fff' p={3} sx={{ borderRadius: 3, width: 350, top: 100, left: { xs: 30, md: 550 } }}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Box />
                        <IconButton onClick={handleClose}><Close /></IconButton>
                    </Grid>
                    <Box mt={2}>
                        <Typography variant='h6' fontWeight='bold'>Masukkan harga tawarmu</Typography>
                        <Typography variant='body2' color={grey[500]}>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</Typography>
                        <Card sx={{ display: 'flex', mt: 3, bgcolor: grey[200] }}>
                            <CardMedia component='img' image={Traktor} alt='product img' sx={{ width: 130 }} />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' fontWeight='bold'>Traktor Lurrr</Typography>
                                <Typography variant='body2'>Rp 200000 / hari</Typography>
                            </CardContent>
                        </Card>
                        <Box mt={3}>
                            <Typography variant='body2' fontWeight='bold'>Harga Tawar</Typography>
                            <TextField value=' 200000' InputProps={{
                                startAdornment: <InputAdornment>Rp </InputAdornment>,
                                endAdornment: <InputAdornment>/ hari</InputAdornment>
                            }} fullWidth />
                        </Box>
                        <Button variant='contained' size='large' fullWidth sx={{
                            backgroundColor: lightGreen[500], '&:hover': {
                                backgroundColor: lightGreen[500],
                                opacity: [0.7, 0.8, 0.9],
                            }, mt: 3
                        }}>Sewa Sekarang</Button>
                    </Box>
                </Box>
            </Modal>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default ProductDetail;