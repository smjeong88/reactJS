// 포켓몬의 리스트를 불러오는 파일
// 동작을 행하고 ./service.js에서 데이터를 가져오는 파일
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

// ListFrame 안에서 가져다 쓰기위해 import
import { Container, Text } from '../../design-system'

// list.js에서 데이터를 뿌려주기 위해 fetchPokemons
// 사용자가 클릭한 값을 알기 위해 fetchPokemon
import { fetchPokemons, fetchPokemon } from './service'

// contextAPI 에서 포켓몬 값을 가져오기 위해
import { usePokemonContext } from './context'

// ListFrame을 생성하되 Container의 design-system을 상속받아서 가져온다.
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
