import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import { Item, Items } from './styles'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <Items>
        <Item>
          <img src={zelda} alt="Imagem do Link" />
        </Item>
        <Item>
          <img src={zelda} alt="Imagem do Link" />
        </Item>
        <Item>
          <img src={zelda} alt="Imagem do Link" />
        </Item>
        <Item>
          <img src={zelda} alt="Imagem do Link" />
        </Item>
      </Items>
    </Section>
  )
}

export default Gallery
