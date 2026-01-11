import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className='rounded-3xl p-4 mb-4 w-full shadow-center mt-4 bg-black'>{children}</div>;
}
