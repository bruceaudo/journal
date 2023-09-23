import React from "react";
import axiosInstance from "../config/axios";
import JournalCard from "../components/JournalCard";

type pageProps = {};

const page: React.FC<pageProps> = async () => {
  const journals = await axiosInstance.get("/api/v1/journal");
  const journalArray = journals.data;

  return (
    <section className="ml-24 mt-12 w-full min-h-screen p-8 bg-gray-100 pb-36">
      <section className="w-full grid grid-cols-3 gap-5">
        {journalArray.length > 0
          ? journalArray.map(
              (journal: {
                _id: string | null | undefined | React.Key;
                title: string;
                details: string;
              }) =>
                <JournalCard
                  key={journal._id}
                  id={journal._id}
                  title={journal.title}
                  details={journal.details}
                />
            )
          : <p>You haven't added any journals yet.</p>}
      </section>
    </section>
  );
};
export default page;
