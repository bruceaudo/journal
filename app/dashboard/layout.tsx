import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import SideNavigation from '../components/SideNavigation';
import TopNavigation from '../components/TopNavigation';

type layoutProps = {
    children: React.ReactNode
};

const layout:React.FC<layoutProps> = ({children}) => {
    
    return <div>
        <TopNavigation />
        <main className="flex">
          <SideNavigation />
          {children}
          <BottomNavigation />
        </main>
      </div>;
}
export default layout;