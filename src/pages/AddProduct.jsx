import { Container, TextField, Box, Button, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import React from 'react';
import StaticNavbar from '../components/StaticNavbar';
import { grey, lightGreen } from '@mui/material/colors';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';

const AddProduct = () => {
    return (
        <>
            <StaticNavbar title='Tambah Produk' />
            <Container fixed sx={{ mt: 13 }}>
                <Box mb={3} height={135} sx={{ border: 2, borderColor: grey[300], borderStyle: 'dashed', borderRadius: 2 }}>
                    <Button fullWidth sx={{ color: grey[500], p: 2 }}>
                        <Stack display='flex'>
                            <AddPhotoAlternate sx={{ width: 80, height: 80, m: 'auto' }} />
                            Tambah Produk
                        </Stack>
                    </Button>
                </Box>
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