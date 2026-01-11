import { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(tags);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
