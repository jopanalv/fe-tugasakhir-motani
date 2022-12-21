import { Check, Close, WhatsApp, ZoomIn } from '@mui/icons-material';
import { Box, Button, FormControl, FormControlLabel, Grid, IconButton, Modal, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import { lightGreen, grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTransaction } from '../redux/action/transactionAction';
import { formatCurrency } from '../utils/formatCurrency';
import { formatDate } from '../utils/formatDate';

const NegoCard = ({ detail }) => {
  const [open, setOpen] = useState(false)
  const [openKtp, setOpenKtp] = useState(false)
  const [accept, setAccept] = useState(false)
  const [guarantee, setGuarantee] = useState(false)
  const [paid, setPaid] = useState(false)
  const [value, setValue] = useState('accept')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleOpenKtp = () => setOpenKtp(true)
  const handleCloseKtp = () => setOpenKtp(false)

  const { id } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleStatus = (id, status) => {
    dispatch(updateTransaction({ id, status }))
    if (status === 'accept') {
      setAccept(true)
    }
    if (status === 'cancel' || status === 'complete') {
      handleClose()
      navigate('/dashboard')
    }
    if (status === 'guarantee') {
      setGuarantee(true)
    }
    if (status === 'paid') {
      setPaid(true)
    }
  }

  // const handleSubmit = (id, status) => {
  //   dispatch(updateTransaction({ id, status }))
  //   handleClose()
  // }
  return (
    <>
      <Box sx={{ boxShadow: 3, borderRadius: 3 }}>
        <Grid p={3} gap={3} container justifyContent='flex-start'>
          <Box component='img' src={detail?.Product?.image} alt='product img' sx={{ width: 130 }} />
          <Stack ml={2} gap={2}>
            <Grid container justifyContent='space-between'>
              <Typography variant='h6' fontWeight='bold'>{detail?.Product?.name}</Typography>
              <Button onClick={handleOpenKtp} variant='contained' size='large' sx={{
                backgroundColor: lightGreen[500], '&:hover': {
                  backgroundColor: lightGreen[500],
                  opacity: [0.7, 0.8, 0.9],
                },
                ml: 5,
              }}><ZoomIn /> KTP</Button>
            </Grid>
            <Typography variant='body1'>{formatCurrency(detail?.Product?.price)} / hari</Typography>
            <Typography variant='body1'>Ditawar {formatCurrency(detail?.offer_price)} / hari</Typography>
            <Typography variant='body1'>Mulai sewa : {formatDate(detail?.start_rent)} - {detail?.duration} hari</Typography>
            <Typography variant='body1'>Deposit : {formatCurrency(detail?.Product?.price)}</Typography>
            <Grid container justifyContent='flex-start'>
              {detail?.isGuarantee || guarantee ? (
                <>
                  <Typography variant='body1'>Jaminan : Sudah Diterima</Typography>
                  <Check />
                </>
              ) : (
                <>
                  <Typography variant='body1'>Jaminan : Belum Diterima</Typography>
                  <Button onClick={() => handleStatus(id, 'guarantee')} variant='contained' size='small' sx={{
                    bgcolor: lightGreen[500],
                    ml: 2
                  }}>Diterima</Button>
                </>
              )}
            </Grid>
            <Grid container justifyContent='flex-start'>
              {detail?.isPaid || paid ? (
                <>
                  <Typography variant='body1'>Pembayaran : Sudah Diterima</Typography>
                  <Check />
                </>
              ) : (
                <>
                  <Typography variant='body1'>Pembayaran : Belum Diterima</Typography>
                  <Button onClick={() => handleStatus(id, 'paid')} variant='contained' size='small' sx={{
                    bgcolor: lightGreen[500],
                    ml: 2
                  }}>Diterima</Button>
                </>
              )}
            </Grid>
            <Typography variant='body1'>Total Bayar : {formatCurrency(detail?.duration * detail?.offer_price + detail?.Product?.price)}</Typography>
          </Stack>
        </Grid>
        <Grid p={3} gap={1} container justifyContent='flex-end'>
          {accept || detail?.status == 'approved' ? (
            <>
              <Button onClick={handleOpen} variant='outlined' size='large' sx={{
                borderColor: lightGreen[500],
                color: lightGreen[500]
              }}>Status</Button>
              <Button variant='contained' size='large' sx={{
                bgcolor: lightGreen[500]
              }}><WhatsApp />  Hubungi via WA</Button>
            </>
          ) : (
            <>
              <Button onClick={() => handleStatus(id, 'reject')} variant='outlined' size='large' sx={{
                borderColor: lightGreen[500],
                color: lightGreen[500]
              }}>Tolak</Button>
              <Button onClick={() => handleStatus(id, 'accept')} variant='contained' size='large' sx={{
                bgcolor: lightGreen[500]
              }}>Terima</Button>
            </>
          )}
        </Grid>
      </Box >
      <Modal open={open} onClose={handleClose}>
        <Box position='absolute' left={0} top={0} right={0} bgcolor='#fff' p={3} sx={{ borderRadius: 3, width: 350, top: 100, left: { xs: 30, md: 550 } }}>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Box />
            <IconButton onClick={handleClose}><Close /></IconButton>
          </Grid>
          <Box mt={2}>
            <Typography variant='h6' fontWeight='bold'>Perbarui status penjualanmu</Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <FormControlLabel value='complete' control={<Radio color='success' />} label='Transaksi Berhasil' sx={{ mt: 2 }} />
                <Typography variant='body2' sx={{ color: grey[500], ml: 4 }}>Penyewa telah menyelesaikan transaksi dan produk sudah dikembalikan.</Typography>
                <FormControlLabel value='cancel' control={<Radio color='success' />} label='Batalkan Transaksi' sx={{ mt: 2 }} />
                <Typography variant='body2' sx={{ color: grey[500], ml: 4 }}>Kamu membatalkan transaksi produk ini dengan penyewa.</Typography>
              </RadioGroup>
            </FormControl>
            <Button onClick={() => handleStatus(id, value)} variant='contained' size='large' sx={{
              bgcolor: lightGreen[500],
              width: '100%',
              mt: 4
            }}>Kirim</Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={openKtp} onClose={handleCloseKtp}>
        <Box position='absolute' left={0} top={0} right={0} bgcolor='#fff' p={3} sx={{ borderRadius: 3, width: 250, top: 100, left: { xs: 30, md: 550 } }}>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Box />
            <IconButton onClick={handleCloseKtp}><Close /></IconButton>
          </Grid>
          <Box component='img' alt='gambar ktp' src={detail?.ktp} />
        </Box>
      </Modal>
    </>
  )
}

export default NegoCard;