import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  height: 200px;
  background-color: #eae9e9;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 14px;
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
  border-radius: 5px;
  height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  border: none;
  line-height: 30px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  column-gap: 7px;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 1.025;
  }
`

const SignUpButton = styled(Button)`
  background-color: #ecec34;
  color: black;
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in to Gallery</Title>
        <Input type='text' placeholder='Login' />
        <Input type='password' placeholder='Password' />
        <Buttons>
          <Button>Sign In</Button>
          <Link to='/signUp' style={{ textDecoration: 'none' }} >
            <SignUpButton>Sing Up</SignUpButton>
          </Link>
        </Buttons>
      </Wrapper>
    </Container>
  )
}

export default SignIn
