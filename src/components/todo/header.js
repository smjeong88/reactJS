import React, { useState } from 'react'

import { insertTodo, getTodo } from './service'
import { useTodoContext } from './context'

function Header() {
  const [text, setText] = useState('')
  const {
    actions: { setTodos },
  } = useTodoContext()

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleEnter = async (event) => {
    if (event.keyCode === 13) {
      console.log('enter', text)
      const success = await insertTodo({
        title: text,
        isDone: false,
      })

      if (success) {
        setTodos(await getTodo())
        setText('')
      } else {
        window.alert('데이터를 추가하는데 실패했습니다.')
      }
    }
  }
  return (
    <div>
      <div>[HEADER]</div>
      <div>
        <input
          onChange={handleText}
          onKeyDown={handleEnter}
          placeholder="Todo를 입력하세요"
          value={text}
        />
      </div>
    </div>
  )
}

export default Header
