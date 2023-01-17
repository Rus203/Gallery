import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 260px;
`
const Image = styled.img`
  width: 100%;
  height: 150px;
  background-color: #999;
  border-radius: 15px;
`
const Card = () => {
  return (
    <Container>
      <Image
      src={require('../assets/images/background-image.jpg')}
      alt='image of a video'
      />
    </Container>
  )
}

export default Card
