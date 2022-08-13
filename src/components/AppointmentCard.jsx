import React from 'react'
import styled from 'styled-components'
import AppServices from './AppServices';
import data from '../utils/data'

const AppointmentCard = () => {

const Container = styled.div`
padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`


  return (
    <Container>
       {data.map((item) => (
        <AppServices item={item} key={item.id} />
      ))}

    </Container>
  )
}

export default AppointmentCard