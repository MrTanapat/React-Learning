// import { useEffect, useState } from "react";

import React from "react";
function Card() {
  return (
    <div>
      <div className="relative flex flex-col my-5 bg-white shadow-sm border border-slate-800 rounded-lg w-64">
        <div className="relative h-48 m-1.5 overflow-hidden text-white rounded-md">
          <img
            src="https://picsum.photos/200/300?random=1"
            className="w-full h-52 object-cover rounded-lg shadow-md"
            alt="card-image"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            Website Review Check
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            illo.
          </p>
        </div>
        <div className="flex justify-center p-6 pt-2 gap-7">
          <button
            type="button"
            class="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
