import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  width: 100%;
  height: 56rem;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .centralizer {
    position: relative;
    padding-top: 34rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 3.2rem;
  }
`

export const Title = styled.h2`
  font-size: 3.6rem;
  max-width: 45rem;
`

export const Prices = styled.p`
  font-size: 2.4rem;
  margin-top: 2.4rem;

  span {
    text-decoration: line-through;
  }
`
