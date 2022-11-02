import { Divider, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BotNavbar from '../components/BotNavbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import PostByCategory from '../components/PostByCategory';
import { getAllCategory } from '../redux/action/categoryAction';

const Home = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Container fixed>
        <Divider sx={{ my: 3 }} />
        {categories.map(category => (
          <>
            <PostByCategory key={category.id} category={category} />
            <Divider sx={{ my: 3 }} />
          </>
        ))}
        {/* <Divider  />
        <PostByCategory />
        <Divider sx={{ my: 3 }} />
        <PostByCategory />
        <Divider sx={{ my: 3 }} />
        <PostByCategory />
        <Divider sx={{ my: 3 }} /> */}
      </Container>
      <BotNavbar />
      <Footer />
    </>
  )
}

export default Home;