import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  column-gap: 15px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  margin-bottom: 20px;
`

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  `

const Text = styled.span`
  font-size: 14px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src={require('../assets/images/channel-image.jpg')} />
      <Details>
        <Name>Pickachu <Date>1 year ago</Date></Name>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          sapiente animi architecto cum dignissimos, nam nisi.</Text>
      </Details>
    </Container>
  )
}

export default Comment
