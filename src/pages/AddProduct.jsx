import { Container, TextField, Box, Button, Stack, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import React, { useCallback, useState } from 'react';
import StaticNavbar from '../components/StaticNavbar';
import { grey, lightGreen } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/action/productAction';

const AddProduct = () => {
    const dispatch = useDispatch();

    const [image, setImage] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState(0);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('CategoryId', category);
        formData.append('image', image[0]);

        dispatch(addProduct(formData));
    };

    return (
        <>
            <StaticNavbar title='Tambah Produk' />
            <Container fixed sx={{ mt: 13 }}>
                <form encType='multipart/form-data' onSubmit={handleSubmit}>
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
                    <TextField id='outlined-basic' value={name} onChange={(e) => setName(e.target.value)} label='Nama Produk' type='text' margin='normal' fullWidth />
                    <FormControl fullWidth sx={{
                        mt: 1
                    }}>
                        <InputLabel id='demo-simple-select-label'>Kategori</InputLabel>
                        <Select labelId='demo-simple-select-label' value={category} onChange={(e) => setCategory(e.target.value)} id='demo-simple-select' label='Category'>
                            <MenuItem value={1}>Kategori 1</MenuItem>
                            <MenuItem value={2}>Kategori 2</MenuItem>
                            <MenuItem value={3}>Kategori 3</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id='outlined-basic' value={price} onChange={(e) => setPrice(e.target.value)} label='Harga' type='text' margin='normal' fullWidth />
                    <TextField id='outlined-basic' value={stock} onChange={(e) => setStock(e.target.value)} label='Stok' type='text' margin='normal' fullWidth />
                    <TextField id='outlined-basic' value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={5} label='Deskripsi' type='text' margin='normal' fullWidth />
                    <Button type='submit' variant='contained' size='large' sx={{
                        mt: 2,
                        mb: 7,
                        bgcolor: lightGreen[500]
                    }} fullWidth>
                        Tambah
                    </Button>
                </form>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default AddProduct;