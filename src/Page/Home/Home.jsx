import React from 'react';
import "./home.css";
import Banner from "../../image/banner/banner.jpg";
import OnePiece from "../../image/anime/onepiece.jpg";
import Naruto from "../../image/anime/naruto.png" ;
import DragonBall from "../../image/anime/dragonball.jpg";
import Tshirt from "../../image/ProdcutCategory/LuffyZoroTShirt.png";
import Poster from "../../image/ProdcutCategory/poster.jpg";
import Manga from "../../image/ProdcutCategory/manga.jpg";
import {Link} from "react-router-dom";
function Home() {
  return (
    <div className='mx-auto	w-10/12	'> 
          <div className='relative mx-auto h-96 	my-5'>
            <img src={Banner} alt="website banner" className='w-full h-full object-cover' />
            <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/20  opacity-0 hover:opacity-100 transition-all	 duration-300 ease-in-out'>
            <button className='px-5 py-2 bg-black/60 text-white border-2 border-white'><Link to="/products">All Product</Link></button>
            </div>
          </div>
          <div className='flex flex-wrap justify-center w-full'>
              <h1 className='w-full text-center text-2xl font-medium'>Anime</h1>
              <div className='relative h-72	w-80 m-5 overflow-hidden shadow	' >
                  <img src={OnePiece} alt="" className='h-full w-full object-cover' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/30  opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out'>
                     <button className='px-5 py-2 bg-black/60 text-white border-2 border-white'><Link to="/products/onepiece">One Piece</Link></button>
                  </div>
              </div>
              <div className='relative h-72	w-80 m-5 overflow-hidden shadow	' >
                  <img src={Naruto} alt="" className='h-full w-full object-cover' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/30  opacity-0 hover:opacity-100 transition-all	 duration-300 ease-in-out	'>
                     <button className='px-5 py-2 bg-black/60 text-white border-2 border-white'><Link to="/products/naruto">Naruto</Link></button>
                  </div>
              </div>
              <div className='relative h-72	w-80 m-5 overflow-hidden shadow	' >
                  <img src={DragonBall} alt="" className='h-full w-full object-cover' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/30  opacity-0 hover:opacity-100 transition-all	 duration-300 ease-in-out	'>
                     <button className='px-5 py-2 bg-black/60 text-white border-2 border-white'><Link to="/products/dbz">Dragon Ball</Link></button>
                  </div>
              </div>
             </div>    
          <div className='flex flex-wrap justify-center w-full'>
              <h1 className='w-full text-center text-2xl font-medium'>Explore Category </h1>
              <div>
                 <div className='relative h-72	w-72 m-5 mb-0 overflow-hidden shadow	' >
                  <img src={Tshirt} alt="" className='h-full w-full object-cover' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/40  opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out	'>
                     <button className='px-5 py-2 bg-black/60 text-white border-2 border-white'>View</button>
                  </div>
              </div>
              <p className='text-center m-1 text-xl font-bold'>T Shirt</p>
              </div>
              <div>
                <div className='relative h-72 w-72 m-5 mb-0 overflow-hidden shadow	' >
                  <img src={Poster} alt="" className='h-full w-full object-cover' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/40  opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out	'>
                     <button className='px-5 py-2 bg-black/60 text-white border-2 border-white'>View</button>
                  </div> 
              </div>
              <p className='text-center m-1 text-xl font-bold'>Anime Poster</p>
              </div>
              <div>
              <div className='relative h-72	w-72 m-5 mb-0 overflow-hidden shadow	' >
                  <img src={Manga} alt="" className='h-full w-full object-cover' />
                  <div className='absolute top-0 h-full w-full flex items-center justify-center  bg-black/40  opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out	'>
                     <button className='px-5 py-2 bg-black/60 text-white border-2 border-white'>View</button>
                  </div>
              </div>
              <p className='text-center m-1 text-xl font-bold'>Manga</p>
              </div>
          </div>
    </div>
  )
}

export default Home