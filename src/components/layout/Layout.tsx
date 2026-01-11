import React from 'react';
import Head from 'next/head';
import Sidebar from '../sidebar/Sidebar';
import RightSidebar from '../widgets/RightSidebar';
import Navbar from '../navbar/Navbar';
import Universe from '../widgets/Universe';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Boo</title>
        <meta name='description' content='Boo' />
      </Head>
      <div className='min-h-screen bg-black text-white pt-16'>
        <Navbar />
        <div className='xl:px-4 md:px-8 lg:px-16'>
          <div className='flex min-h-screen'>
            {/* Left Sidebar */}
            <div className='w-[266px] flex-shrink-0 hidden md:flex pr-2 xl:pr-6'>
              <div className='fixed h-screen overflow-y-auto no-scrollbar w-fit'>
                <Sidebar />
              </div>
            </div>

            {/* Main Content Area */}
            <div className='flex flex-grow gap-x-6'>
              {/* Universe */}
              <div className='w-[25%] relative'>
                <div className='fixed h-screen w-[17%] py-4'>
                  <Universe />
                </div>
              </div>

              {/* Main Feed */}
              <main className=' w-[50%] py-4'>{children}</main>

              {/* Right Sidebar */}
              <div className='hidden lg:block w-[35%]'>
                <div className='fixed h-screen w-[24%] py-4 overflow-y-auto no-scrollbar'>
                  <RightSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
