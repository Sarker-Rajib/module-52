import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div className="w-5/6 mx-auto p-4 rounded bg-slate-300">
         <nav className="flex justify-between items-center">
            <div className="image">
               <h1 className="text-4xl">Hello logo</h1>
            </div>
            <div>
               <Link to='/home' className='mr-4'>Home</Link>
               <Link to='/ourAim' className='mr-4'>Our Aim</Link>
               <Link to='/contactUs' className='mr-4'>Contact Us</Link>
               <Link to='/about'>About</Link>
            </div>
         </nav>
      </div>
   );
};

export default Header;