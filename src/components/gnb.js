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
    label: '홈',
  },
  {
    path: '/webtoon',
    label: ' 웹툰',
  },
  {
    path: '/pokemon',
    label: ' 포켓몬',
  },
  {
    path: '/todo',
    label: ' Todo',
  },
  {
    path: '/practice',
    label: ' 연습',
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
  label: PropTypes.string,
  path: PropTypes.string,
}

export default Gnb
