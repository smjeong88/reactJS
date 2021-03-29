import React, { useEffect } from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'
import { getTodo } from './service'
import { useTodoContext } from './context'
import { Container } from '../../design-system/container'

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
    <Container textAlign="center">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </Container>
  )
}

export default Todo
