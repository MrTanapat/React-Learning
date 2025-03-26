import React from 'react'
import CarImg from '../../public/car.png'

function Carousel() {
  return (
    <div>
        <div className="h-auto mt-5 px-10">
            <img src={CarImg} alt="Carousel image" className='w-full h-64 rounded-lg object-cover shadow-md' />
        </div>
    </div>
  )
}

export default Carousel