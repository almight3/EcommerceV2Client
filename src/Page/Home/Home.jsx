import React from 'react';
import "./home.css"
import MensBanners from "../../image/MensBaner.jpg";
import MensTshirt from "../../image/mens-tshirt.jpg";
import MensSneaker from "../../image/mens-sneaker.jpg";
import MensDenim from "../../image/mens-denim.jpg";
import MensShirts from "../../image/mens-shirts.jpg";

function Home() {
  return (
    <div className='flex justify-center mx-auto	 w-10/12	'> 
          <div className='flex flex-wrap justify-center w-11/12'>
              <h1 className='w-11/12 text-2xl font-medium'>Explore Mens Clothing</h1>
              <div className='relative h-72	w-80 m-5 overflow-hidden shadow	' >
                  <img src={MensTshirt} alt="mens tshirt" className='h-full w-full' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/40  opacity-0 hover:opacity-100 ttransition-colors	 duration-300	'>
                     <button className='px-5 py-2 bg-black text-white rounded'>T Shirt</button>
                  </div>
              </div>
              <div className='relative h-72	w-80 m-5 overflow-hidden shadow	' >
                  <img src={MensSneaker} alt="mens tshirt" className='h-full w-full' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/40  opacity-0 hover:opacity-100 ttransition-colors	 duration-300	'>
                     <button className='px-5 py-2 bg-black text-white rounded'>Shoes</button>
                  </div>
              </div>
              <div className='relative h-72	w-80 m-5 overflow-hidden shadow	' >
                  <img src={MensDenim} alt="mens tshirt" className='h-full w-full' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/40  opacity-0 hover:opacity-100 ttransition-colors	 duration-300	'>
                     <button className='px-5 py-2 bg-black text-white rounded'>Jeans</button>
                  </div>
              </div>
              <div className='relative h-72	w-80 m-5 overflow-hidden shadow	' >
                  <img src={MensShirts} alt="mens tshirt" className='h-full w-full' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/40  opacity-0 hover:opacity-100 ttransition-colors	 duration-300	'>
                     <button className='px-5 py-2 bg-black text-white rounded'>Shirt</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Home