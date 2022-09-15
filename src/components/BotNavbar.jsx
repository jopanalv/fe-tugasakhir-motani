import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Person, Dashboard, ShoppingCart, Login } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BotNavbar = () => {
    const { isLoged } = useSelector(state => state.auth)

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: 'block', md: 'none' } }} elevation={3}>
            {isLoged ? (
                <BottomNavigation showLabels>
                    <BottomNavigationAction component={Link} to='/' label='Home' icon={<Home />} />
                    <BottomNavigationAction component={Link} to='/dashboard' label='Dashboard' icon={<Dashboard />} />
                    <BottomNavigationAction component={Link} to='/cart' label='Cart' icon={<ShoppingCart />} />
                    <BottomNavigationAction component={Link} to='/profile' label='Profile' icon={<Person />} />
                </BottomNavigation>
            ) : (
                <BottomNavigation showLabels>
                    <BottomNavigationAction component={Link} to='/' label='Home' icon={<Home />} />
                    <BottomNavigationAction component={Link} to='/login' label='Login' icon={<Login />} />
                </BottomNavigation>
            )}

        </Paper>
    )
}

export default BotNavbar;