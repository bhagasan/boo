import { MoreHorizontal } from 'lucide-react';
import Card from '../ui/Card';

export default function TrendingList() {
  const trends = [
    { category: 'Technology · Trending', topic: 'Next.js 14', posts: '50.4K posts' },
    { category: 'Business · Trending', topic: 'SpaceX', posts: '120K posts' },
    { category: 'Trending in US', topic: '#ReactISLove', posts: '22.1K posts' },
    { category: 'Entertainment · Trending', topic: 'Movie of the Year', posts: '15.6K posts' },
  ];

  return (
    <Card>
      <h2 className='font-bold text-xl px-4 py-3'>What&apos;s happening</h2>
      {trends.map((trend, i) => (
        <div key={i} className='px-4 py-3 hover:bg-gray-800/50 transition-colors cursor-pointer relative'>
          <div className='flex justify-between items-start'>
            <span className='text-gray-500 text-xs'>{trend.category}</span>
            <button className='text-gray-500 hover:bg-blue-500/10 hover:text-blue-500 p-1 rounded-full transition-colors absolute right-2 top-2'>
              <MoreHorizontal size={16} />
            </button>
          </div>
          <p className='font-bold text-sm mt-0.5'>{trend.topic}</p>
          <p className='text-gray-500 text-xs mt-0.5'>{trend.posts}</p>
        </div>
      ))}
      <div className='px-4 py-4 text-blue-400 text-sm hover:bg-gray-800/50 cursor-pointer transition-colors'>
        Show more
      </div>
    </Card>
  );
}
