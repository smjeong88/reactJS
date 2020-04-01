// GET,POST,DELETE,PUT

// GET = 가져올 때
// POST = 값을 서버로 요청 할 때
// DELETE = 삭제
// PUT = 수정

export async function getTodo() {
  const response = await fetch('http://localhost:8000/todos')
  if (!response.ok) {
    return []
  }

  return response.json()
}

export async function insertTodo(payload) {
  const response = await fetch('http://localhost:8000/todos/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

export async function updateTodo(payload) {
  const response = await fetch(`http://localhost:8000/todos/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

export async function delelteTodo(id) {
  const response = await fetch(`http://localhost:8000/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.ok
}
