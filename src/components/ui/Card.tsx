import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className='rounded-3xl p-4 my-4 w-full shadow-center bg-black'>{children}</div>;
}
