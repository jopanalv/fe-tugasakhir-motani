import { Container, TextField, Box, Button, Stack, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import React, { useCallback, useEffect, useState } from 'react';
import StaticNavbar from '../components/StaticNavbar';
import { grey, lightGreen, red } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProductById, updateProduct } from '../redux/action/productAction';
import { useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditProduct = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();

    const { detail } = useSelector(state => state.product);

    const [image, setImage] = useState([]);
    const [name, setName] = useState(detail?.name || '');
    const [description, setDescription] = useState(detail?.description || '');
    const [price, setPrice] = useState(detail?.price || 0);
    const [stock, setStock] = useState(detail?.stock || 0);
    const [category, setCategory] = useState(detail?.Category?.name || 0);

    const previewImage = detail?.image !== null
        ? detail?.image
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
        dispatch(getProductById({ slug }));
    }, []);

    useEffect(() => {
        setName(detail?.name || '');
        setDescription(detail?.description || '');
        setPrice(detail?.price || 0);
        setStock(detail?.stock || 0);
        setCategory(detail?.Category?.name || 0);
    }, [detail]);

    // console.log(detail.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('CategoryId', category);
        formData.append('image', image[0]);

        dispatch(updateProduct(formData, slug));
    };

    const handleDelete = (slug) => {
        dispatch(deleteProduct(slug));
    };

    return (
        <>
            <StaticNavbar title='Edit Produk' />
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
                <TextField id='outlined-basic' value={name} onChange={(e) => setName(e.target.value)} label='Nama Produk' type='text' margin='normal' fullWidth />
                <FormControl fullWidth sx={{
                    mt: 1
                }}>
                    <InputLabel id='demo-simple-select-label'>Kategori</InputLabel>
                    <Select labelId='demo-simple-select-label' value={category} onChange={(e) => setCategory(e.target.value)} id='demo-simple-select' label='Role'>
                        <MenuItem value={1}>Kategori 1</MenuItem>
                        <MenuItem value={2}>Kategori 2</MenuItem>
                        <MenuItem value={3}>Kategori 3</MenuItem>
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
                <form encType='multipart/form-data' onSubmit={handleSubmit}>
                    <Button type='submit' variant='contained' size='large' sx={{
                        mt: 2,
                        bgcolor: lightGreen[500]
                    }} fullWidth>
                        Simpan
                    </Button>
                </form>
                <Button type='submit' onClick={() => handleDelete(slug)} variant='contained' size='large' sx={{
                    mt: 2,
                    mb: 7,
                    bgcolor: red[500]
                }} fullWidth>
                    Delete
                </Button>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default EditProduct;