import { Container, TextField, Box, Button, Stack, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import React from 'react';
import StaticNavbar from '../components/StaticNavbar';
import { grey, lightGreen, red } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';

const EditProduct = () => {
    return (
        <>
            <StaticNavbar title='Edit Produk' />
            <Container fixed sx={{ mt: 13 }}>
                <Grid container direction='row' justifyContent='center'>
                    <Box />
                    <Box mb={3} width={200} height={135} sx={{ border: 2, borderColor: grey[300], borderStyle: 'dashed', borderRadius: 2 }}>
                        <Button fullWidth sx={{ color: grey[500], p: 2 }}>
                            <Stack display='flex'>
                                <AddPhotoAlternate sx={{ width: 80, height: 80, m: 'auto' }} />
                                Tambah Gambar
                            </Stack>
                        </Button>
                    </Box>
                    <Box />
                </Grid>
                <TextField id='outlined-basic' label='Nama Produk' type='text' margin='normal' fullWidth />
                <FormControl fullWidth sx={{
                    mt: 1
                }}>
                    <InputLabel id='demo-simple-select-label'>Kategori</InputLabel>
                    <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Role'>
                        <MenuItem value='seller'>Kategori 1</MenuItem>
                        <MenuItem value='buyer'>Kategori 2</MenuItem>
                        <MenuItem value='buyer'>Kategori 3</MenuItem>
                    </Select>
                </FormControl>
                <TextField id='outlined-basic' label='Harga' type='text' margin='normal' fullWidth />
                <TextField id='outlined-basic' label='Stok' type='text' margin='normal' fullWidth />
                <TextField id='outlined-basic' multiline rows={5} label='Deskripsi' type='text' margin='normal' fullWidth />
                <form>
                    <Button type='submit' variant='contained' size='large' sx={{
                        mt: 2,
                        bgcolor: lightGreen[500]
                    }} fullWidth>
                        Simpan
                    </Button>
                    <Button type='submit' variant='contained' size='large' sx={{
                        mt: 2,
                        mb: 7,
                        bgcolor: red[500]
                    }} fullWidth>
                        Delete
                    </Button>
                </form>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default EditProduct;