import React from 'react'
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
  font-size: 20px;
  color: white;
  font-weight: 500;
  position: sticky;
  top: 0;
`

const Wrapper = styled.div`
  padding: 20px 35px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  column-gap: 5px;
  font-size: 24px;
  margin-bottom: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  padding: 8px;
  cursor: pointer;

  &:hover {
    color: yellow;
    scale: 1.1;
  }

  &:active {
    scale: 1.05;
  }
`

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <YoutubeIcon />
              RusTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <Subscriptions />
          Subscriptions
        </Item>
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <FeedbackIcon />
          Feedback
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
