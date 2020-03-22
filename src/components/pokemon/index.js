import React, { useState } from 'react'

import { Container, Text } from '../../design-system'
import Detail from './detail'
import List from './list'

function Pokemon() {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const handleSelectedPokemon = (pokemon) => {
    setSelectedPokemon(pokemon)
  }

  console.log('selectedPokemon', selectedPokemon)
  return (
    <Container>
      <Detail />
      <List />
    </Container>
  )
}

export default Pokemon
