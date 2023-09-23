import React from 'react';
import Loader2 from './Loader2';

type LoadingProps = {
    
};

const Loading:React.FC<LoadingProps> = () => {
    
    return <section className="absolute z-40 top-0 bottom-0 left-0 right-0 bg-transparent h-screen flex flex-col items-center justify-center">
        <Loader2 />
      </section>;
}
export default Loading;