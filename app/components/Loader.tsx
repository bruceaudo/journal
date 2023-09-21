import React from 'react';

type LoaderProps = {
    
};

const Loader:React.FC<LoaderProps> = () => {
    
    return <div className='w-6 h-6 border-3 border-white rounded-full animate-spin'></div>
}
export default Loader;