"use client";
import React from "react";
import Link from "next/link";
import { Cup, Element3, Message, TickSquare } from "iconsax-react";

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
        <div className="py-6">
          <p className="text-[#94A3B8] text-xs font-bold leading-[19.2px] tracking-[1px] ml-4">
            MENU
          </p>
          <ul className="py-4">
            <Link href="/">
              <li className="menu-item">
                <Element3 size="22" />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link href="/tasks">
              <li className="menu-item">
                <TickSquare size="22" />
                <span>My Tasks</span>
              </li>
            </Link>
            <li className="menu-item">
              <Message size="22" />
              <span>Message</span>
            </li>
            <li className="menu-item">
              <Cup size="22" />
              <span>Goals</span>
            </li>
          </ul>
        </div>
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
