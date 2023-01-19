import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import {
  MdOutlineAccountCircle as AccountCircleIcon,
  MdOutlineSearch as SearchIcon
} from 'react-icons/md'

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  font-size: 28px;
  background-color: white;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 35px;
  justify-content: flex-end;
  position: relative;
`

const Search = styled.div`
  margin: auto;
  position: absolute;
  left:0;
  right: 0;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 5px 15px;
  border-radius: 20px;
`

const Input = styled.input`
  border: none;
  width: 95%;
  outline: none;
  font-size: 17px;
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 17px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchIcon />
        </Search>
        <Link to='signIn' style={{ textDecoration: 'none' }}>
          <Button>
            <AccountCircleIcon />
              Sign in
          </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar
