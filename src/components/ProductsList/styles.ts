import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const ProductsListContainer = styled.section<
  Omit<Props, 'title' | 'games'>
>`
  padding: 3.2rem 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.4rem;
  margin-top: 4rem;
`

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`
