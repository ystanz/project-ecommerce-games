import { Image, Prices, Title } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="centralizer">
        <Tag size={'big'}>Destaque do dia</Tag>
        <div>
          <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
          <Prices>
            <span>De R$ 250,00</span> <br />
            por apenas R$ 99,90
          </Prices>
        </div>
        <Button
          type="link"
          to="/product"
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
