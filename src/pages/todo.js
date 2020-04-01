import React, { createContext } from 'react'

// design-system import
import { Container } from '../design-system/container'
import { Text } from '../design-system/text'

// header, body, footer 를 종합한 /toto/index.js 파일을 import
import Todo from '../components/todo'

import { TodoContextProvider } from '../components/todo/context'

function TodoPage() {
  return (
    <TodoContextProvider>
      <Container>
        <Text>
          <Todo />
        </Text>
      </Container>
    </TodoContextProvider>
  )
}

export default TodoPage
