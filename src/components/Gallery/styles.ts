import styled from 'styled-components'
import { colors } from '../../styles'

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 1.6rem;

  img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 15rem;
    height: 15rem;
    object-fit: cover;
  }
`
