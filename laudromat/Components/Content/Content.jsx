import React from 'react'
import Card from './Card'

function Content() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 border-y border-gray-300 mt-10">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </>
  )
}

export default Content