import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Person, Dashboard, ShoppingCart } from '@mui/icons-material';

const BotNavbar = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: {xs: 'block', md: 'none'} }} elevation={3}>
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Dashboard" icon={<Dashboard />} />
                <BottomNavigationAction label="Cart" icon={<ShoppingCart />} />
                <BottomNavigationAction label="Profile" icon={<Person />} />
            </BottomNavigation>
        </Paper>
    )
}

export default BotNavbar;