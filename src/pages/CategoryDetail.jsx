import { Box, Container, Divider, Fab, Button, Radio, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Modal, RadioGroup, Typography, FormGroup, Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import BotNavbar from '../components/BotNavbar';
import { lightGreen } from '@mui/material/colors';
import { Tune, Close, FilterAlt } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const CategoryDetail = () => {
    const [open, setOpen] = useState(false)
    const [filtering, setFiltering] = useState('')
    const [product, setProduct] = useState([])
    // const [desa, setDesa] = useState();

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const { id } = useParams()

    const { categories } = useSelector(state => state.category)
    const { products } = useSelector(state => state.product)

    useEffect(() => {
        setProduct(products.filter(p => p.CategoryId == id))
    }, []);

    const filter = () => {
        if (filtering == 'min') {
            setProduct(product.sort((a, b) => a.price - b.price))
        } else {
            setProduct(product.sort((a, b) => b.price - a.price))
        }
    }

    return (
        <>
            <Navbar />
            <Container disableGutters={true} maxWidth='lg' sx={{ mt: 5 }}>
                <Box
                    display='flex'
                    height={210}
                    bgcolor={lightGreen[500]}
                >
                    <Box m='auto'>
                        <Typography variant='h4' fontWeight='bold' color={'#fff'}>{categories[id - 1]?.name}</Typography>
                    </Box>
                </Box>
                <Grid container justifyContent='space-around' sx={{ mt: 5, mb: { xs: 10, md: 11.4 } }}>
                    <Box display='grid' gap={2} sx={{ gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
                        {product?.map((prod) => (
                            <CardList key={prod.id} product={prod} />
                        ))}
                    </Box>
                    <Box width={300} height={200} p={3} sx={{ boxShadow: 3, borderRadius: 3, display: { xs: 'none', md: 'block' } }}>
                        <Typography mb={2} fontWeight='bold' variant='h5'>Filter</Typography>
                        <Divider />
                        <Box mt={2}>
                            <FormControl>
                                <FormLabel>Harga</FormLabel>
                                <RadioGroup row>
                                    <FormControlLabel onClick={() => setFiltering('max')} value='max' control={<Radio />} label='Tertinggi' />
                                    <FormControlLabel onClick={() => setFiltering('min')} value='min' control={<Radio />} label='Terendah' />
                                </RadioGroup>
                            </FormControl>
                            {/* <FormControl>
                                <FormLabel>Desa</FormLabel>
                                <FormGroup row>
                                    {desa?.map((d) => (
                                        <FormControlLabel key={d.id} value={d.name} control={<Checkbox />} label={d.name} />
                                    ))}
                                </FormGroup>
                            </FormControl> */}
                            <Button variant='contained' onClick={() => filter()} size='large' fullWidth endIcon={<FilterAlt />} sx={{
                                backgroundColor: lightGreen[500], '&:hover': {
                                    backgroundColor: lightGreen[500],
                                    opacity: [0.7, 0.8, 0.9],
                                }, mt: 3
                            }}>Filter</Button>
                        </Box>
                    </Box>
                </Grid>
                <Fab onClick={handleOpen} sx={{ position: 'fixed', bottom: 90, right: 20, backgroundColor: lightGreen[500], color: '#fff', display: { xs: 'flex', md: 'none' } }}>
                    <Tune />
                </Fab>
            </Container>
            <Modal open={open} onClose={handleClose}>
                <Box width={250} position='absolute' left={30} top={50} bgcolor='#fff' p={3} sx={{ borderRadius: 3 }}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography mb={2} fontWeight='bold' variant='h5'>Filter</Typography>
                        <IconButton onClick={handleClose}><Close /></IconButton>
                    </Grid>
                    <Divider />
                    <Box mt={2}>
                        <FormControl>
                            <FormLabel>Harga</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value='max' control={<Radio />} label='Tertinggi' />
                                <FormControlLabel value='min' control={<Radio />} label='Terendah' />
                            </RadioGroup>
                        </FormControl>
                        {/* <FormControl>
                            <FormLabel>Kota</FormLabel>
                            <FormGroup row>
                                {desa?.map((d) => (
                                    <FormControlLabel key={d.id} value={d.name} control={<Checkbox />} label={d.name} />
                                ))}
                            </FormGroup>
                        </FormControl> */}
                        <Button variant='contained' size='large' fullWidth endIcon={<FilterAlt />} sx={{
                            backgroundColor: lightGreen[500], '&:hover': {
                                backgroundColor: lightGreen[500],
                                opacity: [0.7, 0.8, 0.9],
                            }, mt: 3
                        }}>Filter</Button>
                    </Box>
                </Box>
            </Modal>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default CategoryDetail;