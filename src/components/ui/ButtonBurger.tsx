import React from 'react';

export default function ButtonBurger() {
  return (
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
  );
}
