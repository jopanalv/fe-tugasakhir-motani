import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
            <Container fixed sx={{ mt: 13, mb: 16.9, width: {xs: 350, md: 800} }}>
                <ProfileCard profile={transactionDetail} />
                <Typography variant='h5' fontWeight='bold' sx={{ mt: 5, mb: 2 }}>Informasi Penawaran</Typography>
                <NegoCard detail={transactionDetail} />
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DetailTransaction;