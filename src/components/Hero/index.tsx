import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { priceFormat } from '../ProductsList'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="centralizer">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {priceFormat(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {priceFormat(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
