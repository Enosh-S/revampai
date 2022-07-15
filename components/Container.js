import {
  RiLayout5Fill,
  RiFileTextFill,
  RiCalendarFill,
  RiVipDiamondFill,
  RiMenu4Fill,
  RiCloseFill
} from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { ImPilcrow } from "react-icons/im";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Container({ children }) {
  const { data: session } = useSession();

  const SidebarIcon = ({ icon, text }) => (
    <div className="sidebar-icon flex ">
      <div>{icon}</div>
      <h2 className="flex flex-1 first-letter:font-sans text-sm text-slate-200 pl-2">
        {text}
      </h2>
    </div>
  );
  const Divider = () => <hr className="sidebar-hr" />;
  const router = useRouter();

  return (
    <div className="drawer drawer-mobile">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mb-6">
        <div className="w-full navbar bg-gray-200 dark:bg-neutral/70 h-16 justify-center sticky z-50 top-0 text-base-content backdrop-blur-sm transition-all duration-100  border-b border-b-base-300 ">
          <div className="navbar-start">
            <label
              htmlFor="side-drawer"
              className="btn btn-circle btn-ghost dark:text-white text-gray-700 lg:hidden"
            >
              <RiMenu4Fill size="22" />
            </label>
          </div>
          <div className="navbar-center">
          <div className="lg:hidden flex items-center justify-center mt-3 ">
            <div className=" min-w-max cursor-pointer">
              <Image
                width={45}
                height={45}
                layout="fixed"
                alt="Revampai logo"
                src="/Revampai.svg"
                priority="true"
              />
            </div>
            
            <h1 className=" font-sans lg:ml-0 font-bold tracking-tight text-xl text-white">
              Revamp AI
            </h1>
          </div>
          </div>
          <div className="navbar-end">
            <div>
              <label className="swap swap-rotate btn-circle btn-ghost dark:text-white text-gray-700">
                <input type="checkbox" />
                <svg
                  className="swap-on fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            {!session && (
              <div>
                <button
                  className="  text-neutral mx-2 btn-sm btn-primary rounded-md text-sm font-semibold tracking-tight  "
                  onClick={() => router.push("/signin")}
                >
                  Sign in
                </button>
              </div>
            )}
            {session && (
              <label
                className="btn btn-circle btn-ghost dark:text-white text-gray-700"
                onClick={signOut}
              >
                <FiLogOut size="22" />
              </label>
            )}
          </div>
        </div>
        <div>{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="side-drawer"
          className="drawer-overlay lg:hidden"
        ></label>
        <div
          className=" flex flex-col float-right h-screen w-48
                  bg-white dark:bg-base-300 shadow-lg"
        > 
          <div className="lg:flex items-center justify-center mt-3 hidden">
            <div className=" min-w-max cursor-pointer">
              <Image
                width={45}
                height={45}
                layout="fixed"
                alt="Revampai logo"
                src="/Revampai.svg"
                priority="true"
              />
            </div>
            
            <h1 className=" font-sans lg:ml-0 font-bold tracking-tight text-xl text-white">
              Revamp AI
            </h1>
          </div>
          <div className="flex justify-end my-2 lg:hidden">
          <label
              htmlFor="side-drawer"
              className="btn btn-circle btn-ghost dark:text-white text-gray-700 "
            >
              <RiCloseFill size="22" />
            </label>
            </div>
          <Divider />
          <div className="flex flex-col space-y-1 mt-3 mb-auto">
            <Link href="/" passHref>
              <a>
                {" "}
                <SidebarIcon
                  icon={<RiLayout5Fill size="22" />}
                  text="Dashboard"
                />{" "}
              </a>
            </Link>
            <Link href="/newdoc" passHref>
              <div>
                <a>
                  {" "}
                  <SidebarIcon
                    icon={<ImPilcrow size="20" />}
                    text="New Document"
                  />
                </a>
              </div>
            </Link>
            <Link href="/docshistory" passHref>
              <div>
                <a>
                  {" "}
                  <SidebarIcon
                    icon={<RiFileTextFill size="22" />}
                    text="My Documents"
                  />{" "}
                </a>
              </div>
            </Link>
            <Link href="/schedule" passHref>
              <div>
                <a>
                  {" "}
                  <SidebarIcon
                    icon={<RiCalendarFill size="22" />}
                    text="Schedule"
                  />{" "}
                </a>
              </div>
            </Link>
            <Link href="/pricing" passHref>
              <div>
                <a>
                  {" "}
                  <SidebarIcon
                    icon={<RiVipDiamondFill size="22" />}
                    text="Premium"
                  
                  />{" "}
                </a>
              </div>
            </Link>

            {session && (
              
              <div className=" items-center flex ml-5">
                <div className="avatar cursor-pointer">
                  <div className="rounded-full mt-5 ring ring-secondary ring-offset-gray-900 hover:opacity-80 ring-offset-2">
                    <Image
                      className="rounded-full"
                      src={session.user.image}
                      width={38}
                      height={38}
                      alt="user image"
                      priority="false"
                    />
                  </div>
                  
                </div>
                <div className="flex flex-col space-y-1 ml-3 mt-5">
                    <h4 className="text-sm inline-flex-grow font-sans font-normal text-slate-200 ">{session.user.name}</h4>
                    <p className="text-xs font-sans text-slate-500">Free ⭐</p>
                  </div>
              </div>
              
            )}
            {!session && <div />}
          </div>
        </div>
      </div>
    </div>
  );
}
