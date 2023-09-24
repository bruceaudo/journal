import { LayoutProps } from '@/.next/types/app/layout';
import React from 'react';

type layoutProps = {
    children: React.ReactNode
};

const layout:React.FC<layoutProps> = ({children}: LayoutProps) => {
    
    return <main className="flex h-screen">
        <div className='w-1/3 h-full'>
          {children}
        </div>
        <p className='w-2/3 h-full'>Right</p>
      </main>;
}
export default layout;