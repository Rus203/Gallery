import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { FaYoutube as YoutubeIcon } from 'react-icons/fa'
import { IoSettingsOutline as SettingsIcon } from 'react-icons/io5'
import { RiFeedbackLine as FeedbackIcon } from 'react-icons/ri'
import { FiHelpCircle as HelpIcon } from 'react-icons/fi'
import { AiOutlineHome as HomeIcon } from 'react-icons/ai'
import { MdOutlineSubscriptions as Subscriptions } from 'react-icons/md'

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  color: white;
  height: 100vh;
  font-size: 1.3em;
  font-weight: 500;
  top: 0;

  @media (max-width: 1023px) {
    position: ${({ isBurger }) => isBurger && 'absolute'};
    display: ${({ isBurger }) => isBurger ? 'block' : 'none'};
    z-index: 1;
    width: 100vw;
    font-size: 1.3em;
  }
  
  @media (min-width: 1024px) {
    position: sticky;
  }
  
`

const Wrapper = styled.div`
  padding: 20px 35px;

  @media (max-width: 1023px) {
    font-size: 1em;
    padding: 20px 15px;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  column-gap: 10px;
  font-size: 1.5em; 
  margin-bottom: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  padding: 8px;
  user-select: none;

  &:hover {
    color: yellow;
    scale: 1.1;
  }

  &:active {
    scale: 1.05;
  }
`

const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Menu = () => {
  const [isBurger, setBurger] = useState(false)
  return (
    <Container isBurger={isBurger} >
      <Wrapper>
        <ItemLink to="/">
          <Logo>
            <YoutubeIcon />
              Gallery
          </Logo>
        </ItemLink>
        <ItemLink to='home'>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </ItemLink>
        <ItemLink to='/subscriptions'>
          <Item>
            <Subscriptions />
            Subscriptions
          </Item>
        </ItemLink>
        <ItemLink to='/settings'>
          <Item>
            <SettingsIcon />
            Settings
          </Item>
        </ItemLink>
        <ItemLink to="/feedback">
          <Item>
            <FeedbackIcon />
            Feedback
          </Item>
        </ItemLink>
        <ItemLink to="/help">
          <Item>
            <HelpIcon />
            Help
        </Item>
        </ItemLink>
      </Wrapper>
    </Container>
  )
}

export default Menu
