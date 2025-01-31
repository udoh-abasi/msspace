import React from "react";

interface Job {
  title: string;
  status: string;
  organization: string;
  duration: string;
  location: string;
}

const JobList: React.FC = () => {
  // Sample data - in real app this would come from props or API
  const jobs: Job[] = [
    {
      title: "Internal Audit",
      status: "Completed",
      organization: "Cway Food and Beverage Nigeria Limited",
      duration: "Dec 12 - Dec 23, 2024",
      location: "Abuja, Nigeria",
    },
    {
      title: "Internal Audit",
      status: "Completed",
      organization: "Cway Food and Beverage Nigeria Limited",
      duration: "Dec 12 - Dec 23, 2024",
      location: "Abuja, Nigeria",
    },
    {
      title: "Internal Audit",
      status: "Completed",
      organization: "Cway Food and Beverage Nigeria Limited",
      duration: "Dec 12 - Dec 23, 2024",
      location: "Abuja, Nigeria",
    },
  ];

  return (
    <div className="w-full max-w-[487px] min-h-[600px] bg-[#eceaf2] p-4 overflow-y-auto">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="mb-4 p-6 bg-[#fafafa] rounded-[20px] hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="flex items-start gap-4">
            {/* Icon Container */}
            <div className="w-[71px] h-[68px] bg-[#4584b0] rounded-[15px] flex items-center justify-center">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/vector.png"
                alt="Job Icon"
                className="w-[33px] h-[33px]"
              />
            </div>

            {/* Content Container */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#444040] font-['Heebo']">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium text-[#444040] font-['Heebo']">
                      {job.status}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#18b755]" />
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <img
                    src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-13.png"
                    alt="More"
                    className="w-8 h-8"
                  />
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-[11px] font-medium text-black font-['Heebo']">
                    Organization name
                  </p>
                  <p className="text-[10px] font-medium text-[#6f696a] font-['Heebo']">
                    {job.organization}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-medium text-black font-['Heebo']">
                    Project duration
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-medium text-[#6f696a] font-['Heebo']">
                      {job.duration}
                    </p>
                    <div className="flex items-center gap-1">
                      <img
                        src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-67-2.png"
                        alt="Location"
                        className="w-[7px] h-[9px]"
                      />
                      <span className="text-[10px] font-medium text-[#6f696a] font-['Heebo']">
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
