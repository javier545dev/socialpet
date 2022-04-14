import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
  align-items: center;
  background: #fff;
  border-top: 1px solid #eaeaea;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #000;
  display : inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`