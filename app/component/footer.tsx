import React from 'react'
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../public/img/imagess.png")} alt="img" width={100} height={100} className="w-20"/>
   
      <span className="ml-3 text-xl">1st Portfolio</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 1st Portfolio —
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href="www.facebook.com"  target='blank'
       className="text-gray-500">
      <FaFacebookF  className='text-3xl hover:text-[blue]' />
      </Link>
      
        
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
