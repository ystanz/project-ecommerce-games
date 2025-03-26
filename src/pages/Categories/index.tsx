import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import residentImage from '../../assets/images/resident.png'
import diabloImage from '../../assets/images/diablo.png'
import zeldaImage from '../../assets/images/zelda.png'
import starWarsImage from '../../assets/images/star_wars.png'

const promotions: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: residentImage,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: residentImage,
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 3,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: residentImage,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 4,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: residentImage,
    infos: ['10%', 'R$ 250,00']
  }
]

const soon: Game[] = [
  {
    id: 5,
    title: 'Diablo 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diabloImage,
    infos: ['17/05']
  },
  {
    id: 6,
    title: 'Zelda',
    category: 'Ação',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: zeldaImage,
    infos: ['17/05']
  },
  {
    id: 7,
    title: 'Star Wars',
    category: 'Ação',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: starWarsImage,
    infos: ['17/05']
  },
  {
    id: 8,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Nintendo Switch',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: residentImage,
    infos: ['17/05']
  }
]

const Categories = () => {
  return (
    <>
      <ProductsList games={promotions} title="RPG" background="gray" />
      <ProductsList games={soon} title="Ação" background="black" />
      <ProductsList games={promotions} title="Aventura" background="gray" />
      <ProductsList games={soon} title="FPS" background="black" />
    </>
  )
}

export default Categories
