import React from "react";

const DashboardNavbar = () => {
  return (
    <>
      <div className="dashboard-navbar-wrapper h-[70px]  bg-white flex flex-row items-center justify-between pl-[20px]">
        <div className="dashboard-navbar-left pl-[20px]">
          <div className="dashboard-navbar-input flex flex-row component-shadow justify-center items-center py-[7px] bg-[#f5f6fa] rounded-[30px] gap-[20px] px-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
              />
            </svg>
            <input
              type="text"
              className="bg-[#f5f6fa] w-[450px]"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="dashboard-navbar-right flex flex-row justify-center items-center gap-[20px] pr-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M225.29 165.93C216.61 151 212 129.57 212 104a84 84 0 0 0-168 0c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.07 20.07A19.77 19.77 0 0 0 48 196h36.18a44 44 0 0 0 87.64 0H208a19.77 19.77 0 0 0 17.31-10a20.08 20.08 0 0 0-.02-20.07M128 212a20 20 0 0 1-19.6-16h39.2a20 20 0 0 1-19.6 16m-73.34-40C63.51 154 68 131.14 68 104a60 60 0 0 1 120 0c0 27.13 4.48 50 13.33 68Z"
            />
          </svg>
          <div className="r rounded-full bg-slate-400 p-[25px]"></div>
          <div className="flex flex-col">
            <span className="user">Username</span>
            <span className="user-sub">Admin</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
