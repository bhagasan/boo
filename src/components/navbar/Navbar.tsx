import Link from 'next/link';
import React from 'react';
import SearchBar from '../widgets/SearchBar';
import ProfileButton from '../widgets/ProfileButton';
import CoinButton from '../widgets/CoinButton';
import NotifButton from '../widgets/NotifButton';

export default function Navbar() {
  return (
    <div className='fixed h-16 top-0 left-0 w-full py-5 flex items-center pe-5 ps-[1.375rem] z-30 gap-x-3 bg-primary'>
      <button className='h-7 w-7 cursor-pointer hover:scale-105 active:scale-99 duration-500 min-w-[28px]'>
        <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
          <path
            stroke='white'
            stroke-linecap='round'
            stroke-miterlimit='10'
            stroke-width='2'
            d='M4 7h22M4 15h22M4 23h22'
            className='transition duration-500'
          ></path>
        </svg>
      </button>
      <Link href='/'>
        <p className='font-budokan text-2xl hover:scale-105 active:scale-99 duration-500'>Boo</p>
      </Link>
      <div className='flex-grow'>
        <SearchBar />
      </div>
      <div className='flex-shrink-0'>
        <div className=' flex items-center gap-x-4'>
          <NotifButton />
          <CoinButton />
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}
