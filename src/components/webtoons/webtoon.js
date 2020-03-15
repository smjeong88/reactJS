import React from 'react'
import styled from 'styled-components'
import { Container } from '../../design-system/container'
import { Text } from '../../design-system/text'
import PropsTypes from 'prop-types'

const Image = styled.img``
const Badge = steyld.span``

function Webtoon({ source }) {
  const { title, src, updated } = source

  return (
    <Container textAlign="center">
      <Image src={src} />
      <Text bold margin="10px 0 10px 0">
        {title}
      </Text>
      {updated && <Text>뱃지</Text>}
    </Container>
  )
}

Webtoon.propTypes = {
  source: PropsTypes.object,
}

export default Webtoon
