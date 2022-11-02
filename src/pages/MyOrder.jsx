import { Check, DoneAll, PendingActions } from '@mui/icons-material';
import { Box, Container, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import React, { useState } from 'react';
import BotNavbar from '../components/BotNavbar';
import Footer from '../components/Footer';
import StaticNavbar from '../components/StaticNavbar';
import PropTypes from 'prop-types';
import CardOrder from '../components/CardOrder';
import CardOrder2 from '../components/CardOrder2';
import CardOrder3 from '../components/CardOrder3';

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

const MyOrder = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: lightGreen[500],
                contrastText: '#fff',
            },
        },
    })

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <StaticNavbar title='Pesanan Saya' />
                <Container fixed>
                    <Grid container justifyContent='center'>
                        <Box />
                        <Box my={13} width={600} height={460}>
                            <Tabs value={value} onChange={handleChange} textColor='primary' indicatorColor='primary' centered>
                                <Tab icon={<PendingActions />} label="PENDING" />
                                <Tab icon={<Check />} label="DITERIMA" />
                                <Tab icon={<DoneAll />} label="SUKSES" />
                            </Tabs>
                            <Divider />
                            <TabPanel value={value} index={0}>
                                <CardOrder />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <CardOrder2 />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <CardOrder3 />
                            </TabPanel>
                        </Box>
                        <Box />
                    </Grid>
                </Container>
                <Footer />
                <BotNavbar />
            </ThemeProvider>
        </>
    )
}

export default MyOrder;