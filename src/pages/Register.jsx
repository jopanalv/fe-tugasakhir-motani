import React from 'react';
import { Grid, Typography, TextField, Button, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
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
            <Grid container>
                <Grid item mt={2} md={7} xs={12}>
                    <img src={AuthImg} alt='auth' width={950} />
                </Grid>
                <Grid item mt={10} p={5} md={5} xs={12}>
                    <Typography variant='h3' color='primary' sx={{
                        fontWeight: 'bold',
                    }}>
                        Register
                    </Typography>
                    <Typography mb={2} variant='body2'>Daftar akun dengan benar dan lengkap.</Typography>
                    <TextField id='outlined-basic' label='Nama' type='text' margin='dense' fullWidth />
                    <TextField id='outlined-basic' label='Email' type='text' margin='dense' fullWidth />
                    <TextField id='outlined-basic' label='Password' type='password' margin='dense' fullWidth />
                    <FormControl fullWidth sx={{
                        mt:1
                    }}>
                        <InputLabel id='demo-simple-select-label'>Role</InputLabel>
                        <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Age'>
                            <MenuItem value={10}>Seller</MenuItem>
                            <MenuItem value={20}>Buyer</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant='contained' color='primary' href='#contained-buttons' size='large' sx={{
                        mt: 2
                    }} fullWidth>
                        Register
                    </Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Register;