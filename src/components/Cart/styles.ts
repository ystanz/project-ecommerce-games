import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import close from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${colors.gray};
  z-index: 1;
  padding: 4rem 1.6rem 0 1.6rem;
  max-width: 36rem;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  color: ${colors.white};
  margin-bottom: 2.4rem;

  span {
    display: block;
    font-size: 1.2rem;
    color: ${colors.lightGray};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  color: ${colors.white};
  margin-top: 3.2rem;
  margin-bottom: 1.6rem;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 0.8rem 0;
  position: relative;

  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    margin-right: 2.4rem;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 1.6rem;
  }

  span {
    display: block;
    color: ${colors.white};
    font-weight: bold;
    font-size: 1.4rem;
  }

  ${TagContainer} {
    margin-right: 0.8rem;
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
  }

  button {
    background-image: url(${close});
    width: 1.6rem;
    height: 1.6rem;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 0.8rem;
    right: 0;
  }
`
