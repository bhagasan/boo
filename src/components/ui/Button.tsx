import React from 'react';

export default function Button({ children, fluid }: { children: React.ReactNode; fluid?: boolean }) {
  return (
    <button
      className={`bg-[#4edcd8] ${
        fluid ? 'w-full' : ''
      } px-4 py-3 rounded-full text-black tracking-widest text-sm font-semibold hover:brightness-90 transition`}
    >
      {children}
    </button>
  );
}
