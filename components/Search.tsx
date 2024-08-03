'use client'
import React from 'react'

function search() {
  return (
    <div className=''>
   
        <div className="">
          <form className=" flex lg:w-[50rem]">
            <input
              type="search"
              placeholder="Search in Globemart"
              className="w-[10rem] lg:w-full flex-grow h-10 md:h-12 bg-slate-200 outline-none px-4 rounded-l-md "
            />
            <button
              type="submit"
              className="bg-gray-800 text-white lg:px-4 px-1   font-semibold rounded-r-md"
            >
              Search
            </button>
          </form>
        </div>

       
      </div>
  
  );
}

export default search