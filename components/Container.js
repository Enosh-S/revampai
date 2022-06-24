import {
  RiLayout5Fill,
  RiFileTextFill,
  RiCalendarFill,
  RiVipDiamondFill,
  RiMenu4Fill,
  RiNotification3Line,
} from "react-icons/ri";
import { ImPilcrow } from "react-icons/im";
import { useState } from "react";

export default function Container() {
  const SidebarIcon = ({ icon, text = "tooltip" }) => (
    <div className="sidebar-icon">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
  const Divider = () => <hr className="sidebar-hr" />;
  

  

  return (
    <div className="flex">
      <aside className="flex flex-col h-screen bg-[#0d1b2a] w-16 fixed top-0 left-0" aria-label="Sidebar">
        <SidebarIcon icon={<RiLayout5Fill size="28" />} />

        <Divider />

        <div className="mt-5 space-y-3 my-auto">
          <SidebarIcon icon={<ImPilcrow size="27" />} />

          <SidebarIcon icon={<RiFileTextFill size="28" />} />

          <SidebarIcon icon={<RiCalendarFill size="28" />} />
        </div>

        <div className="mb-10 space-y-3">
          <SidebarIcon icon={<RiVipDiamondFill size="28" />} />
        </div>
      </aside>
      <div className="relative flex ml-16 bg-gray-400 dark:bg-[#0d1b2a] h-16 w-screen items-center  justify-between  ">
        <div id="navbar-toggle" className="rounded-md">
          <button type=" toggle " className="lg:hidden text-white">
            <RiMenu4Fill size="22" />
          </button>
        </div>
        <div>
            <h1 className="text-xl md:text-lg font-bold text-white tracking-tight">
                Revamp AI
            </h1>
        </div>
        <div id="notifications" className="mr-5">
        <button type=" toggle " className="text-white">
            <RiNotification3Line  size="22" />
          </button>
        </div>
      </div>
    </div>
  );
  }
