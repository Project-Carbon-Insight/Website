import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="w-64 h-screen fixed top-0 left-0 border-r bg-white flex flex-col shadow-[4px_0_10px_-2px_rgba(122,122,122,0.2)]">
      <div className=" flex flex-col py-[10px] pt-[5px] px-[20px] h-full">
        <div className="px-[20px] mt-[10px]">
          <h1 className="sidebar-heading flex flex-row justify-center items-center pt-[5px]">
            <span className="text-[#57ae49]">Carbon</span> Insight
          </h1>
        </div>
        <div className="flex flex-col h-full justify-between">
          <div className="sidebar-links-container gap-[15px] flex flex-col mt-[10px] px-[20px] py-[20px]  ">
            <Link to={"/"}>
              <div className="sidebar-home-link group flex flex-row justify-start items-center gap-[10px] cursor-pointer  p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z"
                  />
                </svg>
                <span className="sidebar-home">Home</span>
              </div>
            </Link>
            <Link to={"/dashboard"}>
              <div className="sidebar-home-link  flex flex-row justify-start items-center gap-[10px] cursor-pointer p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 36 36"
                  className=""
                >
                  <path
                    fill="black"
                    d="m25.18 12.32l-5.91 5.81a3 3 0 1 0 1.41 1.42l5.92-5.81Z"
                    className="clr-i-outline clr-i-outline-path-1"
                  />
                  <path
                    fill="black"
                    d="M18 4.25A16.49 16.49 0 0 0 5.4 31.4l.3.35h24.6l.3-.35A16.49 16.49 0 0 0 18 4.25m11.34 25.5H6.66a14.43 14.43 0 0 1-3.11-7.84H7v-2H3.55A14.4 14.4 0 0 1 7 11.29l2.45 2.45l1.41-1.41l-2.43-2.46A14.4 14.4 0 0 1 17 6.29v3.5h2V6.3a14.47 14.47 0 0 1 13.4 13.61h-3.48v2h3.53a14.43 14.43 0 0 1-3.11 7.84"
                    className="clr-i-outline clr-i-outline-path-2"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <span className="sidebar-home">Dashboard</span>
              </div>
            </Link>
            <div className="sidebar-home-link group flex flex-row justify-start items-center gap-[10px] cursor-pointer p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="group-hover:stroke-white group-hover:fill-white"
              >
                <path
                  fill="none"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m5.253 4.196l-1.227.712c-.989.573-1.483.86-1.754 1.337C2 6.722 2 7.302 2 8.464v8.164c0 1.526 0 2.29.342 2.714c.228.282.547.472.9.535c.53.095 1.18-.282 2.478-1.035c.882-.511 1.73-1.043 2.785-.898c.48.065.937.293 1.853.748l3.813 1.896c.825.41.833.412 1.75.412H18c1.886 0 2.828 0 3.414-.599c.586-.598.586-1.562.586-3.49v-6.74c0-1.927 0-2.89-.586-3.49c-.586-.598-1.528-.598-3.414-.598h-2.079c-.917 0-.925-.002-1.75-.412L10.84 4.015C9.449 3.323 8.753 2.977 8.012 3S6.6 3.415 5.253 4.196M8 3v14.5m7-11v14"
                  color="black"
                />
              </svg>
              <span className="sidebar-home">Maps</span>
            </div>
            <div class="sidebar-home-link group flex flex-row justify-start items-center gap-[10px] cursor-pointer  p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="group-hover:fill-white"
              >
                <path
                  fill="black"
                  d="M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7z"
                />
              </svg>
              <span className="sidebar-home">Contact Us</span>
            </div>
            <div className="bottom-border-1 h-1 mt-[20px]"></div>
          </div>

          <div className="sidebar-bottom-links px-[20px] flex flex-col  ">
            <div className="sidebar-home-link group flex flex-row justify-start items-center gap-[10px] cursor-pointer  p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                />
              </svg>
              <span className="sidebar-home">Setting</span>
            </div>
            <div className="sidebar-home-link-logout group flex flex-row justify-start items-center gap-[10px] cursor-pointer  p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  stroke="#ef4444"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M22.5 4.742a13 13 0 1 1-13 0M16 3v10"
                />
              </svg>
              <span className="sidebar-home text-red-500">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
