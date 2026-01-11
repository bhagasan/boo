import React from 'react';
import { Bell } from 'lucide-react';

export default function NotifButton() {
  return (
    <button className='w-8 h-8 rounded-full'>
      <Bell className='w-6 h-6 text-white' />
    </button>
  );
}
