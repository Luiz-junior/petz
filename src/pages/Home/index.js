import React from 'react';

import ListPosts from '../../components/ListPosts';
import { HomeContainer } from './styles';

function Home() {
  return (
    <HomeContainer>
      <ListPosts />
    </HomeContainer>
  )
}

export default Home
