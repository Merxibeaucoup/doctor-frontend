import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
    height:100vh;
`

const Wrapper = styled.div`
    margin-left:3%;
    margin-top: 5%;
   
`



const Title = styled.h2`
color:#075c95;

`

const Desc = styled.p`
    width:80%;
    letter-spacing:2px;
    font-weight: 200;
`
const ContactWrapper = styled.div`
    margin-top: 10%;
`

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  margin-bottom:5px;
`;




const About = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <img src='/img/undraw_doctors_hwty.svg' alt='svg logo ' style={{width:'150px'}}/>
            <Title>Our Mission</Title>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis deserunt asperiores totam labore neque unde, excepturi eaque sint.</Desc>
            <Title>About Us</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, rem tempora laborum natus vero facilis odit distinctio blanditiis veritatis voluptatum enim esse, et doloremque nesciunt temporibus quod, officiis a. Earum, error, minus odit excepturi accusamus iure dolorum sed voluptas fuga, a possimus assumenda eveniet suscipit? Asperiores sed veritatis libero repellat.</Desc>
           <ContactWrapper>
            <Title>Contact Us</Title>
           <ContactItem>Doctorli.com</ContactItem>
           <ContactItem>1 Gotham drive</ContactItem>
           <ContactItem>Gotham City, NY</ContactItem>
           <ContactItem>+1(273) -(648) -(9901)</ContactItem>
           </ContactWrapper>
        </Wrapper>
        <Footer />
        </Container>
  )
}

export default About