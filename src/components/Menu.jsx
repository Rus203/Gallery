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
  column-gap: 10px;
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
  return (
    <Container>
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
