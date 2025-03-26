import React from "react";

function Footer() {
  return (
    <div>
      <footer class="w-full bg-slate-800 p-8">
        <div class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-slate-800 text-center md:justify-between">
            <a href="#" className="text-gray-200">Laudromat Commpany</a>

          <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-500 focus:text-gray-600 text-sm"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-500 focus:text-gray-600 text-sm"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-500 focus:text-gray-600 text-sm"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-500 focus:text-gray-600 text-sm"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <p class="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
          Copyright © 2024&nbsp;
          <a
            href="https://material-tailwind.com/"
            target="_blank"
            rel="noreferrer"
          >
            Material Tailwind
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default Footer;
