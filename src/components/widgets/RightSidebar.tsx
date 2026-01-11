import FollowRecommendations from './FollowRecommendations';
import TrendingList from './TrendingList';

export default function RightSidebar() {
  return (
    <div className='flex flex-col h-full overflow-y-auto no-scrollbar pb-10 px-4'>
      <TrendingList />
      <FollowRecommendations />

      <div className='px-4 mt-4 text-xs text-gray-500 flex flex-wrap gap-x-3 gap-y-1'>
        <span className='hover:underline cursor-pointer'>Terms of Service</span>
        <span className='hover:underline cursor-pointer'>Privacy Policy</span>
        <span className='hover:underline cursor-pointer'>Cookie Policy</span>
        <span className='hover:underline cursor-pointer'>Accessibility</span>
        <span className='hover:underline cursor-pointer'>Ads info</span>
        <span>© 2026 Social, Inc.</span>
      </div>
    </div>
  );
}
