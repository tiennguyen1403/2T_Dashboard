"use client";
import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen flex">
      <div className="bg-white w-72 p-4 shadow-sidebar border-r-2">
        <Link href="/" className="flex items-center gap-3 hover:text-black">
          <img src="./logo.png" width={60} />
          <h1 className="text-3xl font-bold font-dancing-script flex-1">2T Dashboard</h1>
        </Link>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-white h-[92px] px-8 border-b-2">
          <div className="h-full flex items-center justify-between">
            <h3 className="heading-3 flex-1">Dashboard</h3>
          </div>
        </div>
        <div className="flex-1">
          <main className="py-6 px-8 bg-grey-scale-50 h-full overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
