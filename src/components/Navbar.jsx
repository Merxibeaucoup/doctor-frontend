import React from 'react'
import styled from 'styled-components'
import { FaTooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const Container = styled.div`
    width: 100%;
    height: 70px;
   background-color:#F5F5F5;
   margin: 0;
   display: flex;
  
        
    `

    const NavLogo = styled.h2`
    justify-content: center;
    letter-spacing:2px;
    align-items: center;
    margin: 15px 17px;
    font-weight: 200;
    cursor: pointer;
    color: black;
    &:hover{
        color:#44adea;
    }     
    `

    const Right = styled.div`
     flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `

    const NavItem = styled.h4`
    margin-right: 20px;
    cursor:pointer;
    color:black;
    &:hover{
        color:#44adea;
    }
        
    `




  return (
    <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <NavLogo>
            <FaTooth/> DOCTORLI 
            </NavLogo>
            </Link>
            <Right>
           
            <Link to="/about" style={{ textDecoration: 'none' }}>
            <NavItem>
                About Us
            </NavItem>
            </Link>
            <NavItem>
                Contact Us
            </NavItem>
            </Right>
            
    </Container>
  )
}

export default Navbar