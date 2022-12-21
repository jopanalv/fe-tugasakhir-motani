import { AppBar, Box, Container, Toolbar, Grid, Stack, InputAdornment, Button, Menu, MenuItem, Avatar, Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen, grey } from '@mui/material/colors';
import { Search } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoginIcon from '@mui/icons-material/Login';
import { useSelector } from 'react-redux';
import Notification from './Notification';
import Logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: lightGreen[500],
                // contrastText: '#fff',
            },
            secondary: {
                main: grey[200],
                contrastText: '#fff'
            }
        },
    });

    const [anchorEl, setAnchorEl] = useState(null)
    const [value, setValue] = useState()
    const [inputValue, setInputValue] = useState('')

    const { isLoged, user } = useSelector(state => state.auth);
    const { products } = useSelector(state => state.product);
    const { categories } = useSelector(state => state.category);

    const open = Boolean(anchorEl)
    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSearch = () => {
        const slug = inputValue.split(' ').join('-').toLowerCase();
        navigate(`/detail/${slug}`, { replace: true })
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar color='default' position='fixed'>
                <Container disableGutters={true}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Toolbar disableGutters>
                            {/* <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}> */}
                                <Button href='/' sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <Box component='img' src={Logo} alt='logo website' sx={{
                                        width: 100,
                                        height: 35,
                                    }} />
                                </Button>
                            {/* </Link> */}
                        </Toolbar>
                        <Stack direction='row' spacing={1}>
                            <Button
                                id='basic-button'
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup='true'
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                endIcon={<ArrowDropDownIcon />}
                                size='large'
                                variant='outlined'
                                sx={{
                                    backgroundColor: 'secondary.main',
                                    borderRadius: 4,
                                    textTransform: 'none',
                                    color: '#000',
                                    mr: { xs: 1, md: 2 },
                                    display: { xs: 'none', md: 'inherit' }
                                }}
                            >
                                Kategori
                            </Button>
                            <Menu
                                id='basic-menu'
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {categories?.map((category, index) => (
                                    <MenuItem key={index} onClick={handleClose}>
                                        <Link to={`/category/${category?.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                            {category?.name}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue)
                                }}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue)
                                }}
                                disableClearable
                                options={products?.map((option) => option?.name)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder='Cari disini...'
                                        variant='standard'
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment>
                                                    <Button onClick={() => handleSearch()}>
                                                        <Search />
                                                    </Button>
                                                </InputAdornment>
                                            )
                                        }}
                                        sx={{
                                            width: { xs: 220, md: 300 },
                                            borderRadius: 4,
                                            border: 1,
                                            borderColor: grey[400],
                                            backgroundColor: 'secondary.main',
                                            p: 1,
                                            px: 3
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                        {isLoged ? (
                            <Stack direction='row' spacing={1}>
                                {user.role === 'admin' ? (
                                    null
                                ) : (
                                    <Notification />
                                )}
                                <Link to='/profile' style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <Button sx={{ display: { xs: 'none', md: 'inherit' } }}>
                                        <Avatar>{user?.Profile.name[0]}</Avatar>
                                    </Button>
                                </Link>
                            </Stack>
                        ) : (
                            <Button href='/login' variant='contained' startIcon={<LoginIcon />} sx={{ color: '#fff', display: { xs: 'none', md: 'inherit' } }}>
                                <Link to={'/login'} style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Login
                                </Link>
                            </Button>
                        )}
                    </Grid>
                </Container>
            </AppBar>
        </ThemeProvider >
    )
}

export default Navbar;