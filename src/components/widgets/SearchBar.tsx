import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className='sticky top-0 bg-black pt-2 pb-2 z-10 w-full'>
      <div className='relative group'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-500 transition-colors'>
          <Search size={18} />
        </div>
        <input
          type='text'
          placeholder='Search'
          className='bg-black shadow-center border-none rounded-full py-2 pl-12 pr-4 w-full text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:bg-black transition-colors'
        />
      </div>
    </div>
  );
}
