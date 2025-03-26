import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinksCart, LinksItem } from './styles'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <img src={logo} alt="Logo da loja EPlay" />
        <nav>
          <Links>
            <LinksItem>
              <Link to="/categories">Categorias</Link>
            </LinksItem>
            <LinksItem>
              <a href="#">Novidades</a>
            </LinksItem>
            <LinksItem>
              <a href="#">Promoções</a>
            </LinksItem>
          </Links>
        </nav>
      </div>
      <LinksCart href="#">
        0 - produto(s)
        <img src={cartIcon} alt="Ícone de carrinho de compras" />
      </LinksCart>
    </HeaderBar>
  )
}

export default Header
