import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography, Fab, Modal, IconButton, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Card, CardMedia, CardContent, InputLabel, Input, TextField, OutlinedInput, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../redux/action/productAction';
import { Link, useParams } from 'react-router-dom';
import { createTransaction } from '../redux/action/transactionAction';

const ProductDetail = () => {
    const { detail } = useSelector(state => state.product)
    const { isLoged } = useSelector(state => state.auth)

    const [open, setOpen] = useState(false)
    const [offer, setOffer] = useState(0)
    const [start, setStart] = useState(dayjs())
    const [duration, setDuration] = useState(0)

    const dispatch = useDispatch()
    const { slug } = useParams()

    useEffect(() => {
        dispatch(getProductById(slug))
    }, [])

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (newValue) => {
        setStart(newValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createTransaction({ offer, start, duration, slug }))
        handleClose()
    }

    return (
        <>
            <Navbar />
            <Container fixed sx={{ my: 13 }}>
                <Grid container direction='column' alignItems='center'>
                    <Grid container justifyContent='space-evenly'>
                        <Box sx={{ boxShadow: 3, borderRadius: 3, height: { xs: 400, md: 500 }, width: { xs: 1, md: 500 } }}>
                            <img src={detail?.image} />
                        </Box>
                        <Stack direction='column' spacing={3} sx={{ mt: { xs: 5, md: 0 } }}>
                            <Box p={3} sx={{ boxShadow: 3, borderRadius: 3, height: { xs: 150, md: 330 }, width: 350 }}>
                                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{detail?.name}</Typography>
                                <Typography variant='body1' sx={{ color: grey[600] }}>{detail?.Category?.name}</Typography>
                                <Typography variant='h6'>Rp {detail?.price} / hari</Typography>
                                <Grid mt={2} container justifyContent='space-between' alignItems='center'>
                                    <Box width={200}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <Typography variant='body2' fontWeight='bold'>Mulai sewa</Typography>
                                            <MobileDatePicker inputFormat='DD/MM/YYYY' value={start}
                                                onChange={handleChange} renderInput={(params) => <TextField {...params} />} />
                                        </LocalizationProvider>
                                    </Box>
                                    <Box width={100}>
                                        <Typography variant='body2' fontWeight='bold'>Durasi</Typography>
                                        <TextField value={duration} onChange={e => setDuration(e.target.value)} InputProps={{
                                            endAdornment: <InputAdornment>hari</InputAdornment>
                                        }} />
                                    </Box>
                                </Grid>
                                {!isLoged ? (
                                    <Box>
                                        <Link to={'/login'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <Button onClick={handleOpen} variant='contained' size='large' fullWidth sx={{
                                                backgroundColor: lightGreen[500], '&:hover': {
                                                    backgroundColor: lightGreen[500],
                                                    opacity: [0.7, 0.8, 0.9],
                                                }, mt: 3, display: { xs: 'none', md: 'block' }
                                            }}>Login dulu yaa!</Button>
                                        </Link>
                                    </Box>
                                ) : (
                                    <Box>
                                        <Button onClick={handleOpen} variant='contained' size='large' fullWidth sx={{
                                            backgroundColor: lightGreen[500], '&:hover': {
                                                backgroundColor: lightGreen[500],
                                                opacity: [0.7, 0.8, 0.9],
                                            }, mt: 3, display: { xs: 'none', md: 'block' }
                                        }}>Sewa dan Nego Sekarang</Button>
                                        <Button variant='outlined' size='large' fullWidth sx={{
                                            mt: 2,
                                            color: lightGreen[500],
                                            borderColor: lightGreen[500],
                                            display: { xs: 'none', md: 'block' }
                                        }}>Masukkan ke wishlist</Button>
                                    </Box>
                                )}

                            </Box>
                            <ProfileCard profile={detail} />
                        </Stack>
                    </Grid>
                    <Box p={3} sx={{ boxShadow: 3, width: { xs: 350, md: 940 }, mt: 6, borderRadius: 3 }}>
                        <Typography variant='h5'>Deskripsi</Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography>
                            {detail?.description}
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
                            <TextField value={offer} onChange={e => setOffer(e.target.value)} InputProps={{
                                startAdornment: <InputAdornment>Rp </InputAdornment>,
                                endAdornment: <InputAdornment>/ hari</InputAdornment>
                            }} fullWidth />
                        </Box>
                        <form onSubmit={handleSubmit}>
                            <Button variant='contained' type='submit' size='large' fullWidth sx={{
                                backgroundColor: lightGreen[500], '&:hover': {
                                    backgroundColor: lightGreen[500],
                                    opacity: [0.7, 0.8, 0.9],
                                }, mt: 3
                            }}>Sewa Sekarang</Button>
                        </form>
                    </Box>
                </Box>
            </Modal>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default ProductDetail;