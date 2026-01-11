import React from 'react';
import Card from '../ui/Card';

export default function TrendingTags() {
  const tags = [
    { name: '#Music', posts: '1.2M' },
    { name: '#Sports', posts: '850K' },
    { name: '#Tech', posts: '650K' },
    { name: '#Art', posts: '420K' },
    { name: '#Food', posts: '320K' },
    { name: '#Music', posts: '1.2M' },
    { name: '#Sports', posts: '850K' },
    { name: '#Tech', posts: '650K' },
    { name: '#Art', posts: '420K' },
    { name: '#Food', posts: '320K' },
    { name: '#Music', posts: '1.2M' },
    { name: '#Sports', posts: '850K' },
    { name: '#Tech', posts: '650K' },
    { name: '#Art', posts: '420K' },
    { name: '#Food', posts: '320K' },
    { name: '#Music', posts: '1.2M' },
    { name: '#Sports', posts: '850K' },
    { name: '#Tech', posts: '650K' },
    { name: '#Art', posts: '420K' },
    { name: '#Food', posts: '320K' },
    { name: '#Art', posts: '420K' },
    { name: '#Food', posts: '320K' },
    { name: '#Music', posts: '1.2M' },
    { name: '#Sports', posts: '850K' },
    { name: '#Tech', posts: '650K' },
    { name: '#Art', posts: '420K' },
    { name: '#Food', posts: '320K' },
  ];

  return (
    <div className=' mt-4'>
      <Card>
        <h2 className='text-xl font-bold mb-4'>Universe</h2>
        <div className='space-y-3 w-full overflow-y-auto max-h-[calc(100svh-180px)] no-scrollbar'>
          {tags.map((tag, index) => (
            <div
              key={index}
              className='shadow-sm rounded-3xl px-2.5 py-1.5 text-xs w-full leading-3 duration-500 flex justify-between'
            >
              <p className='text-white font-medium'>{tag.name}</p>
              <p className='text-gray-400 text-[10px]'>{tag.posts} souls</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
