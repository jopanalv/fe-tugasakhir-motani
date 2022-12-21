import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography, Fab, Modal, IconButton, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Card, CardMedia, CardContent, InputLabel, Input, TextField, OutlinedInput, InputAdornment, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Navbar from '../components/Navbar';
import { grey, lightGreen } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import { ShoppingCart, Favorite, Close, FilterAlt, Star } from '@mui/icons-material';
import ProfileCard from '../components/ProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../redux/action/productAction';
import { Link, useParams } from 'react-router-dom';
import { createTransaction } from '../redux/action/transactionAction';
import parser from 'html-react-parser';
import { formatCurrency } from '../utils/formatCurrency';
import CardReview from '../components/CardReview';
import { createReview, getAllReviews } from '../redux/action/reviewAction';

const ProductDetail = () => {
    const { detail } = useSelector(state => state.product)
    const { isLoged, user } = useSelector(state => state.auth)
    const { reviews } = useSelector(state => state.review)
    const profile = JSON.parse(localStorage.getItem('user'))

    const [open, setOpen] = useState(false)
    const [offer, setOffer] = useState(detail?.price)
    const [start, setStart] = useState(dayjs())
    const [duration, setDuration] = useState(0)
    const [ktp, setKtp] = useState()
    const [hover, setHover] = useState(-1);
    // const [rate, setRate] = useState(0);
    // const [comment, setComment] = useState('');
    const [review, setReview] = useState({
        ProductId: 0,
        rate: 0,
        comment: ''
    })
    const [calcRate, setCalcRate] = useState(0);

    const dispatch = useDispatch()
    const { slug } = useParams()

    const buyerId = user?.id

    // calculate total rate
    const totalRate = () => {
        let tempRate = reviews?.reduce((acc, curr) => acc + curr.rate, 0)
        setCalcRate(tempRate / reviews.length)
    }

    useEffect(() => {
        dispatch(getProductById({ slug }))
    }, [])

    useEffect(() => {
        dispatch(getAllReviews(detail.id))
        setReview({
            ...review,
            ProductId: detail.id
        })
    }, [detail])

    useEffect(() => {
        totalRate()
    }, [reviews])

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (newValue) => {
        setStart(newValue);
    }

    const handleImage = (e) => {
        setKtp(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('buyerId', buyerId)
        formData.append('offer_price', offer)
        formData.append('start_rent', start)
        formData.append('duration', duration)
        formData.append('ktp', ktp)
        dispatch(createTransaction(formData, slug))
        // dispatch(createTransaction({ buyerId, offer, start, duration, slug }))
        handleClose()
    }

    const handleReview = () => {
        dispatch(createReview(review))

        setReview({
            rate: 0,
            comment: ''
        })
    }

    // console.log(rate)
    return (
        <>
            <Navbar />
            <Container fixed sx={{ my: 13 }}>
                <Grid container direction='column' alignItems='center'>
                    <Grid container justifyContent='space-evenly'>
                        <Box sx={{ boxShadow: 3, borderRadius: 3, height: { xs: 400, md: 500 }, width: { xs: 400, md: 500 } }}>
                            <img src={detail?.image} />
                        </Box>
                        <Stack direction='column' spacing={3} sx={{ mt: { xs: 5, md: 0 } }}>
                            <Box p={3} sx={{ boxShadow: 3, borderRadius: 3, height: { xs: 'auto', md: 330 }, width: { xs: 300, md: 350 } }}>
                                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{detail?.name}</Typography>
                                <Typography variant='body1' sx={{ color: grey[600] }}>{detail?.Category?.name}</Typography>
                                <Typography variant='h6'>{formatCurrency(detail?.price)} / hari</Typography>
                                <Grid mt={1} container justifyContent='space-between' alignItems='center'>
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
                                <Typography variant='body2' fontWeight='bold' sx={{ mt: 1 }}>Unggah KTP</Typography>
                                <input type='file' name='ktp' onChange={handleImage} />
                                {!isLoged ? (
                                    <Box>
                                        <Link to={'/login'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <Button onClick={handleOpen} variant='contained' size='large' fullWidth sx={{
                                                backgroundColor: lightGreen[500], '&:hover': {
                                                    backgroundColor: lightGreen[500],
                                                    opacity: [0.7, 0.8, 0.9],
                                                }, mt: 2, display: { xs: 'none', md: 'block' }
                                            }}>Login dulu yaa!</Button>
                                        </Link>
                                    </Box>
                                ) : detail.ProfileId == profile.id ? (
                                    <Box>
                                        <Link to={'/product/edit/' + slug} style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <Button onClick={handleOpen} variant='contained' size='large' fullWidth sx={{
                                                backgroundColor: lightGreen[500], '&:hover': {
                                                    backgroundColor: lightGreen[500],
                                                    opacity: [0.7, 0.8, 0.9],
                                                }, mt: 2, display: { xs: 'none', md: 'block' }
                                            }}>Edit Produk</Button>
                                        </Link>
                                    </Box>
                                ) : (
                                    <Box>
                                        <Button onClick={handleOpen} variant='contained' size='large' fullWidth sx={{
                                            backgroundColor: lightGreen[500], '&:hover': {
                                                backgroundColor: lightGreen[500],
                                                opacity: [0.7, 0.8, 0.9],
                                            }, mt: 2, display: { xs: 'none', md: 'block' }
                                        }}>Sewa dan Nego Sekarang</Button>
                                        {/* <Button variant='outlined' size='large' fullWidth sx={{
                                            mt: 2,
                                            color: lightGreen[500],
                                            borderColor: lightGreen[500],
                                            display: { xs: 'none', md: 'block' }
                                        }}>Masukkan ke wishlist</Button> */}
                                    </Box>
                                )}

                            </Box>
                            <ProfileCard profile={detail} />
                        </Stack>
                    </Grid>
                    <Grid container justifyContent='space-evenly'>
                        <Box p={3} sx={{ boxShadow: 3, width: { xs: 260, md: 450 }, mt: 6, borderRadius: 3 }}>
                            <Typography variant='h5'>Deskripsi</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography>
                                {detail.description ? parser(detail.description) : 'Tidak ada deskripsi'}
                            </Typography>
                        </Box>
                        <Box p={3} sx={{ boxShadow: 3, width: { xs: 260, md: 350 }, mt: 6, borderRadius: 3 }}>
                            <Grid container justifyContent='space-between'>
                                <Box alignItems='center'>
                                    <Grid container gap={1} alignItems='center'>
                                        <Rating name="read-only" value={calcRate} readOnly />
                                        <Typography variant='body1' sx={{ color: grey[600] }}>{calcRate? calcRate : 0}/5</Typography>
                                    </Grid>
                                </Box>
                                <Typography variant='body2' sx={{ color: grey[600] }}>{reviews.length} Ulasan</Typography>
                            </Grid>
                            <Divider sx={{ my: 2 }} />
                            <Box height={350} overflow={'auto'}>
                                {
                                    reviews.map((review, index) => {
                                        return (
                                            <CardReview key={index} review={review} />
                                        )
                                    })
                                }
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            {!isLoged ? (
                                null
                            ) : (
                                <Box>
                                    <Rating
                                        name="hover-feedback"
                                        value={review.rate}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setReview({ ...review, rate: newValue });
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    <Box sx={{ mt: 1 }}>
                                        <TextField fullWidth value={review.comment} onChange={(e) => setReview({ ...review, comment: e.target.value })} multiline rows={2} placeholder='Komentar' />
                                        <Button onClick={() => handleReview()} variant='contained' size='large' fullWidth sx={{
                                            backgroundColor: lightGreen[500], '&:hover': {
                                                backgroundColor: lightGreen[500],
                                                opacity: [0.7, 0.8, 0.9],
                                            }, mt: 2
                                        }}>Kirim Ulasan</Button>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                    <Grid direction='column' sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 70, display: { xs: 'block', md: 'none' } }}>
                        {!isLoged ? (
                            <Link to={'/login'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                <Fab onClick={handleOpen} variant='extended' color={lightGreen[500]} aria-label="add" sx={{ backgroundColor: lightGreen[500], color: '#fff' }}>
                                    Login dulu yaa!
                                </Fab>
                            </Link>
                        ) : (
                            <Fab onClick={handleOpen} variant='extended' color={lightGreen[500]} aria-label="add" sx={{ backgroundColor: lightGreen[500], color: '#fff' }}>
                                <ShoppingCart />
                                Sewa dan Nego
                            </Fab>
                        )}
                        {/* <Fab variant='extended' color={lightGreen[500]} aria-label="add" sx={{ backgroundColor: lightGreen[500], color: '#fff' }}>
                            <Favorite />
                            Wishlist
                        </Fab> */}
                    </Grid>
                </Grid>
            </Container>
            <Modal open={open} onClose={handleClose}>
                <Box position='absolute' left={0} top={0} right={0} bgcolor='#fff' p={3} sx={{ borderRadius: 3, width: { xs: 250, md: 400 }, top: 50, left: { xs: 30, md: 550 } }}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Box />
                        <IconButton onClick={handleClose}><Close /></IconButton>
                    </Grid>
                    <Box mt={2}>
                        <Typography variant='h6' fontWeight='bold'>Masukkan harga tawarmu</Typography>
                        <Typography variant='body2' color={grey[500]}>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</Typography>
                        <Card sx={{ display: 'flex', mt: 3, bgcolor: grey[200] }}>
                            <CardMedia component='img' image={detail?.image} alt='product img' sx={{ width: 130, display: { xs: 'none', md: 'block' } }} />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h6' fontWeight='bold'>{detail?.name}</Typography>
                                <Typography variant='body2'>{formatCurrency(detail?.price)} / hari</Typography>
                            </CardContent>
                        </Card>
                        <Box mt={3}>
                            <Typography variant='body2' fontWeight='bold'>Harga Tawar</Typography>
                            <TextField value={offer} onChange={e => setOffer(e.target.value)} InputProps={{
                                startAdornment: <InputAdornment>Rp </InputAdornment>,
                                endAdornment: <InputAdornment>/ hari</InputAdornment>
                            }} fullWidth />
                        </Box>
                        <Typography variant='body1' mt={1}>Deposit : {formatCurrency(detail?.price)}</Typography>
                        <Typography variant='body1' mt={1}>Total Bayar : {formatCurrency(duration * offer + detail?.price)}</Typography>
                        <form encType='multipart/form-data' onSubmit={handleSubmit}>
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