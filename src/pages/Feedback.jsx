import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Title = styled.h2`
  font-size: 21px;
  margin-bottom: 25px;
  font-weight: 500;

  @media (max-width: 1439px) {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 325px) {
    font-size: 13px;
  }
`

const Form = styled.form``
const TextArea = styled.textarea`
  resize: none;
  width: 70%;
  height: calc(50vh - 150px);
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: transparent;
  overflow: auto;
  font-family: 'Roboto', sans-serif;
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
`

const Button = styled.button`
  border-radius: 5px;
  height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  border: none;
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 1.025;
  }
`

const SubmitButton = styled(Button)``
const ResetButton = styled(Button)`
  background-color: transparent;
  color: black;
  
  &:hover {
    outline: 1px solid #343434;
  }
`

const resetForm = e => {
  console.log(e.target)
}

const sendData = (e) => {
  e.preventDefault()
  console.log('send')
}

const Feedback = () => {
  return (
    <Container>
        <Title>Please, share us your emotions about this application.
          We will be looking forward you suggestions</Title>
          <Form onReset={resetForm} >
            <TextArea
              id="story"
              name="story"
              autoComplete="off"
              maxLength={1500}
              spellCheck='true'
              placeholder='Tell us your story'
              required
              />
            <Buttons>
              <ResetButton type='reset'>Reset</ResetButton>
              <SubmitButton type='submit'>Submit</SubmitButton>
            </Buttons>
          </Form>
    </Container>
  )
}

export default Feedback
