import Tag from '../Tag'
import { Card, Description, Title } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.co/222x250" alt="" />
      <Title>Nome do Jogo</Title>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eum
        maiores odit provident aut eaque iusto iste voluptatum necessitatibus
        dolores quo repellat suscipit, expedita sint reprehenderit voluptate
        quod? Fuga, error!
      </Description>
    </Card>
  )
}

export default Product
