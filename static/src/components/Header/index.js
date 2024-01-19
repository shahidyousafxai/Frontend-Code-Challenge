import React from 'react'
import Images from '../../assets'
import { useNavigate } from 'react-router-dom';

const Header = ({ children }) => {
 const navigate = useNavigate();
 return (
  <>
   <header className="relative z-10" >
    <nav aria-label="Top">
     <div className="bg-white  backdrop-blur-md backdrop-filter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div>
        <div className="flex h-16 items-center justify-between">

         <div className="flex lg:flex-1 lg:items-center cursor-pointer"
          onClick={() => navigate("/")}
         >
          <img src={Images?.logo} alt='logo' className='h-8' />
         </div>

         <div className="h-full flex">
          <div className="flex h-full justify-center items-center space-x-8 text-black font-semibold">
           <span
            className='cursor-pointer hover:scale-110 hover:underline transition-all duration-300'
            onClick={() => navigate("/items")}
           >Items</span>
           <span className='cursor-pointer hover:scale-110 hover:underline transition-all duration-300'
            onClick={() => navigate("/checkout")}
           >Checkout</span>
          </div>
         </div>

         <div className="flex flex-1 items-center justify-end">
          <div className="flex items-center lg:ml-8">
           {/* Cart */}
           <div className="ml-4 lg:ml-8 flex gap-10">

            <div className="group -m-2 flex items-center p-2 cursor-pointer relative">
             <span class="absolute top-0 left-6 flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
             </span>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
             </svg>
             <span className="ml-2 text-sm font-medium text-black">0</span>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </nav>
   </header >
   {children}
  </>
 )
}

export default Header