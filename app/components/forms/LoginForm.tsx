"use client"
import axiosInstance from '@/app/config/axios';
import React, { SetStateAction, useState } from 'react';
import Loader from '../Loader';
import { CheckIcon } from '@heroicons/react/24/outline';
import google from "../../assets/images/google.png";
import Image from "next/image";

type LoginFormProps = {
  setPage: React.Dispatch<SetStateAction<"Login" | "Signup">>;
};

const LoginForm: React.FC<LoginFormProps> = ({setPage}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const data = { email: email, password: password };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setLoading(true);
        const response = await axiosInstance.post("/api/v1/auth/login", data);
        setLoading(false);
        setEmail("");
        setPassword("");
        setSubmitted(true);
      } catch (error) {
        setLoading(false);
        setSubmitted(false);
        console.log("Error: ", error);
      }
    };
    
    return <form onSubmit={handleSubmit} className="p-[32px]">
        <h1 className="mb-10 font-bold text-3xl">Log In To Your Account</h1>
        <button className="w-full rounded-lg h-12 indent-3 focus:outline-none focus:border focus:border-[#4184F3] shadow-sm bg-gray-100 font-semibold text-lg flex items-center gap-1 justify-center">
          <Image src={google} alt="google" width={24} height={24} />
          <p>Log in with google</p>
        </button>
        <p className="w-full flex items-center justify-center my-5 font-semibold">
          OR
        </p>
        <input autoComplete="off" name="email" value={email} onChange={e => {
            setSubmitted(false);
            setEmail(e.target.value);
          }} className="w-full mb-4 rounded-lg h-12 indent-3 focus:outline-none focus:border focus:border-[#4184F3] shadow-sm bg-gray-100" type="text" placeholder="Email Address" />
        <input autoComplete="off" name="password" value={password} onChange={e => {
            setSubmitted(false);
            setPassword(e.target.value);
          }} className="w-full mb-4 rounded-lg h-12 indent-3 focus:outline-none focus:border focus:border-[#4184F3] shadow-sm bg-gray-100" type={isChecked ? "text" : "password"} placeholder="Password" />
        <div className="flex gap-2 mb-4 items-center">
          <input className="w-5 h-5" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <label htmlFor="checkbox1">Show password</label>
        </div>
        <button disabled={email === "" || password === "" || loading} className="bg-[#4184F3] text-white w-full h-12 rounded-lg flex items-center justify-center shadow-sm">
          {loading && <Loader />}
          {submitted && <CheckIcon className="h-6 w-6 text-white" />}
          {!loading && !submitted && "Login"}
        </button>
        <p className="mt-4 flex gap-1">
          Don't have an account?<span className="underline font-semibold text-[#4184f3] cursor-pointer" onClick={() => setPage("Signup")}>
            Create account
          </span>
        </p>
      </form>;
}
export default LoginForm;