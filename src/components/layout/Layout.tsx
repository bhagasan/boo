import React from 'react';
import Head from 'next/head';
import Sidebar from '../sidebar/Sidebar';
import RightSidebar from '../widgets/RightSidebar';
import Navbar from '../navbar/Navbar';

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
        <div className='xl:px-30 max-w-7xl'>
          <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 min-h-screen'>
            {/* Left Sidebar */}
            <div className='col-span-1 border-r border-gray-800 hidden md:flex justify-end pr-2 xl:pr-6'>
              <div className='fixed h-screen overflow-y-auto no-scrollbar w-fit xl:w-[275px]'>
                <Sidebar />
              </div>
            </div>

            {/* Main Feed */}
            <main className='col-span-4 md:col-span-3 lg:col-span-2 border-r border-gray-800 w-full max-w-[600px] mx-auto lg:mx-0'>
              {children}
            </main>

            {/* Right Sidebar */}
            <div className='col-span-1 hidden lg:block'>
              <div className='fixed h-screen w-fit pe-5'>
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
