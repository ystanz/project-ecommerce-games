import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: fightGames } = useGetSimulationGamesQuery()
  const { data: simulationGames } = useGetFightGamesQuery()
  const { data: RPGGames } = useGetRPGGamesQuery()

  if (actionGames && sportsGames && fightGames && simulationGames && RPGGames) {
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
  return <h4>Carregando</h4>
}

export default Categories
