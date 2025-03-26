// import { useEffect, useState } from "react";

import React from 'react'

function Card() {
  return (
    <div>
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-800 rounded-lg w-64">
            <div className="relative h-48 m-1.5 overflow-hidden text-white rounded-md">
            <img src="https://picsum.photos/200/300?random=1" className="w-full h-52 object-cover rounded-lg shadow-md" alt="card-image" />
            </div>
            <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">Website Review Check</h6>
                    <p className="text-slate-600 leading-normal font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illo.
                </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
                <button type="button" className="rounded-md bg-green-600 py-2 px-4 border border-transparent-all text-sm text-white shadow-md hover:shadow-lg
                 focus:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">Read more</button>
            </div>
        </div>
    </div>
  )
}

export default Card