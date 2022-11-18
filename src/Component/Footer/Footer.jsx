import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {MdOutlineWeb} from "react-icons/md";
import {AiFillHeart} from "react-icons/ai";
function Footer() {
  return (

  <footer className="bg-black mt-10">
  <div className='p-4'>
    <p className=' text-lg text-white font-semibold text-center pt-5'>Made with Efforts <AiFillHeart size={22} className="inline-block mx-1	"/> Priyanshu</p>
    <ul className='list-none	flex justify-center'>
        <li className='text-white mx-7 my-5 text-base font-semibold cursor-pointer'>LinkedIn  <AiFillLinkedin size={30} className="mx-3"/></li>
        <li className='text-white mx-7 my-5 text-base font-semibold cursor-pointer'>GitHub <AiFillGithub size={30} className="mx-3"/></li>
        <li className='text-white mx-7 my-5 text-base font-semibold cursor-pointer'>WebSite <MdOutlineWeb size={30} className="mx-3"/></li>
    </ul>    
  </div>
  
</footer>
   
  )
}

export default Footer