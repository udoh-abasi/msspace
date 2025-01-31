import React from "react";
import Header from "./Header";
import TopBar from "./TopBar";
import JobStatusFilter from "./JobStatusFilter";
import Sidebar from "./Sidebar";
import JobDetails from "./JobDetails";
import JobList from "./JobList";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col w-full ">
      {/* Header */}
      <div className="w-full bg-white">
        <Header />
      </div>

      <div className="bg-[#eceaf2] px-8 pb-14 pt-4">
        {/* TopBar */}
        <div className="w-full h-[60px] mb-10">
          <TopBar />
        </div>

        {/* Main Content */}
        <div className="flex flex-row flex-grow w-full">
          {/* Sidebar */}
          <div className="w-[326px]">
            <Sidebar />
          </div>

          {/* Content Area */}
          <div className="flex flex-col flex-grow">
            {/* Job Status Filter */}
            <div className="w-full h-[51px] flex justify-end mt-4">
              <JobStatusFilter />
            </div>

            {/* Job List and Details */}
            <div className="flex flex-row flex-grow h-auto mt-4">
              {/* Job List */}
              <div className="w-[487px]">
                <JobList />
              </div>

              {/* Job Details */}
              <div className="flex-grow h-auto ml-4">
                <JobDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
