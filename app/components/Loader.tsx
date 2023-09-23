import React from 'react';

type LoaderProps = {
    
};

const Loader:React.FC<LoaderProps> = () => {
    
    return <div className='w-8 h-8 border-2 border-white rounded-full animate-spin'></div>
}
export default Loader;