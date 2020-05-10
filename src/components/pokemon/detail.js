// list.js에서 포켓몬을 선택하면 한 개의 포켓몬 정보를 가져오는 파일
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Text } from '../../design-system'
import { usePokemonContext } from './context'

function Detail() {
  const { pokemon } = usePokemonContext()
  if (!pokemon) {
    return null
  }
  const {
    weight,
    height,
    sprites: { front_default, back_default, front_shiny, back_shiny },
  } = pokemon
  return (
    <Container display="inline-block" width="400">
      <Container>
        <img src={front_default}></img>
      </Container>
      <Container>
        <img src={back_default}></img>
      </Container>
      <Container>
        <img src={front_shiny}></img>
      </Container>
      <Container>
        <img src={back_shiny}></img>
      </Container>
      <Text>
        <span>몸무게:{weight}</span>
        <span>키:{height}</span>
      </Text>
    </Container>
  )
}

export default Detail
