import React, { useState, useEffect } from 'react';
import { Grid, Box, IconButton, Typography, Link, TextField, Button, Select, MenuItem, FormControl, InputLabel, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import { ChevronLeft } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../redux/action/authAction';
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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    })

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(RegisterUser(user))
        setUser({
            name: '',
            email: '',
            password: '',
            role: ''
        })

        navigate('/login')
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='row' justifyContent='space-center' alignItems='center'>
                <Box sx={{ display: { xs: 'none', md: 'block' } }} >
                    <img src={AuthImg} alt='auth' width={950} />
                </Box>
                <Stack direction='column' sx={{ mt: { xs: 15, md: 0 } }}>
                    <Stack direction='row'>
                        <IconButton href='/' aria-label='delete' size='large' sx={{ display: { xs: 'block', md: 'none' } }}>
                            <ChevronLeft fontSize='large' />
                        </IconButton>
                        <Typography variant='h3' color='primary' sx={{
                            fontWeight: 'bold',
                        }}>
                            Register
                        </Typography>
                    </Stack>
                    <Typography mb={2} variant='body2'>Daftar akun dengan benar agar bisa sewa alat yang diinginkan.</Typography>
                    <TextField id='outlined-basic' label='Nama' type='text' margin='dense' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} fullWidth />
                    <TextField id='outlined-basic' label='Email' type='text' margin='dense' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} fullWidth />
                    <TextField id='outlined-basic' label='Password' type='password' margin='dense' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} fullWidth />
                    <FormControl fullWidth sx={{
                        mt: 1
                    }}>
                        <InputLabel id='demo-simple-select-label'>Role</InputLabel>
                        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} label='Role'>
                            <MenuItem value='seller'>Seller</MenuItem>
                            <MenuItem value='buyer'>Buyer</MenuItem>
                        </Select>
                    </FormControl>
                    <form onSubmit={handleRegister}>
                        <Button type='submit' variant='contained' color='primary' size='large' sx={{
                            mt: 2
                        }} fullWidth>
                            Register
                        </Button>
                    </form>
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