"use client"
import axiosInstance from '@/app/config/axios';
import React, { useState } from 'react';
import Loader from '../Loader';
import { CheckIcon } from '@heroicons/react/24/outline';

type AddFormProps = {
    
};

const AddForm: React.FC<AddFormProps> = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const data = {
        title: title,
        details:details
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axiosInstance.post("/api/v1/journal", data);
            setLoading(false)
            setTitle("")
            setDetails("")
            setSubmitted(true);
        } catch (error) {
            setLoading(false)
            setSubmitted(false)
            console.log("Error: ", error)
        }
    }
    
    return <form onSubmit={handleSubmit}>
        <input name='title' value={title} onChange={e => {
            setSubmitted(false)
            setTitle(e.target.value)
        }} className="w-full mb-3 rounded-lg h-12 indent-3 focus:outline-none focus:border focus:border-[#4184F3]" type="text" placeholder="Title or Short description" />
        <textarea name='details' value={details} onChange={e => {
            setSubmitted(false)
            setDetails(e.target.value)
        }} className="w-full py-2.5 h-[350px] rounded-lg indent-3 focus:outline-none focus:border focus:border-[#4184F3] mb-3" placeholder="What happened today?" />
        <button disabled={title === "" || details === "" || loading} className="bg-[#4184F3] text-white w-24 h-12 rounded-lg flex items-center justify-center">
            {loading && <Loader />}
            {submitted && <CheckIcon className='h-6 w-6 text-white' />}
            {!loading && !submitted && "Add"}
          </button>
        </form>
}
export default AddForm;