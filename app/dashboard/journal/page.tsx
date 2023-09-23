"use client";
import Error from "@/app/components/Error";
import Loading from "@/app/components/Loading";
import axiosInstance from "@/app/config/axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const id = useSearchParams().get("id");
  const[journal, setJournal]=useState([])
  const[loading, setLoading]=useState(false)
  const[error, setError]=useState(false)
  
  useEffect(() => {
    const getJournal = async () => {
      try {
        setLoading(true)
        const journal = await axiosInstance.get(`/api/v1/journal/${id}`);
        const journalArray = journal.data;
        setJournal(journalArray);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
        console.log("Error: ", error)
      }
    }

    getJournal()
  },[])

  return <section className="ml-24 mt-12 w-full min-h-screen p-8 bg-gray-100 pb-36 flex flex-col items-center">
      {journal.length > 0 && journal.map(
          (j: {
            _id: React.Key | null | undefined;
            title: string;
            details: string;
          }) =>
            <section className="w-2/3" key={j._id}>
              <h2 className="font-bold text-3xl mb-5">
                {j.title}
              </h2>
              <p>
                {j.details}
              </p>
            </section>
        )}
    {loading && <Loading />}
    {error && <Error />}
    </section>;
};
export default page;
