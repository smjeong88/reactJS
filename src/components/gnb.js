import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Text, Container } from '../design-system'

const GnbContainer = styled(Container)`
  border-bottom: 1px solid #efefef;
`

const LINKS = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/webtoon',
    label: 'webtoon',
  },
  {
    path: '/pokemon',
    label: 'pokemon',
  },
]

function Gnb({ title }) {
  //   const [title, setTitle] = useState('리액트 공부')

  return (
    <GnbContainer padding="20px 10px">
      <Text fontSize="31" bold>
        {title}
      </Text>
      {LINKS.map(({ label, path }, idx) => (
        <Link key={idx} to={path}>
          {label}
        </Link>
      ))}
    </GnbContainer>
  )
}

Gnb.propTypes = {
  title: PropTypes.string,
}

export default Gnb
