import React, { useReducer, useMemo } from 'react'
import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
const Context = createContext()

const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return {
        count: state.count + 1,
      }
    }
    case ACTION_TYPES.DECREMENT: {
      return {
        count: state.count - 1,
      }
    }
    default: {
      return state
    }
  }
}

export function ApplicationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  })

  const actions = useMemo(
    () => ({
      increment: () => dispatch({ type: ACTION_TYPES.INCREMENT }),
      decrement: () => dispatch({ type: ACTION_TYPES.DECREMENT }),
    }),
    [dispatch],
  )

  return (
    <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
  )
}

export function useApplicationContext() {
  return useContext(Context)
}

ApplicationProvider.propTypes = {
  children: PropTypes.element,
}
