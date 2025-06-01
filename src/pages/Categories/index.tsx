import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'

import residentImage from '../../assets/images/resident.png'
import diabloImage from '../../assets/images/diablo.png'
import zeldaImage from '../../assets/images/zelda.png'
import starWarsImage from '../../assets/images/star_wars.png'
import { Game } from '../Home'

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game>([])
  const [sportsGames, setSportsGames] = useState<Game>([])
  const [simulationGames, setSimulationGames] = useState<Game>([])
  const [fightGames, setFightGames] = useState<Game>([])
  const [RPGGames, setRPGGames] = useState<Game>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportsGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulationGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRPGGames(res))
  }, [])

  return (
    <>
      <ProductsList games={actionGames} title="Ação" background="black" />
      <ProductsList games={sportsGames} title="Esportes" background="gray" />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
      />
      <ProductsList games={fightGames} title="Luta" background="gray" />
      <ProductsList games={RPGGames} title="RPG" background="black" />
    </>
  )
}

export default Categories
