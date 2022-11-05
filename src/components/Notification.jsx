import { Notifications } from '@mui/icons-material';
import { Badge, Box, Divider, Fade, IconButton, Paper, Popper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import CardNotif from './CardNotif';

const Notification = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const [isInvisible, setIsInvisible] = useState(false);

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return (
        <>
            <IconButton onClick={handleClick('bottom')} aria-label='notification' color='primary'>
                <Badge variant='dot' invisible={isInvisible} color='primary'>
                    <Notifications fontSize="large" />
                </Badge>
            </IconButton>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition sx={{ zIndex: 1500 }}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box width={380} bgcolor='white' p={2} sx={{ boxShadow: 3 }}>
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