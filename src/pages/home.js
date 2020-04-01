import React from 'react'

import Home from '../components/home'

import { ApplicationProvider } from '../components/home/context'
function HomePage() {
  return (
    <div>
      <ApplicationProvider>
        <Home />
      </ApplicationProvider>
    </div>
  )
}

export default HomePage
