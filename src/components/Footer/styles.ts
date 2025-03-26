import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.gray};
  padding: 3.2rem 0;
  font-size: 1.4rem;
`

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: bold;
`

export const FooterLinks = styled.ul`
  display: flex;
`

export const FooterLinkItem = styled.a`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 0.8rem;
  margin-top: 1.6rem;
  cursor: pointer;
`
export const FooterSection = styled.div`
  margin-bottom: 6.4rem;
`
