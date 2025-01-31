import React, { useState } from "react";

interface JobStatusFilterProps {
  onFilterChange?: (status: string) => void;
}

const JobStatusFilter: React.FC<JobStatusFilterProps> = ({
  onFilterChange,
}) => {
  const [selectedStatus, setSelectedStatus] = useState("assigned");

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    onFilterChange?.(status);
  };

  return (
    <div className="w-full max-w-[380px] h-[44px] bg-[#fafafa] rounded-[60px] flex items-center justify-between px-4">
      <div
        className={`h-[37px] px-4 flex items-center justify-center rounded-[60px] cursor-pointer transition-all duration-200 ${
          selectedStatus === "assigned" ? "bg-[#e4e2ea]" : "hover:bg-[#f0f0f0]"
        }`}
        onClick={() => handleStatusChange("assigned")}
      >
        <span className="text-[#444040] font-light text-sm font-['Heebo']">
          Job Assigned
        </span>
      </div>

      <div
        className={`h-[37px] px-4 flex items-center justify-center rounded-[60px] cursor-pointer transition-all duration-200 ${
          selectedStatus === "accepted" ? "bg-[#e4e2ea]" : "hover:bg-[#f0f0f0]"
        }`}
        onClick={() => handleStatusChange("accepted")}
      >
        <span className="text-[#444040] font-light text-sm font-['Heebo']">
          Jobs Accepted
        </span>
      </div>

      <div
        className={`h-[37px] px-4 flex items-center justify-center rounded-[60px] cursor-pointer transition-all duration-200 ${
          selectedStatus === "rejected" ? "bg-[#e4e2ea]" : "hover:bg-[#f0f0f0]"
        }`}
        onClick={() => handleStatusChange("rejected")}
      >
        <span className="text-[#444040] font-light text-sm font-['Heebo']">
          Job Rejected
        </span>
      </div>
    </div>
  );
};

export default JobStatusFilter;
