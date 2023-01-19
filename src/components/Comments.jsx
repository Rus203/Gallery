import React from 'react'
import styled from 'styled-components'

import Comment from './Comment'

const Container = styled.div``
const NewComment = styled.div`
  display: flex;
  column-gap: 15px;
  width: 100%;
  margin: 20px 0;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 15px;
`
const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-bottom: 1px solid #b3b2b2;
  background-color: inherit;
  transition: all  .6s linear;

  &:focus {
    border-bottom: 1px solid black;
  }
`

const Button = styled.button`
  border-radius: 20px;
  height: 40px;
  background-color: #F0EDED;
  padding: 5px 15px;
  border: none;
  line-height: 30px;
  font-size: 1em;
  display: flex;
  align-items: center;
  column-gap: 7px;
  cursor: pointer;
`

const CommentButton = styled(Button)`
  background-color: #1515e1;
  color: white;

  &:hover {
    background-color: #0653b8;
  }

  &:active {
    background-color: #327ad8;
  }
`

const CancelButton = styled(Button)`
  background-color: transparent;

  &:hover {
    background-color: #e5e5e5;
  }

  &:active {
    background-color: #dbdbdb;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 15px;
  margin-top: 15px;
`

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar
          src={require('../assets/images/channel-image.jpg')}
          alt='avatar image'
          />
        <Details>
          <Name>Pickachu</Name>
          <div >
            <Input type="text" />
            <Buttons>
              <CancelButton>Cancel</CancelButton>
              <CommentButton>Comment</CommentButton>
            </Buttons>
          </div>

        </Details>
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}

export default Comments
