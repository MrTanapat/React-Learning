import React from 'react'
import CarImg from '../../public/car.png'

function Carousel() {
  return (
    <div>
        <div className="h-auto">
            <img src={CarImg} alt="Carousel image" className='w-full h-64 object-cover'/>
        </div>
    </div>
  )
}

export default Carousel