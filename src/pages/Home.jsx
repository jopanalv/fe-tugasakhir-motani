import { Divider, Container } from '@mui/material';
import React from 'react';
import BotNavbar from '../components/BotNavbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LatestSection from '../components/LatestSection';
import Navbar from '../components/Navbar';
import PostByCategory from '../components/PostByCategory';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Container fixed>
        {/* <LatestSection /> */}
        <Divider sx={{ my: 3 }} />
        <PostByCategory />
        <Divider sx={{ my: 3 }} />
        <PostByCategory />
        <Divider sx={{ my: 3 }} />
        <PostByCategory />
        <Divider sx={{ my: 3 }} />
      </Container>
      <BotNavbar />
      <Footer />
    </>
  )
}

export default Home;