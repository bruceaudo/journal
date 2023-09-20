import AddForm from '@/app/components/forms/AddForm';
import React from 'react';

type pageProps = {
    
};

const page: React.FC<pageProps> = () => {
    
    return <section className="ml-24 mt-12 w-full h-screen p-8 bg-gray-100">
        <AddForm />
      </section>;
}
export default page;