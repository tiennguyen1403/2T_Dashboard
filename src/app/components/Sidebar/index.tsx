import { Add, Cup, Element3, Message, Moon, Setting2, TickSquare } from "iconsax-react";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="py-2 px-4 pb-6 flex items-center justify-start gap-[9.28px] cursor-pointer">
        <img src="./HiphonicLogo.png" />
        <h1 className="text-[#0F172A] text-[23.2px] font-bold leading-[29px] tracking-[-0.29px]">
          Hiphonic
        </h1>
      </div>
      <div className="w-full h-px bg-[#F1F5F9]" />
      <div className="flex-1">
        <div className="pt-6">
          <p className="text-[#94A3B8] text-xs font-bold leading-[19.2px] tracking-[1px] ml-4">
            MENU
          </p>
          <ul className="py-4">
            <li className="menu-item">
              <Element3 size="22" />
              <span>Dashboard</span>
            </li>
            <li className="menu-item">
              <TickSquare size="22" />
              <span>My Tasks</span>
            </li>
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
        <div className="w-full h-px bg-[#F1F5F9]" />
        <div className="pt-6">
          <div className="flex items-center justify-between">
            <p className="text-[#94A3B8] text-xs font-bold leading-[19.2px] tracking-[1px] ml-4">
              PROJECTS
            </p>
            <button>
              <Add size="22" />
            </button>
          </div>
          <ul className="py-4">
            <li className="sidebar-project-item">
              <div className="h-3 w-3 rounded-full bg-additional-indigo" />
              <span>Website Design</span>
            </li>
            <li className="sidebar-project-item">
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <span>SEO Analytics</span>
            </li>
            <li className="sidebar-project-item">
              <div className="h-3 w-3 rounded-full bg-additional-emerald" />
              <span>Hiphonic App</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-12 flex items-center px-4 gap-4 text-grey-scale-500 text-sm font-medium leading-[22.4px] tracking-[0.2px] hover:text-primary-500 hover:font-bold hover:bg-grey-scale-50 cursor-pointer transition-all rounded-xl">
        <Setting2 size="22" />
        <span className="flex-1">Settings</span>
      </div>
      <div className="w-full h-px bg-[#F1F5F9] my-2" />
      <div className="h-12 flex items-center px-4 gap-4 text-grey-scale-500 text-sm font-medium leading-[22.4px] tracking-[0.2px] hover:text-primary-500 hover:font-bold hover:bg-grey-scale-50 cursor-pointer transition-all rounded-xl">
        <Moon size="22" />
        <span className="flex-1">Dark Mode</span>
      </div>
    </div>
  );
};

export default Sidebar;
