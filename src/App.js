import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Index from './pages/Index'
import Video from './pages/Video'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Feedback from './pages/Feedback'
import Help from './pages/Help'
import Home from './pages/Home'
import Subscriptions from './pages/Subscriptions'
import Settings from './pages/Settings'
import Whoops from './pages/Whoops'

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  
  @media (min-width: 1440px) {
    max-width: 1440px;
    width: 100%
  }
`

const Main = styled.div`
  flex: 7;
  background-color: #f9f9f9;  
`

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 25px;
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
                <Route index element={<Index/>} />
                <Route path='video'>
                  <Route path=':id' element={<Video />}/>
                </Route>
                <Route path='signUp' element={<SignUp />} />
                <Route path='signIn' element={<SignIn />} />
                <Route path='help' element={<Help />} />
                <Route path='home' element={<Home />} />
                <Route path='feedback'element={<Feedback />} />
                <Route path='subscriptions' element={<Subscriptions />} />
                <Route path='settings' element={<Settings /> } />
                <Route path='/*' element={<Whoops /> } />
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  )
}

export default App
