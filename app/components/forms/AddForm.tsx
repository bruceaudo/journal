"use client"
import React, { useState } from 'react';

type AddFormProps = {
    
};

const AddForm: React.FC<AddFormProps> = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    
    return <form>
          <input name='title' value={title} onChange={e=>setTitle(e.target.value)} className="w-full mb-3 rounded-lg h-12 indent-3 focus:outline-none focus:border focus:border-[#4184F3]" type="text" placeholder="Title or Short description" />
          <textarea name='title' value={title} onChange={e=>setDetails(e.target.value)} className="w-full py-2.5 h-[350px] rounded-lg indent-3 focus:outline-none focus:border focus:border-[#4184F3] mb-3" placeholder="What happened today?" />
          <button className="bg-[#4184F3] text-white w-24 h-12 rounded-lg">
            Add
          </button>
        </form>
}
export default AddForm;