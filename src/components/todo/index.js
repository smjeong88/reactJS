import React, { useEffect } from 'react'

import Header from './header'
import Body from './body'
import Footer from './footer'
import { getTodo } from './service'
import { useTodoContext } from './context'

function Todo() {
  const {
    actions: { setTodos },
  } = useTodoContext()

  useEffect(() => {
    async function initalizeTodos() {
      setTodos(await getTodo())
    }
    initalizeTodos()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}

export default Todo
