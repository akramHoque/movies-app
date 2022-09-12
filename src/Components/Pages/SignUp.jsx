import React from 'react'
import styled from 'styled-components'
import BackgroundImages from '../BackgroundImages'
import Header from '../Header'

export default function SignUp() {
  return <Container>     
   <BackgroundImages />
   <div className="content">

   <Header  login />

   <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder='Your Email' name = 'email' />
            <input type="password" placeholder='Your password' name = 'password' />
            <button>Get Started</button>
          </div>
          <button>Login</button>
</div>
</div>
</Container>
  
}

const Container = styled.div`
position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
`
