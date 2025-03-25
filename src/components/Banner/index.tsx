import { Image, Prices, Title } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="centralizer">
        <Tag size={'big'}>Destaque do dia</Tag>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          <span>De R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
    </Image>
  )
}

export default Banner
