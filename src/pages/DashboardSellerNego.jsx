import { Container, Typography, Box, Stack, Grid, Avatar, Button, Divider, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowForwardIos, ViewList, AttachMoney, PendingActions, AddPhotoAlternate, Check } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import BotNavbar from '../components/BotNavbar';
import ProfileCard from '../components/ProfileCard';
import MenuSidebar from '../components/MenuSidebar';
import NotFound from '../assets/notfound.png';
import MenuSidebarMobile from '../components/MenuSidebarMobile';
import NegoCard from '../components/NegoCard';
import { useDispatch, useSelector } from 'react-redux';
import CardNego from '../components/CardNego';
import { getTransaction } from '../redux/action/transactionAction';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const DashboardSellerNego = () => {
    const [value, setValue] = useState(0);

    const { transactions } = useSelector((state) => state.transaction);
    const { user } = useSelector((state) => state.auth);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar />
            <Container fixed sx={{ mt: 15, mb: 10 }}>
                <Typography variant='h5' fontWeight='bold'>Dashboard Saya</Typography>
                <ProfileCard profile={user} />
                <Grid container direction='row' justifyContent='space-between' mt={5}>
                    <MenuSidebar />
                    <MenuSidebarMobile />
                    <Stack sx={{ width: { xs: '100%', md: 800 } }}>
                        <Tabs value={value} onChange={handleChange} textColor='primary' indicatorColor='primary' centered>
                            <Tab icon={<PendingActions />} label="PENDING" />
                            <Tab icon={<Check />} label="DITERIMA" />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Grid container gap={2} direction='row' alignItems='center' sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                {transactions.map((trans) => (
                                    trans.status == 'pending' && trans.SellerId == user.id ? (
                                        <CardNego key={trans.Product.id} product={trans} />
                                    ) : null
                                ))}
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Grid container gap={2} direction='row' alignItems='center' sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                {transactions.map((trans) => (
                                    trans.status == 'approved' && trans.SellerId == user.id ? (
                                        <CardNego key={trans.Product.id} product={trans} />
                                    ) : null
                                ))}
                            </Grid>
                        </TabPanel>
                    </Stack>
                </Grid>
            </Container>
            <Footer />
            <BotNavbar />
        </>
    )
}

export default DashboardSellerNego;