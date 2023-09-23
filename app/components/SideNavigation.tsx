"use client";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type SideNavigationProps = {};

const SideNavigation: React.FC<SideNavigationProps> = () => {
  const links = ["Home", "Add", "Favourites", "Calendar"];
  const [active, setActive] = useState("");
  const path = usePathname().split("/");
  const activeLink = path[path.length - 1];

  

  return <nav className="w-24 fixed top-12 bottom-12 left-0 flex flex-col items-center py-8 bg-white gap-y-8">
      <Link className={`${activeLink === "dashboard" ? "text-[#4184F3] font-bold" : ""} flex flex-col items-center`} href="/dashboard">
        <HomeIcon className={`${activeLink === "dashboard" ? "fill-[#4184f3]" : ""} h-6 w-6`} />
        Home
      </Link>

      <Link className={`${activeLink === "add" ? "text-[#4184F3] font-bold" : ""} flex flex-col items-center`} href="/dashboard/add">
        <PlusIcon className={`${activeLink === "add" ? "fill-[#4184f3]" : ""} h-6 w-6`} />
        Add
      </Link>

      <Link className={`${activeLink === "favourites" ? "text-[#4184F3] font-bold" : ""} flex flex-col items-center`} href="/dashboard/favourites">
        <HeartIcon className={`${activeLink === "favourites" ? "fill-[#4184f3]" : ""} h-6 w-6`} />
        Favourites
      </Link>

      {/**<Link className={`${activeLink === "calendar" ? "text-[#4184F3] font-bold" : ""} flex flex-col items-center`} href="/dashboard/calendar">
        <CalendarIcon className={`${activeLink === "calendar" ? "fill-[#4184f3]" : ""} h-6 w-6`} />
        Calendar
    </Link>
*/}
    </nav>;
};
export default SideNavigation;
