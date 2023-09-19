import { StarIcon } from '@heroicons/react/24/outline';
import { HomeIcon, PlusIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

type SideNavigationProps = {
    
};

const SideNavigation:React.FC<SideNavigationProps> = () => {
    
    return <nav className="w-24 fixed top-12 bottom-12 left-0 flex flex-col items-center py-8 bg-white gap-y-8">
        
          <Link className='flex flex-col items-center' href="/dashboard">
            <HomeIcon className="h-7 w-7" />
            Home
          </Link>

        <Link href={"/dashboard/add"} className="flex flex-col items-center">
          <PlusIcon className="h-7 w-7" />
          Add
        </Link>

        <Link href={"/dashboard/favourites"} className="flex flex-col items-center">
          <StarIcon className="h-7 w-7" />
          Favourites
        </Link>

        <Link href={"/dashboard/calendar"} className="flex flex-col items-center">
          <CalendarIcon className="h-7 w-7" />
          Calendar
        </Link>
      </nav>;
}
export default SideNavigation;