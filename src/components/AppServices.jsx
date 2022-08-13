import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setServiceName } from "../redux/actions/doctorListAction";

const AppServices = ({item}) => {

    const Container = styled.div`
 
  line-height: 100%;
  margin: 5px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  `
  const Wrapper = styled.div`
   border: 2px solid #e7e7e7;
   flex:1;
   border-radius: 5px;
  
  `

  const Title = styled.h2`
    display: flex;
    letter-spacing: 1px;
    margin:5%;
  `

  const Time = styled.h6`
   display: flex;
   margin:5%;
   color: #6a6767;
  `

const Button = styled.button`
align-items: center;
border:none;
margin:5%;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
background-color: #bb0f06;
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
  const dispatch = useDispatch();
  const saveService = () => {
    dispatch(setServiceName(item));
  };
 
  return (
    <Container>
      <Wrapper>
       <Title>{item.heading}</Title>
       <Time>{item.schedule}</Time>
       <Link onClick={saveService} to="/form">
       <Button>Book Appointment</Button>
       </Link>
       </Wrapper>
    </Container>
  )
}

export default AppServices