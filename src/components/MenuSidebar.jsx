import { ArrowForwardIos, AttachMoney, PendingActions, ViewList } from '@mui/icons-material';
import { Box, Button, Divider, Grid } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React from 'react';

const MenuSidebar = () => {
    return (
        <Box mb={3} height={170} p={3} sx={{ boxShadow: 3, borderRadius: 3, width: { xs: 1, md: 280 }, display: { xs: 'none', md: 'block' } }}>
            <Button href='/dashboard' startIcon={<ViewList />} fullWidth sx={{ color: lightGreen[500], p: 2 }}>
                <Grid container direction='row' justifyContent='space-between'>
                    Semua Produk
                    <ArrowForwardIos />
                </Grid>
            </Button>
            <Divider />
            <Button href='/dashboard/rented' startIcon={<AttachMoney />} fullWidth sx={{ color: lightGreen[500], p: 2 }}>
                <Grid container direction='row' justifyContent='space-between'>
                    Berhasil disewa
                    <ArrowForwardIos />
                </Grid>
            </Button>
            <Divider />
            <Button href='/dashboard/nego' startIcon={<PendingActions />} fullWidth sx={{ color: lightGreen[500], p: 2 }}>
                <Grid container direction='row' justifyContent='space-between'>
                    Produk Ditawar
                    <ArrowForwardIos />
                </Grid>
            </Button>
        </Box>
    )
}

export default MenuSidebar;