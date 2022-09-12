import React from 'react';
import styled from 'styled-components';
import img from '../assests/login1.jpg';

export default function BackgroundImage() {
  return (
    <Container>
        <img src={img} alt="login" />
    </Container>
  )
}
const Container = styled.div`
height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

