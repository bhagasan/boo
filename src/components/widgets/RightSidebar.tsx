import TrendingList from './TrendingList';

export default function RightSidebar() {
  return (
    <div className='flex flex-col h-full overflow-y-auto no-scrollbar pb-10 px-4'>
      <TrendingList />
    </div>
  );
}
