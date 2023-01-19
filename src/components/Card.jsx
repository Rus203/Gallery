import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: ${({ type }) => type !== 'sm' && '230px'};
  cursor: pointer;
  color: black;
  display: ${({ type }) => type === 'sm' && 'flex'};
  margin-bottom: ${({ type }) => type === 'sm' && '10px'};
  gap: 10px;
`

const Image = styled.img`
  width: 230px;
  height: ${({ type }) => type === 'sm' ? '80px' : '130px'};
  background-color: #999;
  border-radius: 15px;
  flex: 1;

  @media (max-width: 767px) {
    height: ${({ type }) => type === 'sm' ? '130px' : '130px'};
    flex: 0.5;
  }
`

const Details = styled.div`
  display: flex;
  gap: 12px;
  margin-top: ${({ type }) => type !== 'sm' && '15px'};
  flex: 1;

  @media (max-width: 1023px) {
    font-size: 13px;
  }
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  background-color: #ccc;
  border-radius: 50%;
  display: ${({ type }) => type === 'sm' && 'none'};
`

const Text = styled.div``
const Title = styled.h1`
  font-size: 1em;
  font-weight: 500;
  margin: 0;
  `

const ChanelName = styled.h2`
  font-size: 14px;
  font-size: 0.85em;
  margin: 5px 0;
`
const Info = styled.div`
  font-size: 0.8em;
  color: "#f5f5f5";
`
const Card = ({ type }) => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image
        type={type}
        src={require('../assets/images/background-image.jpg')}
        alt='image of a video'
        />
        <Details type={type} >
          <ChannelImage
            type={type}
            src={require('../assets/images/channel-image.jpg')}
            alt='channel image'
            />
          <Text>
            <Title>Test video</Title>
            <ChanelName>The cat in boots</ChanelName>
            <Info>100,528K views · a day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  )
}

Card.propTypes = {
  type: PropTypes.string
}

export default Card
