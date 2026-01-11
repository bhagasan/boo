import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';

export default function Universe() {
  const [tags, setTags] = useState<Array<{ name: string; posts: number }>>([]);

  useEffect(() => {
    fetch('/api/tags')
      .then((res) => res.json())
      .then((data) => setTags(data))
      .catch((error) => console.error('Error fetching tags:', error));
  }, []);

  return (
    <Card>
      <h2 className='text-xl font-bold mb-4'>Universe</h2>
      <div className=' w-full overflow-y-auto max-h-[calc(100svh-180px)] no-scrollbar'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className='shadow-sm rounded-3xl py-1.5 text-xs w-full leading-3 duration-500 flex justify-between'
          >
            <p className='text-white font-medium shadow-center-small px-2.5 py-1 rounded-full mx-2'>{tag.name}</p>
            <p className='text-gray-400 text-[10px] pr-1'>{tag.posts} souls</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
