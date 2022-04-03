import React from 'react'
import { useSelector } from 'react-redux';
import { Main } from './styles';

const Home = () => {
  const { isOpen } = useSelector((state) => state.ui);
  return (
    <Main open={isOpen}>
      <h2>Home</h2>
    </Main>
  )
}

export default Home