"use client";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axiosInstance from "../config/axios";

type JournalCardProps = {
  id: string | null | undefined | React.Key;
  title: string;
  details: string;
};

const JournalCard: React.FC<JournalCardProps> = ({ id, title, details }) => {
  const [favourites, setFavourites] = useState<any[]>([]);

  useEffect(() => {
    (async function getFavourites() {
      try {
        const response = await axiosInstance.get("/api/v1/favourites");
        const data = response.data;
        if (data.length > 0) {
          const favoriteIds = data.map(
            (d: { journal: { _id: string } }) => d.journal._id
          );
          setFavourites(favoriteIds);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    })();
  }, []);

  const addToFavourites = async (id: string | null | undefined | React.Key) => {
    try {
      const response = await axiosInstance.post(`/api/v1/favourites/${id}`);
      
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className=" bg-white rounded-lg p-5 max-h-[300px] shadow-md">
      <Link href={`/dashboard/journal?id=${id}`}>
        <h2 className="font-semibold text-xl mb-2.5">
          {title}
        </h2>
        <p className="truncate mb-3">
          {details}
        </p>
      </Link>
      <div className="w-full border border-gray-200 my-2" />
      <div className="flex items-center justify-end">
        <HeartIcon
          onClick={() => addToFavourites(id)}
          className={`w-5 h-5 hover:fill-[#4184f3] hover:text-[#4184f3] cursor-pointer ${favourites.includes(
            id
          )
            ? "fill-[#4184f3] text-[#4184f3]"
            : ""}`}
        />
      </div>
    </div>
  );
};
export default JournalCard;
