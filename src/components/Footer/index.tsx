import {
  FooterContainer,
  FooterLinkItem,
  FooterLinks,
  FooterSection,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterContainer>
      <div className="centralizer">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <FooterLinks>
            <li>
              <FooterLinkItem>RPG</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem>Ação</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem>Aventura</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem>Esportes</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem>Simulação</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem>Estratégia</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem>FPS</FooterLinkItem>
            </li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <FooterLinks>
            <li>
              <FooterLinkItem>Novidades</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem>Promoções</FooterLinkItem>
            </li>
            <li>
              <FooterLinkItem>Em breve</FooterLinkItem>
            </li>
          </FooterLinks>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados.</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
