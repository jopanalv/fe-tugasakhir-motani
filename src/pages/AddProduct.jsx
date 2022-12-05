import { Container, TextField, Box, Button, Stack, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import React, { useCallback, useState } from 'react';
import StaticNavbar from '../components/StaticNavbar';
import { grey, lightGreen } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/action/productAction';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddProduct = () => {
    const dispatch = useDispatch();

    const [image, setImage] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState(0);

    const { categories } = useSelector((state) => state.category);

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
                            {categories?.map((category) => (
                                <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField id='outlined-basic' value={price} onChange={(e) => setPrice(e.target.value)} label='Harga' type='text' margin='normal' fullWidth />
                    <TextField id='outlined-basic' value={stock} onChange={(e) => setStock(e.target.value)} label='Stok' type='text' margin='normal' fullWidth />
                    <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        config={{
                            placeholder: 'Deskripsi Produk',
                            toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo']
                        }}
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            editor.editing.view.change((writer) => {
                                writer.setStyle(
                                    'height',
                                    '150px',
                                    editor.editing.view.document.getRoot()
                                );
                            });
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setDescription(data)
                            console.log({ event, editor, data });
                        }}
                    />
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