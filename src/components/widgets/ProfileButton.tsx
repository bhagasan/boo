import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, User, Settings } from 'lucide-react';

export default function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={ref}>
      <div
        className='flex flex-shrink-0 items-center text-white gap-x-3 cursor-pointer hover:bg-gray-800 rounded-full p-2'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='w-10 h-10 bg-gray-700 rounded-full flex-shrink-0'></div>
        <p className='font-medium'>Bhagas</p>
        <ChevronDown className='w-4 h-4' />
      </div>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10'>
          <div className='py-1'>
            <div className='flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer'>
              <User className='w-4 h-4 mr-2' />
              Profile
            </div>
            <div className='flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer'>
              <Settings className='w-4 h-4 mr-2' />
              Settings
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
