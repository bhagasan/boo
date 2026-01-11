import Link from 'next/link';
import React from 'react';
import SearchBar from '../widgets/SearchBar';
import NavbarActions from './NavbarActions';
import ButtonBurger from '../ui/ButtonBurger';

export default function Navbar() {
  return (
    <div className='fixed h-16 top-0 left-0 w-full py-5 flex items-center bg-black pe-5 ps-[1.375rem] z-30 gap-x-3 bg-primary'>
      <ButtonBurger />
      <Link href='/'>
        <p className='font-budokan text-2xl hover:scale-105 active:scale-99 font-bold duration-500'>Boo</p>
      </Link>
      <div className='flex-grow'>
        <SearchBar />
      </div>
      <div className='flex-shrink-0'>
        <NavbarActions />
      </div>
    </div>
  );
}
