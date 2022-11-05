import { ArrowForwardIos, AttachMoney, Category, Collections, PendingActions, PeopleAlt, ViewList } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Stack } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuSidebarMobile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            {user?.role === 'seller' ? (
                <Box mb={3} p={1} sx={{ boxShadow: 3, borderRadius: 3, width: { xs: 1, md: 280 }, display: { xs: 'block', md: 'none' } }}>
                    <Grid container direction='row' justifyContent='space-around'>
                        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <ViewList sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Semua produk</Typography> */}
                                </Stack>
                            </Button>
                        </Link>
                        <Link to='/dashboard/rented' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <AttachMoney sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Berhasil disewa</Typography> */}
                                </Stack>
                            </Button>
                        </Link>
                        <Link to='/dashboard/nego' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <PendingActions sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Transaksi pending</Typography> */}
                                </Stack>
                            </Button>
                        </Link>
                    </Grid>
                </Box>
            ) : (
                <Box mb={3} p={1} sx={{ boxShadow: 3, borderRadius: 3, width: { xs: 1, md: 280 }, display: { xs: 'block', md: 'none' } }}>
                    <Grid container direction='row' justifyContent='space-around'>
                        <Link to='/admin' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <PeopleAlt sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Semua produk</Typography> */}
                                </Stack>
                            </Button>
                        </Link>
                        <Link to='/admin/category' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <Category sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Berhasil disewa</Typography> */}
                                </Stack>
                            </Button>
                        </Link>
                        <Link to='/admin/banner' style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: lightGreen[500], p: 1 }}>
                                <Stack display='flex'>
                                    <Collections sx={{ width: 60, height: 60, m: 'auto' }} />
                                    {/* <Typography variant='caption'>Transaksi pending</Typography> */}
                                </Stack>
                            </Button>
                        </Link>
                    </Grid>
                </Box>
            )}
        </>
    )
}

export default MenuSidebarMobile;