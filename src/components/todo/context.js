// 패키지나 사용자 컴포넌트에서 export default로 내보낸 경우 import 할 때 import xxx from 'xxx'
// Hook 내장 함수나 사용자 컴포넌트에서 export 로 내보낸 경우 import 할 때 import {xxx, xxx} from 'xxx'

import React, {
  useEffect,
  useReducer,
  useMemo,
  createContext,
  useContext,
  useState,
} from 'react'
import PropType from 'prop-types'
import FILTERS from './constants'

const Context = createContext()

const ACTION_TYPES = {
  SET_TODOS: 'SET_TODOS',
  SET_FILTER: 'SET_FILTER',
}

// reducer : 하나의 ACTION으로 여러가지 값을 변경할 수 있어서 랜더링을 줄일 수 있다.
function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_TODOS: {
      //가져온 todos를 store에 저장한다.
      const todos = action.payload

      return {
        // 전개 연산자
        ...state,
        todos,
        filterdTodos: mapToFilter(todos, state.filter),
      }
    }

    case ACTION_TYPES.SET_FILTER: {
      const filter = action.payload

      return {
        ...state,
        filter,
        filterdTodos: mapToFilter(state.todos, filter),
      }
    }
    default: {
      return state
    }
  }
}
export function TodoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    todos: [], //원본
    filterdTodos: [], //필터링된 리스트
    filter: FILTERS[0], //필터
  })

  const actions = {
    setTodos: (payload) => dispatch({ type: ACTION_TYPES.SET_TODOS, payload }),
    setFilter: (payload) =>
      dispatch({ type: ACTION_TYPES.SET_FILTER, payload }),
  }

  return (
    <Context.Provider
      value={{
        state,
        actions,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useTodoContext() {
  return useContext(Context)
}

TodoContextProvider.propTypes = {
  children: PropType.element,
}

function mapToFilter(todos, filter) {
  //원본, 선택된 필터
  switch (filter) {
    case FILTERS[0]: {
      //ALL
      return todos
    }
    case FILTERS[1]: {
      //DOING
      return todos.filter((todo) => !todo.isDone)
    }
    case FILTERS[2]: {
      //DONE
      return todos.filter((todo) => todo.isDone)
    }
  }
}
