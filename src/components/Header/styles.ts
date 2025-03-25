import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 2.4rem;
  border-radius: 1.6rem;
  margin-bottom: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 4rem;
`

export const LinksItem = styled.li`
  margin-right: 1.6rem;
`

export const LinksCart = styled.a`
  display: flex;

  img {
    margin-left: 1.6rem;
  }
`
