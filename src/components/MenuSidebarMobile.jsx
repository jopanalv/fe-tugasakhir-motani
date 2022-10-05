import { AttachMoney, PendingActions, ViewList } from '@mui/icons-material';
import { Box, Button, Grid, Stack } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React from 'react';

const MenuSidebarMobile = () => {
    return (
        <Box mb={3} p={1} sx={{ boxShadow: 3, borderRadius: 3, width: { xs: 1, md: 280 }, display: { xs: 'block', md: 'none' } }}>
            <Grid container direction='row' justifyContent='space-around'>
                <Button sx={{ color: lightGreen[500], p: 1 }}>
                    <Stack display='flex'>
                        <ViewList sx={{ width: 60, height: 60, m: 'auto' }} />
                        {/* <Typography variant='caption'>Semua produk</Typography> */}
                    </Stack>
                </Button>
                <Button sx={{ color: lightGreen[500], p: 1 }}>
                    <Stack display='flex'>
                        <AttachMoney sx={{ width: 60, height: 60, m: 'auto' }} />
                        {/* <Typography variant='caption'>Berhasil disewa</Typography> */}
                    </Stack>
                </Button>
                <Button sx={{ color: lightGreen[500], p: 1 }}>
                    <Stack display='flex'>
                        <PendingActions sx={{ width: 60, height: 60, m: 'auto' }} />
                        {/* <Typography variant='caption'>Transaksi pending</Typography> */}
                    </Stack>
                </Button>
            </Grid>
        </Box>
    )
}

export default MenuSidebarMobile;