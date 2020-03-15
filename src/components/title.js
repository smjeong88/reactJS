import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleContainer = styled.div`
  font-size: 31px;
  font-weight: bold;
  padding: 20px 10px;
  border-bottom: 1px solid #efefef;
`

function Title({ text }) {
  //const [title, setTitle] = useState('리액트공부') //state

  return <TitleContainer>{text}</TitleContainer>
}

Title.propTypes = {
  text: PropTypes.string,
}

export default Title
