import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  width: 100%;
  height: 56rem;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .centralizer {
    position: relative;
    padding-top: 34rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 3.2rem;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
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
