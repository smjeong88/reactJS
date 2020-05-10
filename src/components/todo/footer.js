import React from 'react'

import { FILTERS } from './constants'
import { useTodoContext } from './context'

function Footer() {
  const {
    state: { filter },
    actions: { setFilter },
  } = useTodoContext()

  const handleFilter = (filter) => {
    setFilter(filter)
  }
  return (
    <div>
      {FILTERS.map((type, idx) => (
        <div
          key={idx}
          onClick={() => handleFilter(type)}
          style={{ fontWeight: type === filter ? 'bold' : 'normal' }}
        >
          {type}
        </div>
      ))}
    </div>
  )
}

export default Footer
