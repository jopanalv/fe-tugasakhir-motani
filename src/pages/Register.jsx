import React from 'react';
import { Grid, Box, IconButton, Typography, Link, TextField, Button, Select, MenuItem, FormControl, InputLabel, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import { ChevronLeft } from '@mui/icons-material';
import AuthImg from '../assets/peasent.svg';

const Register = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: lightGreen[500],
                contrastText: '#fff',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='row' justifyContent='space-center' alignItems='center'>
                <Box sx={{ display: { xs: 'none', md: 'block' } }} >
                    <img src={AuthImg} alt='auth' width={950} />
                </Box>
                <Stack direction='column' sx={{ mt: { xs: 15, md: 0 } }}>
                    <Stack direction='row'>
                        <IconButton href='/' aria-label="delete" size="large" sx={{display: {xs: 'block', md: 'none'}}}>
                            <ChevronLeft fontSize="large" />
                        </IconButton>
                        <Typography variant='h3' color='primary' sx={{
                            fontWeight: 'bold',
                        }}>
                            Register
                        </Typography>
                    </Stack>
                    <Typography mb={2} variant='body2'>Daftar akun dengan benar agar bisa sewa alat yang diinginkan.</Typography>
                    <TextField id='outlined-basic' label='Nama' type='text' margin='dense' fullWidth />
                    <TextField id='outlined-basic' label='Email' type='text' margin='dense' fullWidth />
                    <TextField id='outlined-basic' label='Password' type='password' margin='dense' fullWidth />
                    <FormControl fullWidth sx={{
                        mt: 1
                    }}>
                        <InputLabel id='demo-simple-select-label'>Role</InputLabel>
                        <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Age'>
                            <MenuItem value='seller'>Seller</MenuItem>
                            <MenuItem value='buyer'>Buyer</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant='contained' color='primary' href='#contained-buttons' size='large' sx={{
                        mt: 2
                    }} fullWidth>
                        Register
                    </Button>
                    <Typography variant='body2' mt={2} align='center'>
                        Sudah terdaftar ?
                        <Link href='/login' ml={1} variant='body2' underline='none'>
                            Masuk
                        </Link>
                    </Typography>
                </Stack>
            </Grid>
        </ThemeProvider>
    )
}

export default Register;