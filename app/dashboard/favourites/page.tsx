import JournalCard from "@/app/components/JournalCard";
import axiosInstance from "@/app/config/axios";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = async () => {
  const journals = await axiosInstance.get("/api/v1/favourites");
  const journalArray = journals.data;

  return (
    <section className="ml-24 mt-12 w-full min-h-screen p-8 bg-gray-100 pb-36">
      <section className="w-full grid grid-cols-3 gap-5">
        {journalArray.length > 0
          ? journalArray.map(
              (j: {
                journal: {
                  _id: string | null | undefined | React.Key;
                  title: string;
                  details: string;
                };
              }) =>
                <JournalCard
                  key={j.journal._id}
                  id={j.journal._id}
                  title={j.journal.title}
                  details={j.journal.details}
                />
            )
          : <p>You haven't added any journals yet to favourites.</p>}
      </section>
    </section>
  );
};
export default page;
