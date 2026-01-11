export default function FollowRecommendations() {
    const users = [
        { name: 'Altman', handle: 'sama' },
        { name: 'Vercel', handle: 'vercel' },
        { name: 'Lee Robinson', handle: 'leeerob' },
    ];

    return (
        <div className="bg-gray-900 rounded-xl mt-4 overflow-hidden mb-4">
            <h2 className="font-bold text-xl px-4 py-3">Who to follow</h2>
            {users.map((user, i) => (
                <div key={i} className="px-4 py-3 hover:bg-gray-800/50 transition-colors cursor-pointer flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0"></div>
                        <div className="min-w-0">
                            <p className="font-bold text-sm truncate">{user.name}</p>
                            <p className="text-gray-500 text-sm truncate">@{user.handle}</p>
                        </div>
                    </div>
                    <button className="bg-white text-black font-bold text-sm py-1.5 px-4 rounded-full hover:opacity-90 transition-opacity">
                        Follow
                    </button>
                </div>
            ))}
            <div className="px-4 py-4 text-blue-400 text-sm hover:bg-gray-800/50 cursor-pointer transition-colors">
                Show more
            </div>
        </div>
    );
}
