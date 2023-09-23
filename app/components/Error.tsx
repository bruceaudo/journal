
import React from 'react';

type ErrorProps = {
    
};

const Error:React.FC<ErrorProps> = () => {
    
    return <section className="flex flex-col items-start">
      <h1 className='font-bold text-4xl mb-3'>Something went wrong.</h1>
      <p className='text-xl'>Check your internet connection and refresh the page.</p>
      </section>;
}
export default Error;