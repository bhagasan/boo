import { MessageCircle, Repeat, Heart, BarChart2, Share } from 'lucide-react';

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
        views: string | number;
    };
}

export default function Post({ name, handle, time, content, image, stats }: PostProps) {
    return (
        <div className="border-b border-gray-800 p-4 hover:bg-gray-900/30 transition-colors cursor-pointer">
            <div className="flex gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0"></div>

                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="font-bold text-white truncate">{name}</span>
                        <span className="truncate">@{handle}</span>
                        <span>·</span>
                        <span className="hover:underline">{time}</span>
                    </div>

                    {/* Content */}
                    <div className="mt-1 text-[15px] whitespace-pre-wrap leading-normal">
                        {content}
                    </div>

                    {/* Image */}
                    {image && (
                        <div className="mt-3 rounded-2xl overflow-hidden border border-gray-800">
                            {/* Using a regular img for now since we don't have configured domains for next/image with external URLs */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image} alt="Post content" className="w-full h-auto object-cover max-h-[500px]" />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-between items-center mt-3 text-gray-500 max-w-md">
                        <button className="flex items-center gap-2 group hover:text-blue-400 transition-colors">
                            <div className="p-2 -ml-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                <MessageCircle size={18} />
                            </div>
                            <span className="text-xs group-hover:text-blue-400">{stats.replies}</span>
                        </button>

                        <button className="flex items-center gap-2 group hover:text-green-400 transition-colors">
                            <div className="p-2 -ml-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                                <Repeat size={18} />
                            </div>
                            <span className="text-xs group-hover:text-green-400">{stats.reposts}</span>
                        </button>

                        <button className="flex items-center gap-2 group hover:text-pink-600 transition-colors">
                            <div className="p-2 -ml-2 rounded-full group-hover:bg-pink-600/10 transition-colors">
                                <Heart size={18} />
                            </div>
                            <span className="text-xs group-hover:text-pink-600">{stats.likes}</span>
                        </button>

                        <button className="flex items-center gap-2 group hover:text-blue-400 transition-colors">
                            <div className="p-2 -ml-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                <BarChart2 size={18} />
                            </div>
                            <span className="text-xs group-hover:text-blue-400">{stats.views}</span>
                        </button>

                        <button className="flex items-center gap-2 group hover:text-blue-400 transition-colors">
                            <div className="p-2 -ml-2 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                <Share size={18} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
