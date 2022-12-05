import { Notifications } from '@mui/icons-material';
import { Badge, Box, Divider, Fade, IconButton, Paper, Popper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTransaction } from '../redux/action/transactionAction';
import CardNotif from './CardNotif';

const Notification = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const [isInvisible, setIsInvisible] = useState(false);

    const dispatch = useDispatch()

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
        setIsInvisible(true)
    };

    useEffect(() => {
        dispatch(getAllTransaction())
    }, [])

    return (
        <>
            <IconButton onClick={handleClick('bottom')} aria-label='notification' color='primary'>
                <Badge variant='dot' invisible={isInvisible} color='primary'>
                    <Notifications fontSize="large" />
                </Badge>
            </IconButton>
            <Popper open={open} anchorEl={anchorEl} transition sx={{ zIndex: 1500 }}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box bgcolor='white' p={2} sx={{ boxShadow: 3, width: { xs: 300, md: 380 } }}>
                            <Divider textAlign="left">Notifikasi</Divider>
                            <CardNotif />
                        </Box>
                    </Fade>
                )}
            </Popper>
        </>
    )
}

export default Notification;