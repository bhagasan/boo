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
      </div>
    </div>
  );
}
