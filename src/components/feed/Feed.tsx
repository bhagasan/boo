import React, { useState, useEffect } from 'react';
import Post from './Post';

interface PostType {
  id: string | number;
  name: string;
  handle: string;
  time: string;
  content: string;
  stats: {
    replies: number;
    reposts: number;
    likes: number;
    stars: string | number;
  };
  [key: string]: string | number | boolean | object;
}

export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-col gap-y-6'>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
        {/* Duplicate posts to fill space for scrolling demo */}
        {posts.map((post) => (
          <Post key={`${post.id}-dup`} {...post} />
        ))}
      </div>
    </div>
  );
}
