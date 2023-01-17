import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 250px;
  cursor: pointer;
  color: black;
`

const Image = styled.img`
  width: 100%;
  height: 150px;
  background-color: #999;
  border-radius: 15px;
`

const Details = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 15px;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  background-color: #ccc;
  border-radius: 50%;
`

const Text = styled.div``
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  `

const ChanelName = styled.h2`
  font-size: 14px;
  margin: 5px 0;
`
const Info = styled.div`
  font-size: 14px;
  color: "#f5f5f5";
`
const Card = () => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none' }}>
      <Container>
        <Image
        src={require('../assets/images/background-image.jpg')}
        alt='image of a video'
        />
        <Details>
          <ChannelImage
            src={require('../assets/images/channel-image.jpg')}
            alt='channel image'
            />
          <Text>
            <Title>Test video</Title>
            <ChanelName>The cat in boots</ChanelName>
            <Info>100,528K views · a day</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  )
}

export default Card
