import React from 'react';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import AuthImg from '../assets/peasent.svg';

const Login = () => {
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
                    <img src={AuthImg} alt='auth' width={950}/>
                </Grid>
                <Grid item mt={15} p={5} md={5} xs={12}>
                    <Typography variant='h3' color='primary' sx={{
                        fontWeight: 'bold',
                    }}>
                        Login
                    </Typography>
                    <Typography mb={2} variant='body2'>Masuk menggunakan akun yang sudah didaftarkan sebelumnya.</Typography>
                    <TextField id='outlined-basic margin-normal' label='Email' type='text' margin='normal' fullWidth />
                    <TextField id='outlined-basic margin-normal' label='Password' type='password' margin='normal' fullWidth />
                    <Button variant='contained' color='primary' href='#contained-buttons' size='large' sx={{
                        mt: 2
                    }} fullWidth>
                        Login
                    </Button>
                    <Typography variant='body2' mt={2} align='center'>
                        Belum punya akun?
                        <Link href='/register' ml={1} variant='body2' underline='none'>
                            Daftar
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Login;