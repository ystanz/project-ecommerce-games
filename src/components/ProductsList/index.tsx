import Product from '../Product'
import { List, ProductsListContainer } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}
const ProductsList = ({ background, title }: Props) => {
  return (
    <ProductsListContainer>
      <div className="centralizer">
        <h2>{title}</h2>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </ProductsListContainer>
  )
}

export default ProductsList
