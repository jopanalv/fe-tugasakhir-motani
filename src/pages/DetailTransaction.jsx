import { ChevronLeft } from '@mui/icons-material';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import BotNavbar from '../components/BotNavbar';
import Footer from '../components/Footer';
import NegoCard from '../components/NegoCard';
import ProfileCard from '../components/ProfileCard';
import StaticNavbar from '../components/StaticNavbar';
import { getTransactionDetail } from '../redux/action/transactionAction';

const DetailTransaction = () => {
    const { transactionDetail } = useSelector(state => state.transaction)

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getTransactionDetail(id))
    }, [])

    // console.log(transactionDetail)
    return (
        <>
            <StaticNavbar title='Detail Transaksi' />
            <Container fixed sx={{ mt: 13, mb: 16.9, width: { xs: 350, md: 800 } }}>
                <ProfileCard profile={transactionDetail} />
                <Stack direction='row' alignItems='center' sx={{ mt: 3, mb: 2 }}>
                    <Link to={'/dashboard/nego'} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <IconButton aria-label='delete' size='large'>
                            <ChevronLeft fontSize='large' />
                        </IconButton>
                    </Link>
                    <Typography variant='h5' fontWeight='bold'>Informasi Penawaran</Typography>
                </Stack>
                <NegoCard detail={transactionDetail} />
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DetailTransaction;