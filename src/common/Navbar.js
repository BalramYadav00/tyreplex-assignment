/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { PiPersonSimpleBikeBold } from "react-icons/pi";
import { RiSettingsFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";

function Navbar({children}) {
  return (
    <>
    <div className="flex items-center justify-between gap-2 p-4">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            alt="logo"
          />
      <div />
      </div>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h- transition-transform border-r-2 -translate-x-full lg:translate-x-0 bg-white h-full"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto">
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            alt="logo"
          />
          <ul class="space-y-2 mt-4 font-medium">
          <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-car" data-collapse-toggle="dropdown-car">
            <IoCarSportSharp size={23} />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Car Tyres </span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-car" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">MRF Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">CEAT Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Goodyear Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">JK Tyres</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-bike" data-collapse-toggle="dropdown-bike">
            <PiPersonSimpleBikeBold size={23} />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Bike Tyres </span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-bike" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">MRF Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">CEAT Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Goodyear Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">JK Tyres</a>
                  </li>
            </ul>
         </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
               <SlSpeedometer size={23} />
                <span class="ms-3">Tyre Pressure</span>
              </a>
            </li>
            <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-commercial" data-collapse-toggle="dropdown-commercial">
            <PiPersonSimpleBikeBold size={23} />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Commercial Tyres </span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-commercial" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">MRF Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">CEAT Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Goodyear Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">JK Tyres</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-setting" data-collapse-toggle="dropdown-setting">
            <RiSettingsFill size={23} />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Accessories Tyres </span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-setting" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">MRF Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">CEAT Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Goodyear Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">JK Tyres</a>
                  </li>
            </ul>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-more" data-collapse-toggle="dropdown-more">
            <CgDetailsMore size={23} />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">More </span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-more" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Offers</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Find Tyre Dealers</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Compare Tyres</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Wheel Balancing</a>
                  </li>
            </ul>
         </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
              <FaUser size={23} />
                <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 lg:ml-64">
        {children}
      </div>
    </>
  );
}

export default Navbar;
