import { Container, TextField, Box, Button, Stack, FormControl, InputLabel, Select, MenuItem, Grid, NativeSelect, Autocomplete } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import React, { useCallback, useEffect, useState } from 'react';
import StaticNavbar from '../components/StaticNavbar';
import { grey, lightGreen, red } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { updateUser } from '../redux/action/authAction';

const EditProfile = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { user } = useSelector(state => state.auth)

    const [image, setImage] = useState([]);
    const [name, setName] = useState(user?.Profile.name || '');
    const [city, setCity] = useState(user?.Profile.city || '');
    const [address, setAddress] = useState(user?.Profile.address || '');
    const [phone, setPhone] = useState(user?.Profile.phone || '');
    const [desa, setDesa] = useState();

    const previewImage = user?.Profile.image !== null
        ? user?.Profile.image
        : null;

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
                    width: 200,
                }} />
        </div>
    ));

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://www.emsifa.com/api-wilayah-indonesia/api/villages/3515130.json`,
        }).then(res => {
            setDesa(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image[0]);
        formData.append("name", name);
        formData.append("city", desa);
        formData.append("address", address);
        formData.append("phone", phone);
        dispatch(updateUser(formData, id));
    };
    return (
        <>
            <StaticNavbar title='Edit Profil' />
            <Container fixed sx={{ mt: 13 }}>
                <Grid container direction='row' justifyContent='center'>
                    <Box />
                    {image.length === 0 ? (
                        <div {...getRootProps()}>
                            <input type='file' {...getInputProps()} filename='image' />
                            <Box component='img'
                                src={previewImage ?? 'https://res.cloudinary.com/motani/image/upload/v1666530455/upload_gsycig.jpg'}
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
                <TextField id='outlined-basic' value={name} onChange={(e) => setName(e.target.value)} label='Nama' type='text' margin='normal' fullWidth />
                <Autocomplete
                    fullWidth
                    id="country-select-demo"
                    sx={{ mt: 1 }}
                    options={desa}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Desa"
                            value={desa}
                            onChange={(e) => setDesa(e.target.value)}
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
                <TextField id='outlined-basic' value={address} onChange={(e) => setAddress(e.target.value)} multiline rows={4} label='Alamat' type='text' margin='normal' fullWidth />
                <TextField id='outlined-basic' value={phone} onChange={(e) => setPhone(e.target.value)} label='Nomer HP' type='text' margin='normal' fullWidth />
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <Button type='submit' variant='contained' size='large' sx={{
                        mt: 2,
                        mb: 7,
                        bgcolor: lightGreen[500]
                    }} fullWidth>
                        Simpan
                    </Button>
                </form>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default EditProfile;