import { Home, MessageSquareMore, User, Heart, LayoutGrid, ScrollText, Earth } from 'lucide-react';
import SidebarLink from './SidebarLink';

export default function Sidebar() {
  return (
    <div className='flex flex-col h-full justify-between pb-4'>
      <div className='flex flex-col gap-1'>
        <SidebarLink href='/' label='Home' Icon={Home} isActive />
        <SidebarLink href='/' label='Match' Icon={Heart} />
        <SidebarLink href='/' label='Message' Icon={MessageSquareMore} />
        <SidebarLink href='/' label='Profile' Icon={User} />

        <div className='py-4'></div>

        <SidebarLink href='/' label='Personality Database' Icon={LayoutGrid} />
        <SidebarLink href='/' label='Personality Test' Icon={ScrollText} />
        <SidebarLink href='/' label='Resources' Icon={Earth} />

        <button className='bg-white text-black font-bold rounded-full p-3 mt-4 w-fit xl:hidden hover:opacity-90 transition-opacity flex items-center justify-center'>
          <svg viewBox='0 0 24 24' aria-hidden='true' className='w-6 h-6'>
            <path
              d='M23 3c-6.62-.1-10.38 2.4-12.25 5L17 21l-9.88-6.1c-2.6 1.87-5.1 5.63-5 12.25 15.68 1.58 24.36-9.15 20.88-24.15z'
              fill='currentColor'
            ></path>
          </svg>
        </button>
      </div>

      <div className='p-3 rounded-full hover:bg-gray-900 cursor-pointer flex items-center gap-3 w-fit xl:w-full transition-colors'>
        <div className='w-10 h-10 bg-gray-700 rounded-full'></div>
        <div className='hidden xl:block'>
          <p className='font-bold text-sm'>User Name</p>
          <p className='text-gray-500 text-sm'>@username</p>
        </div>
      </div>
    </div>
  );
}
