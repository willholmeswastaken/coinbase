import React from 'react'
import Portfolio from './Portfolio'
import Promos from './Promos'

const Main = () => {
  return (
    <div className="flex max-h-[calc(100vh-64px)] overflow-auto">
      <Portfolio />
      <Promos />
    </div>
  )
}

export default Main
