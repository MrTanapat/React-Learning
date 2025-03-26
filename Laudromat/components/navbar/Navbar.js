import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="block w-full max-w-screen-full px-4 py-3 mx-auto bg-base-100 shadow-md lg:px-8 lg:py-3">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <a href="#" className='mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold'>Laundromat Company</a>
          <div className="hidden lg:block">
            <ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
              <li className='flex items-center p-1 text-sm gap-x-2 text-slate-800'>
                <a href="#" className='flex items-center'>About</a>
              </li>

              <li className='flex items-center p-1 text-sm gap-x-2 text-slate-800'>
                <a href="#" className='flex items-center'>Service</a>
              </li>

              <li className='flex items-center p-1 text-sm gap-x-2 text-slate-800'>
                <a href="#" className='flex items-center'>Account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;