import { MessageCircle, Repeat, Heart, Star } from 'lucide-react';
import Card from '../ui/Card';

interface PostProps {
  name: string;
  handle: string;
  time: string;
  content: string;
  image?: string;
  stats: {
    replies: number;
    reposts: number;
    likes: number;
    stars: string | number;
  };
}

function ButtonAction({
  icon: Icon,
  count,
  colorClass,
}: {
  icon: React.ElementType;
  count: number | string;
  colorClass: string;
}) {
  return (
    <button className={`flex items-center gap-x-1 group hover:${colorClass} transition-colors`}>
      <div className={`rounded-full group-hover:bg-${colorClass.split('-')[1]}-500/10 transition-colors`}>
        <Icon size={18} />
      </div>
      <span className={`text-xs group-hover:text-${colorClass.split('-')[1]}-400`}>{count}</span>
    </button>
  );
}

export default function Post({ name, handle, time, content, image, stats }: PostProps) {
  return (
    <Card>
      <div className='cursor-pointer'>
        <div className='flex gap-4'>
          {/* Avatar */}
          <div className='w-10 h-10 bg-gray-700 rounded-full flex-shrink-0'></div>

          <div className='flex-1 min-w-0'>
            {/* Header */}
            <div className='flex items-center gap-2 text-gray-500 text-sm'>
              <span className='font-bold text-white truncate'>{name}</span>
              <span className='truncate'>@{handle}</span>
              <span>·</span>
              <span className='hover:underline'>{time}</span>
            </div>

            {/* Content */}
            <div className='mt-1 text-[15px] whitespace-pre-wrap leading-normal'>{content}</div>

            {/* Image */}
            {image && (
              <div className='mt-3 rounded-2xl overflow-hidden border border-gray-800'>
                {/* Using a regular img for now since we don't have configured domains for next/image with external URLs */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt='Post content' className='w-full h-auto object-cover max-h-[500px]' />
              </div>
            )}

            {/* Actions */}
            <div className='flex items-center mt-3 gap-x-2 text-gray-500'>
              <ButtonAction icon={Heart} count={stats.likes} colorClass='text-pink-600' />
              <ButtonAction icon={MessageCircle} count={stats.replies} colorClass='text-blue-400' />
              <ButtonAction icon={Repeat} count={stats.reposts} colorClass='text-green-400' />
              <ButtonAction icon={Star} count={stats.stars} colorClass='text-yellow-400' />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
