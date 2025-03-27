import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-base-100 text-slate-800">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <a
              href="#"
              className="text-slate-800 hover:text-slate-600 px-3 py-2 rounded-md text-lg font-semibold"
            >
              LaudromatCompany
            </a>

            <div className="relative sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 hover:text-slate-400 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a
                    href="#"
                    className="block px-4 py-2 text-slate-800 hover:bg-gray-100 rounded-md"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-slate-800 hover:bg-gray-100 rounded-md"
                  >
                    Service
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-slate-800 hover:bg-gray-100 rounded-md"
                  >
                    Account
                  </a>
                </div>
              )}
            </div>
            <div className="hidden sm:flex items-center space-x-5">
              <a
                href="#"
                className="text-slate-800 hover:text-slate-600 px-3 py-2 rounded-md text-lg"
              >
                About
              </a>
              <a
                href="#"
                className="text-slate-800 hover:text-slate-600 px-3 py-2 rounded-md text-lg"
              >
                Service
              </a>
              <a
                href="#"
                className="text-slate-800 hover:text-slate-600 px-3 py-2 rounded-md text-lg"
              >
                Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
