import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { Container, Text } from '../../design-system'
import { fetchPokemons, fetchPokemon } from './service'
import { usePokemonContext } from './context'

const ListFrame = styled(Container)``

function List({ onClick }) {
  const [pokemons, setPokemons] = useState([])
  const { setPokemon } = usePokemonContext()
  useEffect(() => {
    async function fetchAndSetPoketmons() {
      setPokemons(await fetchPokemons())
    }
    fetchAndSetPoketmons()
  }, [])

  const handleClickPokemon = async (url) => {
    setPokemon(await fetchPokemon(url))
  }

  return (
    <ListFrame display="inline-block" width="250">
      {pokemons.map(({ name, url }, idx) => (
        <Text key={idx} onClick={() => handleClickPokemon(url)}>
          {name}
        </Text>
      ))}
    </ListFrame>
  )
}

List.propTypes = {
  onClick: PropType.func,
}
export default List
