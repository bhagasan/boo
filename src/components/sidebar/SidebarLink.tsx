import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  href: string;
  label: string;
  Icon: LucideIcon;
  isActive?: boolean;
}

export default function SidebarLink({ href, label, Icon, isActive }: SidebarLinkProps) {
  return (
    <Link href={href} className='flex items-center gap-4 p-3 rounded-full  transition-colors w-fit xl:w-full'>
      <Icon className={`w-5 h-5 ${isActive ? 'stroke-[3px] stroke-[#4edcd8]' : ''}`} />
      <span className={`hidden xl:inline text-sm ${isActive ? 'font-bold text-[#4edcd8]' : 'font-medium'}`}>
        {label}
      </span>
    </Link>
  );
}
