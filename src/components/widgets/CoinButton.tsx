import React from 'react';

export default function CoinButton() {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='w-6 h-6 bg-yellow-500 rounded-full'></div>
      <span className='text-white font-semibold'>350</span>
    </div>
  );
}
