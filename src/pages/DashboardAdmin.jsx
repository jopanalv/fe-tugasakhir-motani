import { Container, Typography, Box, Stack, Grid, Avatar, Button, Divider, Modal, IconButton, TextField, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { lightGreen, grey } from '@mui/material/colors';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Edit, Delete, Close } from '@mui/icons-material';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import ProfileCard from '../components/ProfileCard';
import MenuSidebar from '../components/MenuSidebar';
import MenuSidebarMobile from '../components/MenuSidebarMobile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUser, getAllUsers } from '../redux/action/userAction';
import { getAllCategory } from '../redux/action/categoryAction';
import { getAllBanner } from '../redux/action/bannerAction';
import { RegisterUser } from '../redux/action/authAction';
import { useNavigate } from 'react-router-dom';

const DashboardAdmin = () => {
    const [open, setOpen] = useState(false)
    const [dataUser, setDataUser] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    })

    const user = JSON.parse(localStorage.getItem('user'));
    const { profiles } = useSelector(state => state.user);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getAllCategory())
        dispatch(getAllBanner())
    }, [])

    const handleCreate = () => {
        dispatch(RegisterUser(dataUser))
        setDataUser({
            name: '',
            email: '',
            password: '',
            role: ''
        })
        handleClose()
        navigate('/admin')
    }

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }

    const columns = [
        { field: 'no', headerName: 'No', width: 50, align: 'center' },
        { field: 'nama', headerName: 'Nama', width: 140 },
        { field: 'email', headerName: 'Email', width: 140 },
        { field: 'alamat', headerName: 'Alamat', width: 140 },
        { field: 'nohp', headerName: 'No HP', width: 140 },
        { field: 'role', headerName: 'Role', width: 80 },
        {
            field: 'aksi', type: 'actions', headerName: 'Aksi', width: 100,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<Delete />}
                    label='Delete'
                    onClick={() => {
                        handleDelete(params.row.id)
                    }}
                />,
            ]
        },
    ];

    const rows = profiles.map((profile, index) => {
        return {
            id: profile.id,
            no: index + 1,
            nama: profile.Profile.name,
            email: profile.email,
            alamat: profile.Profile.address,
            nohp: profile.Profile.phone,
            role: profile.role,
        }
    })

    return (
        <>
            <Navbar />
            <Container fixed sx={{ mt: 15, mb: 10 }}>
                <Typography variant='h5' fontWeight='bold'>Dashboard Admin</Typography>
                <ProfileCard profile={user} />
                <Grid container direction='row' justifyContent='space-between' mt={5}>
                    <MenuSidebar />
                    <MenuSidebarMobile />
                    <Box width={800} height={400}>
                        <Button onClick={() => handleOpen()} variant='contained' sx={{ backgroundColor: lightGreen[500], color: 'white', mb: 2 }}>
                            Tambah User
                        </Button>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                        />
                    </Box>
                </Grid>
                <Modal open={open} onClose={handleClose}>
                    <Box position='absolute' left={0} top={0} right={0} bgcolor='#fff' p={3} sx={{ borderRadius: 3, width: 250, top: 60, left: { xs: 30, md: 550 } }}>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Box />
                            <IconButton onClick={handleClose}><Close /></IconButton>
                        </Grid>
                        <Box mt={2}>
                            <Box mt={3}>
                                <Typography variant='body2' fontWeight='bold'>Nama user</Typography>
                                <TextField value={dataUser.name} onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })} fullWidth />
                            </Box>
                            <Box mt={3}>
                                <Typography variant='body2' fontWeight='bold'>Email</Typography>
                                <TextField value={dataUser.email} onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} fullWidth />
                            </Box>
                            <Box mt={3}>
                                <Typography variant='body2' fontWeight='bold'>Password</Typography>
                                <TextField value={dataUser.password} onChange={(e) => setDataUser({ ...dataUser, password: e.target.value })} fullWidth />
                            </Box>
                            <Box mt={3}>
                                <Typography variant='body2' fontWeight='bold'>Role</Typography>
                                <Select value={dataUser.role} onChange={(e) => setDataUser({ ...dataUser, role: e.target.value })} id='demo-simple-select' fullWidth>
                                    <MenuItem value='admin'>Admin</MenuItem>
                                    <MenuItem value='seller'>Seller</MenuItem>
                                    <MenuItem value='buyer'>Buyer</MenuItem>
                                </Select>
                            </Box>
                            <Button variant='contained' onClick={() => handleCreate()} size='large' fullWidth sx={{
                                backgroundColor: lightGreen[500], '&:hover': {
                                    backgroundColor: lightGreen[500],
                                    opacity: [0.7, 0.8, 0.9],
                                }, mt: 3
                            }}>Tambah User</Button>
                        </Box>
                    </Box>
                </Modal>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DashboardAdmin;