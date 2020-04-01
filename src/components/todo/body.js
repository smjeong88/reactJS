import React from 'react'
import { useTodoContext } from './context'

// 한 줄에 여러개의 함수를 import 해오기 위해서 export 로 내보낸다.
// export 로 내보내면 import {xxx, xxx, xxx} from 'xxx'로 가져올 수 있다.
import { delelteTodo, getTodo, updateTodo } from './service'

function Body() {
  const {
    state,
    actions: { setTodos },
  } = useTodoContext()

  // 객체 분해 할당 연산자
  // ex) const { a, b } = useTodoContext()
  // useTodoContext()는 ./context 파일에 return useContext(Context)를 return 하고 있고
  // a, b는 <Context.Provider value={{a,b}}></Context.Provider> 의 형태로 값을 가지고 있고
  const { filterdTodos } = state

  const handleDeleteTodo = async (id) => {
    const success = await delelteTodo(id)

    if (success) {
      setTodos(await getTodo())
    } else {
      window.alert(`${id}삭제에 실패 했습니다. 다시 시도해주세요.`)
    }
  }

  const handleUpdateStatus = async (todo) => {
    const success = await updateTodo({ ...todo, isDone: !todo.isDone })
    if (success) {
      setTodos(await getTodo())
    } else {
      window.alert(
        `${todo.id}업데이트에 실패했습니다. 잠시 후 다시 시도해주세요.`,
      )
    }
  }

  // {todos.map(({ id, title, isDone }, idx) => () : 바로 return
  // {todos.map(({ id, title, isDone }, idx) => {} : 객체 return
  return (
    <div>
      [BODY]
      {filterdTodos.map((todo, idx) => {
        const { id, title, isDone } = todo
        return (
          <div key={idx}>
            <input
              type="checkbox"
              checked={isDone}
              value={isDone}
              onChange={() => handleUpdateStatus(todo)}
            ></input>
            <span>{title}</span>
            <button onClick={() => handleDeleteTodo(id)}>삭제</button>
          </div>
        )
      })}
    </div>
  )
}

export default Body
