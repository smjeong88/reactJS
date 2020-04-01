// pokemon의 뷰 역할을 하는 파일
import React, { useState } from 'react'

import { Container, Text } from '../../design-system'
import Detail from './detail'
import List from './list'

function Pokemon() {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const handleSelectedPokemon = (pokemon) => {
    setSelectedPokemon(pokemon)
  }

  return (
    <Container>
      <Detail />
      <List />
    </Container>
  )
}

export default Pokemon
