import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(60vh - 56px);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 40px;
  gap: 10px;
  border: 1px solid gray;
  height: 220px;
  background-color: #eae9e9;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  padding: 5px 10px;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 26px;
  margin: 0 5px;
`

const Button = styled.button`
  align-self: flex-start;
  border-radius: 5px;
  height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  border: none;
  line-height: 30px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  column-gap: 7px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 1.025;
  }
`

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign up on Gallery</Title>
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Login' />
        <Input type='password' placeholder='Password' />
        <Button>Sign Up</Button>
      </Wrapper>
    </Container>
  )
}

export default SignUp
