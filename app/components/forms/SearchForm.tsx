"use client"
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SearchFormProps = {
    
};

const SearchForm: React.FC<SearchFormProps> = () => {
  
  const[search, setSearch] = useState('')
    
    return <form className="h-[36px] w-[500px] flex items-center">
        <input value={search} onChange={e=>setSearch((e.target.value))} className="h-full w-full bg-gray-100 rounded-l-lg mr-0 focus:outline-none focus:border-none indent-3" type="text" placeholder="Search your journal" />
        <button className="bg-[#4184F3] h-full w-16 rounded-r-lg flex items-center justify-center">
          <MagnifyingGlassIcon className="h-6 w-6 text-white" />
        </button>
      </form>;
}
export default SearchForm;