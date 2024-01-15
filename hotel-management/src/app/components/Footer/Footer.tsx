// import React from 'react'

import Link from "next/link";
import {BsFillSendFill, BsTelephoneOutbound} from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-teritary-dark">
           Hotelzz
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>
        
         <div className="flex flex-wrap gap-16 items-center justify-between">
            <div className="flex-1">
              <p>123 Road</p>
              <div className="flex items-center py-4">
                <BsFillSendFill />
                <p className="ml-2">Codewitharyansh</p>
              </div>
              <div className="flex items-center py-4">
                <BsTelephoneOutbound />
                <p className="ml-2">000-000-00</p>
              </div>
              <div className="flex items-center py-4">
                {/* <BiMessa /> */}
                <p className="ml-2">Codewitharyansh</p>
              </div>
            </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer
