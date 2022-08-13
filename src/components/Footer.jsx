import React from 'react'
import styled from 'styled-components'

const Footer = () => {

const Container = styled.div`
    background-color:#000;
    height: 30px;
    width:100%;
    margin-top: 3%;
`
const Desc = styled.p`
    color: grey;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
   

`

  return (
    <Container>
        <Desc>
           Developed by Edgar Briandt © 2022
        </Desc>

    </Container>
  )
}

export default Footer