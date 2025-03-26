import Game from '../../models/Game'
import Product from '../Product'
import { List, ProductsListContainer } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}
const ProductsList = ({ background, title, games }: Props) => {
  return (
    <ProductsListContainer background={background}>
      <div className="centralizer">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              title={game.title}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
            />
          ))}
        </List>
      </div>
    </ProductsListContainer>
  )
}

export default ProductsList
