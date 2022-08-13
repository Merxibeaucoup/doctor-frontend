import React, { useState } from 'react'
import AppointmentCard from '../components/AppointmentCard';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'



const Booking = () => {
  const [date, setDate] = useState(new Date());
  const changeDate = (e) => {
    setDate(e)
  }
  

  const Container = styled.div`
   width: 100vw;
        height: 100vh;
       
    
  `

  const Wrapper = styled.div`
     display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
  `
  const Heading = styled.h2`
  margin:2%;
  font-weight:400;

    
  `
 const Left = styled.div`
  flex:1;
 `

  const Move = styled.div`
    margin:10%;
  `
  const Right = styled.div`
    flex:1;
  `
  

const Photo = styled.img`
margin:5%;
width: 80%;
height: 100%;

`
  return (
    <Container>
      <Navbar/>
      <Wrapper>
      <Left>
      <Move>
      <Calendar
      
      value={date}
      onChange={changeDate}
      
      />
     
      </Move>
      </Left>
      <Right>
      <Photo src="/img/brush.jpg"/>
      </Right>
      </Wrapper>
      <Heading>Available Services on : <span style={{color:'#bb0f06'}}>{moment(date).format('dddd MMMM Do YYYY')}</span> </Heading>
        <AppointmentCard/>
        <Footer/>
      
    </Container>
  )
}

export default Booking