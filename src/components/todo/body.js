import React from 'react'
import { useTodoContext } from './context'
import { delelteTodo, getTodo, updateTodo } from './service'

function Body() {
  const {
    state,
    actions: { setTodos },
  } = useTodoContext()
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
