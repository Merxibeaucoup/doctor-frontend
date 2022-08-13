import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { FaRegCalendarCheck } from 'react-icons/fa'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

    const Container = styled.div`
        width: 100vw;
        height: 100vh;
        
    `
    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        margin:1%;
    `

    const Left = styled.div`
    flex:1;
    margin-top:10%;
    width: 70%;
    margin-left: 5%;
    `

    const Title = styled.h2`
    font-weight: 500;
        
    `

    const Desc = styled.p`
        font-weight: 200;
        letter-spacing:2px;
        text-align: left;
    `

    const Button = styled.button`
    align-items: center;
  border:none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    background-color: #547aa5;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  font-weight: 200;
  cursor: pointer;
    &:hover{
        background-color:green;
        color:white;
    }
        
    `

    const Right = styled.div`
    flex:1;
    margin-top:10%;
    `
    const Photo = styled.img`
    width: 80%;
    
    `



  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Left>
                <Title>
                    Your New Smile Starts Here
                </Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                 
               
                </Desc>
                <Link to="/booking">
                <Button>Book your appointment <FaRegCalendarCheck style={{position: 'relative', top: '3px'}}/></Button>
                </Link>
            </Left>
            <Right>
                <Photo src="/img/doctor.jpg"/>
            </Right>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Home