"use client"
import React, { useState } from 'react';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';

type pageProps = {
    
};

const page: React.FC<pageProps> = () => {
    
    const[page, setPage]=useState<"Login" | "Signup">("Login")
    
    return <section className="">
        {page === "Login" ? <LoginForm setPage={setPage} /> : <SignupForm setPage={setPage} />}
      </section>;
}
export default page;