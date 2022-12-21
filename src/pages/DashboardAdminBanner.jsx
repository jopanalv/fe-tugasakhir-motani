import { Container, Typography, Box, Stack, Grid, Avatar, Button, Divider, Card, CardMedia, CardActions, Modal, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { lightGreen, grey, red } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import ProfileCard from '../components/ProfileCard';
import MenuSidebar from '../components/MenuSidebar';
import MenuSidebarMobile from '../components/MenuSidebarMobile';
import { useDispatch, useSelector } from 'react-redux';
import { createBanner, deleteBanner } from '../redux/action/bannerAction';
import { Close } from '@mui/icons-material';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DashboardAdminBanner = () => {
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState([])

    const user = JSON.parse(localStorage.getItem('user'))
    const { banner } = useSelector(state => state.banner)

    const dispatch = useDispatch()
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const onDrop = useCallback((acceptedFiles) => {
        setImage(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const selected_images = image?.map((file) => (
        <div key={file.lastModified}>
            <Box component='img'
                src={file.preview}
                alt='upload image'
                sx={{
                    width: 500,
                }} />
        </div>
    ));

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('image', image[0])

        dispatch(createBanner(formData))
        handleClose()
    }

    const handleDelete = (id) => {
        dispatch(deleteBanner(id))
    }

    return (
        <>
            <Navbar />
            <Container fixed sx={{ mt: 15, mb: 10 }}>
                <Typography variant='h5' fontWeight='bold'>Dashboard Saya</Typography>
                <ProfileCard profile={user} />
                <Grid container direction='row' justifyContent='space-between' mt={5}>
                    <MenuSidebar />
                    <MenuSidebarMobile />
                    <Box width={800}>
                        <Button onClick={() => handleOpen()} variant='contained' sx={{ backgroundColor: lightGreen[500], color: 'white', mb: 2 }}>
                            Tambah Banner
                        </Button>
                        {banner.map((ban, index) => (
                            <Card sx={{ maxWidth: '80%', mt: 2 }}>
                                <CardMedia component='img' image={ban.url} />
                                <CardActions>
                                    <Button onClick={() => handleDelete(ban.id)} variant='contained' color='error'>Delete</Button>
                                </CardActions>
                            </Card>
                            // <Box component='img' src={ban.url} sx={{ width: '80%', height: 200, borderRadius: 5, mt: 2 }} />
                        ))}
                    </Box>
                </Grid>
                <Modal open={open} onClose={handleClose}>
                    <Box position='absolute' left={0} top={0} right={0} bgcolor='#fff' p={3} sx={{ borderRadius: 3, width: 250, top: 100, left: { xs: 30, md: 550 } }}>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Box />
                            <IconButton onClick={handleClose}><Close /></IconButton>
                        </Grid>
                        <Box mt={2}>
                            <Box mt={3}>
                                <Grid container direction='row' justifyContent='center'>
                                    <Box />
                                    {image.length === 0 ? (
                                        <div {...getRootProps()}>
                                            <input type='file' {...getInputProps()} filename='image' />
                                            <Box component='img'
                                                src='https://res.cloudinary.com/motani/image/upload/v1666530455/upload_gsycig.jpg'
                                                alt='upload image'
                                                sx={{
                                                    width: 200,
                                                }} />
                                        </div>
                                    ) : (
                                        <div {...getRootProps()}>
                                            <input type='file' {...getInputProps()} filename='image' />
                                            {selected_images}
                                        </div>
                                    )}
                                    <Box />
                                </Grid>
                            </Box>
                            <form encType='multipart/form-data' onSubmit={handleSubmit}>
                                <Button variant='contained' type='submit' size='large' fullWidth sx={{
                                    backgroundColor: lightGreen[500], '&:hover': {
                                        backgroundColor: lightGreen[500],
                                        opacity: [0.7, 0.8, 0.9],
                                    }, mt: 3
                                }}>Tambah Banner</Button>
                            </form>
                        </Box>
                    </Box>
                </Modal>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DashboardAdminBanner;