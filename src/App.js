import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Video from './pages/Video'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: #f9f9f9;
`

const Wrapper = styled.div`
padding: 20px 35px;
`

function App () {
  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='video'>
                  <Route path=':id' element={<Video />}/>
                </Route>
                <Route path='signUp' element={<SignUp />} />
                <Route path='signIn' element={<SignIn />} />
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  )
}

export default App
