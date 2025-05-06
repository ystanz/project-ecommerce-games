import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 3.2rem 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    max-width: 64rem;
  }
`

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 4rem;
`
