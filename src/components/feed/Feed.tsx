import Post from './Post';

export default function Feed() {
  // Placeholder data
  const posts = [
    {
      id: 1,
      name: 'Elon Musk',
      handle: 'elonmusk',
      time: '12h',
      content: 'True',
      image:
        'https://images.unsplash.com/photo-1541185933-710f50b77e7d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja2V0fGVufDB8fDB8fHww',
      stats: { replies: 532, reposts: 1200, likes: 50000, views: '1.2M' },
    },
    {
      id: 2,
      name: 'Vercel',
      handle: 'vercel',
      time: '2h',
      content: 'Next.js 14 is now available! 🚀\n\nExperience simpler logic, faster iterations, and less boilerplate.',
      stats: { replies: 42, reposts: 156, likes: 2300, views: '50k' },
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      handle: 'tailwindcss',
      time: '5h',
      content: 'Just shipped a new update to Tailwind CSS IntelliSense. Check it out!',
      stats: { replies: 12, reposts: 89, likes: 1200, views: '20k' },
    },
    {
      id: 4,
      name: 'React',
      handle: 'reactjs',
      time: '1d',
      content:
        'React can be used as a little bit of script in an existing HTML page, or as a full-blown framework for your next big app.',
      stats: { replies: 120, reposts: 400, likes: 12000, views: '400k' },
    },
  ];

  return (
    <div className='flex flex-col min-h-screen border-r border-gray-800'>
      <div className='flex flex-col'>
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
