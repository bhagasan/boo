import Button from '../ui/Button';
import Card from '../ui/Card';
import TrendingList from './TrendingList';

export default function RightSidebar() {
  return (
    <div className='flex flex-col px-4 gap-y-6'>
      <Card>
        {/* Slides */}
        <div className='text-center mb-4'>
          <div className='aspect-[4/3] bg-gray-700 rounded-xl mb-4 mx-auto h-24 mt-4'></div>
          <h2 className='text-white font-bold text-lg'>Teleport</h2>
          <p className='text-white text-sm mt-2'>
            Activate Boo Infinity to unlock unlimited teleports and other exclusive features.
          </p>
        </div>
        {/* !Slides */}
        <Button fluid>ACTIVATE BOO INFINITY</Button>
      </Card>
      <TrendingList />
    </div>
  );
}
