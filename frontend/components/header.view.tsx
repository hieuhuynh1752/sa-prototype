"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="w-full h-fit bg-zinc-400 fixed top-0 z-10 flex px-16 gap-8">
      <Link
        href="/"
        className={`p-4 h-fit text-white font-semibold border border-transparent transition-colors hover:text-zinc-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${pathname === "/" ? "bg-gray-100 text-zinc-600" : ""}`}
      >
        Overview
      </Link>
      <Link
        href="/profiles"
        className={`p-4 h-fit text-white font-semibold border border-transparent transition-colors hover:text-zinc-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${pathname === "/profiles" ? "bg-gray-100 text-zinc-600" : ""}`}
      >
        Profiles
      </Link>
    </div>
  );
}
