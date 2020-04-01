//ContextAPI js 파일
import React, { createContext, useContext, useState } from 'react'
import { fdatasyncSync } from 'fs'
import PropTypes from 'prop-types'
const Context = createContext()

export function PokemonContextProvider({ children }) {
  const [pokemon, setPokemon] = useState(null)

  return (
    <Context.Provider value={{ pokemon, setPokemon }}>
      {children}
    </Context.Provider>
  )
}

export function usePokemonContext() {
  return useContext(Context)
}

PokemonContextProvider.propTypes = {
  children: PropTypes.element,
}
