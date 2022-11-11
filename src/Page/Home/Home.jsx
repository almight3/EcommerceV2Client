import React from 'react';
import "./home.css";
import EcomBanner from "../../image/EcommerceBanner.jpg"
import MensTshirt from "../../image/mens-tshirt.jpg";
import MensSneaker from "../../image/mens-sneaker.jpg";
import MensDenim from "../../image/mens-denim.jpg";
import MensShirts from "../../image/mens-shirts.jpg";

function Home() {
  return (
    <div className='mx-auto	w-10/12	'> 
          <div className='mx-auto my-5'>
            <img src={EcomBanner} alt="wesite banner" className='w-full' />
          </div>
          <div className='flex flex-wrap justify-around w-full'>
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
          <div className='flex flex-wrap justify-around w-full'>
              <h1 className='w-11/12 text-2xl font-medium'>Explore Womens Clothing</h1>
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
          <div className='flex flex-wrap justify-around w-full'>
              <h1 className='w-11/12 text-2xl font-medium'>Explore Accessories </h1>
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