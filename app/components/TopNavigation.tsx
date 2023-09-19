import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import profile from '../assets/images/face.webp'
import Link from 'next/link';

type TopNavigationProps = {
    
};

const TopNavigation:React.FC<TopNavigationProps> = () => {
    
    return <nav className="h-12 bg-white flex items-center fixed top-0 left-0 right-0 px-8 justify-between">
        <div>Logo</div>
        <form className="h-[36px] w-[500px] flex items-center">
          <input className="h-full w-full bg-gray-100 rounded-l-lg mr-0 focus:outline-none focus:border-none indent-3" type="text" placeholder="Search your journal" />
          <button className="bg-[#4184F3] h-full w-16 rounded-r-lg flex items-center justify-center">
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </button>
        </form>
        <div className="flex gap-x-8 items-center">
          <Link href={"/dashboard/settings"} className="flex items-center gap-1">
            <Cog6ToothIcon className="h-7 w-7" />
            Settings
          </Link>

          <div className="flex items-center gap-1">
            <ArrowRightOnRectangleIcon className="h-7 w-7" />
            Logout
            </div>
            
            <Image className='h-8 w-8 rounded-full' src={profile} alt='Profile' />
        </div>
      </nav>;
}
export default TopNavigation;