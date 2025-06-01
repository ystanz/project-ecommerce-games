import { useEffect, useState } from 'react'

import { Image, Prices, Title } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'

import { priceFormat } from '../ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'
const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="centralizer">
        <Tag size={'big'}>Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{priceFormat(game.prices.old)}</span> <br />
            por apenas {priceFormat(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
