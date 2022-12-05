import { Container, Typography, Box, Stack, Grid, Avatar, Button, Divider, Modal, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { lightGreen, grey } from '@mui/material/colors';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import ProfileCard from '../components/ProfileCard';
import MenuSidebar from '../components/MenuSidebar';
import MenuSidebarMobile from '../components/MenuSidebarMobile';
import { useDispatch, useSelector } from 'react-redux';
import { Close, Delete, Edit } from '@mui/icons-material';
import { createCategory, deleteCategory, getAllCategory, updateCategory } from '../redux/action/categoryAction';

const DashboardAdminCategory = () => {
    const [open, setOpen] = useState(false)
    const [kategori, setKategori] = useState('')
    const [isCreate, setIsCreate] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'))
    const { categories } = useSelector(state => state.category)

    const dispatch = useDispatch()

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleEdit = (id) => {
        handleOpen()
        setIsCreate(false)
        setKategori(categories[id - 1])
    }

    const handleUpdate = (id) => {
        dispatch(updateCategory(id, kategori.name))
        handleClose()
    }

    const handleAdd = () => {
        setIsCreate(true)
        handleOpen()
    }

    const handleCreate = () => {
        dispatch(createCategory(kategori.name))
        handleClose()
    }

    const handleDelete = (id) => {
        dispatch(deleteCategory(id))
    }

    const columns = [
        { field: 'no', headerName: 'No', width: 50, align: 'center' },
        { field: 'nama', headerName: 'Kategori', width: 300 },
        {
            field: 'aksi', type: 'actions', headerName: 'Aksi', width: 100,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<Edit />}
                    label='Edit'
                    onClick={() => {
                        handleEdit(params.row.id)
                    }}
                />,
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

    const rows = categories.map((cat, index) => {
        return {
            id: cat.id,
            no: index + 1,
            nama: cat.name
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
                        <Button onClick={() => handleAdd()} variant='contained' sx={{ backgroundColor: lightGreen[500], color: 'white', mb: 2 }}>
                            Tambah Kategori
                        </Button>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            getRowId={(row) => row.id + 1}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                        />
                    </Box>
                </Grid>
                <Modal open={open} onClose={handleClose}>
                    <Box position='absolute' left={0} top={0} right={0} bgcolor='#fff' p={3} sx={{ borderRadius: 3, width: 250, top: 100, left: { xs: 30, md: 550 } }}>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Box />
                            <IconButton onClick={handleClose}><Close /></IconButton>
                        </Grid>
                        <Box mt={2}>
                            <Box mt={3}>
                                <Typography variant='body2' fontWeight='bold'>Nama Kategori</Typography>
                                <TextField value={kategori.name} onChange={(e) => setKategori({ ...kategori, name: e.target.value })} fullWidth />
                            </Box>
                            {isCreate ? (
                                <Button variant='contained' onClick={() => handleCreate()} size='large' fullWidth sx={{
                                    backgroundColor: lightGreen[500], '&:hover': {
                                        backgroundColor: lightGreen[500],
                                        opacity: [0.7, 0.8, 0.9],
                                    }, mt: 3
                                }}>Tambah Kategori</Button>
                            ) : (
                                <Button variant='contained' onClick={() => handleUpdate(kategori.id)} size='large' fullWidth sx={{
                                    backgroundColor: lightGreen[500], '&:hover': {
                                        backgroundColor: lightGreen[500],
                                        opacity: [0.7, 0.8, 0.9],
                                    }, mt: 3
                                }}>Ubah Kategori</Button>
                            )}
                        </Box>
                    </Box>
                </Modal>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DashboardAdminCategory;