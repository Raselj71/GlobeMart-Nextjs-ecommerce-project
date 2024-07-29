'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import slide1 from '../../public/slide1.jpg'
import slide2 from '../../public/slide2.jpg'
import slide3 from '../../public/slide3.jpg'
import slide4 from '../../public/slide4.jpg'
import slide5 from '../../public/slide5.jpg'
import slide6 from '../../public/slide6.jpg'


function Slider() {
        let Images=[slide1, slide2, slide3, slide4, slide5, slide5, slide6]
       const[index, setIndex]= useState(0) 
         useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % Images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [Images.length]);
  return (
    <section className='mt-4 px-4  w-[100vw] h-[300px] relative overflow-hidden '>
      
        <Image className='w-full h-auto ' src={Images[index]} alt='slide' />
    </section>
  )
}


export default Slider