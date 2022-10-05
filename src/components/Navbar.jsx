import { AppBar, Box, Container, Toolbar, Grid, Stack, FormControl, OutlinedInput, InputAdornment, Button, Menu, MenuItem, Avatar } from '@mui/material';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen, grey } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoginIcon from '@mui/icons-material/Login';
import { useSelector } from 'react-redux';
import Notification from './Notification';

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

    const [anchorEl, setAnchorEl] = useState(null);
    const { isLoged, user } = useSelector(state => state.auth);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar color='default' position='fixed'>
                <Container disableGutters={true}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Toolbar disableGutters>
                            <Box sx={{
                                width: 100,
                                height: 35,
                                backgroundColor: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'primary',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                                display: { xs: 'none', md: 'block' }
                            }} />
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
                                    mr: { sx: 1, md: 2 },
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
                                <MenuItem>Kategori 1</MenuItem>
                                <MenuItem>Kategori 2</MenuItem>
                                <MenuItem>Kategori 3</MenuItem>
                            </Menu>
                            <FormControl sx={{ width: { xs: '270px' } }}>
                                <OutlinedInput
                                    id='outlined-adornment-password'
                                    type='text'
                                    size='small'
                                    placeholder='Cari disini...'
                                    endAdornment={<InputAdornment><SearchIcon /></InputAdornment>}
                                    sx={{
                                        borderRadius: 4,
                                        backgroundColor: 'secondary.main',
                                    }}
                                />
                            </FormControl>
                        </Stack>
                        {isLoged ? (
                            <Stack direction='row' spacing={1}>
                                <Notification />
                                <Button href='/profile'>
                                    <Avatar>{user?.email[0]}</Avatar>
                                </Button>
                            </Stack>
                        ) : (
                            <Button variant='contained' href='/login' startIcon={<LoginIcon />} sx={{ color: '#fff', display: { xs: 'none', md: 'inherit' } }}>Login</Button>
                        )}
                    </Grid>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar;