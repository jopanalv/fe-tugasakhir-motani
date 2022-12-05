import React, { useState, useEffect } from 'react';
import { Grid, Typography, IconButton, TextField, Button, Stack, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import { ChevronLeft } from '@mui/icons-material';
import AuthImg from '../assets/peasent.svg';
import { LoginUser } from '../redux/action/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: lightGreen[500],
                contrastText: '#fff',
            },
        },
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoged } = useSelector(state => state.auth);

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(LoginUser(user))
    }

    useEffect(() => {
        if (isLoged) return navigate('/')
    })

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='row' justifyContent='space-center' alignItems='center'>
                <Box sx={{ display: { xs: 'none', md: 'block' } }} >
                    <img src={AuthImg} alt='auth' width={950} />
                </Box>
                <Stack direction='column' sx={{ mt: { xs: 15, md: 0 } }}>
                    <Stack direction='row'>
                        <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <IconButton aria-label='delete' size='large' sx={{ display: { xs: 'block', md: 'block' } }}>
                                <ChevronLeft fontSize='large' />
                            </IconButton>
                        </Link>
                        <Typography variant='h3' color='primary' sx={{
                            fontWeight: 'bold',
                        }}>
                            Login
                        </Typography>
                    </Stack>
                    <Typography mb={2} variant='body2'>Masuk menggunakan akun yang sudah didaftarkan sebelumnya.</Typography>
                    <form onSubmit={handleLogin}>
                        <TextField id='outlined-basic margin-normal' label='Email' type='text' margin='normal' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} fullWidth />
                        <TextField id='outlined-basic margin-normal' label='Password' type='password' margin='normal' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} fullWidth />
                        <Button type='submit' variant='contained' color='primary' size='large' sx={{
                            mt: 2
                        }} fullWidth>
                            Login
                        </Button>
                    </form>
                    <Typography variant='body2' mt={2} align='center'>
                        Belum punya akun?
                        <Link to='/register'>
                            Daftar
                        </Link>
                    </Typography>
                </Stack>
            </Grid>
        </ThemeProvider>
    )
}

export default Login;