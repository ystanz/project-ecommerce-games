import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.gray};
  padding: 0.8rem;
  border-radius: 0.8rem;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  display: block;
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;
`

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
  display: block;
  margin-top: 1.6rem;
`

export const Infos = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`
