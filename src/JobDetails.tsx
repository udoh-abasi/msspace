import React from "react";

interface JobDetailsProps {
  title?: string;
  location?: string;
  timestamp?: string;
  companyName?: string;
  companyLogo?: string;
  description?: string;
  auditCriteria?: string;
  auditScope?: string;
  jobRole?: string;
  date?: string;
  onAccept?: () => void;
  onReject?: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({
  title = "Internal Audit",
  location = "Abuja, Nigeria",
  timestamp = "13 Min ago",
  companyName = "Cway Food and Beverage Nigeria Limited",
  companyLogo = "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/image-25.png",
  description = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  auditCriteria = "ISO 9001: 2015 Standard, ISO 22000:2018 Standard, Wellcome Quality Manual, Risk Assessment Matrix, Quality Objectives, Standard Operating ......",
  auditScope = "Coverage of all the activities (Food Safety and QMS) in the manufacturing and distribution of wellcome snack within Northern Nigeria",
  jobRole = "Auditor",
  date = "24th Dec 24",
  onAccept = () => {},
  onReject = () => {},
}) => {
  return (
    <div className="w-full min-w-[64px] max-w-[800px] mx-auto bg-white rounded-[30px] overflow-hidden shadow-lg">
      {/* Header Section */}
      <div className="w-full h-[233px] bg-[#4584b0] p-6 text-white">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="text-sm">
            Let's make the right match. Fill out the form to explore talent or
            opportunities that align perfectly with your goals
          </p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-67-6.png"
                alt="location"
                className="w-4 h-4"
              />
              <span className="text-sm font-medium">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-67-5.png"
                alt="time"
                className="w-4 h-4"
              />
              <span className="text-sm font-medium">{timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Company Info */}
        <div className="flex items-center gap-8 mb-8">
          <img
            src={companyLogo}
            alt="company logo"
            className="w-[139px] h-[139px]"
          />
          <h2 className="text-2xl font-semibold text-[#0a0a0b]">
            {companyName}
          </h2>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-sm text-[#0a0a0b]">{description}</p>
        </div>

        {/* Audit Criteria */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Audit Criteria</h3>
          <p className="text-sm text-[#0a0a0b]">{auditCriteria}</p>
        </div>

        {/* Audit Scope */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Audit Scope</h3>
          <p className="text-sm text-[#0a0a0b]">{auditScope}</p>
        </div>

        {/* Job Role */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Job Role</h3>
          <p className="text-sm text-[#0a0a0b]">{jobRole}</p>
        </div>

        {/* Date */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Date</h3>
          <p className="text-sm text-[#0a0a0b]">{date}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onAccept}
            className="px-6 py-3 bg-[#eceaf2] rounded text-[#0a0a0b] hover:bg-[#d8d6e2] transition-colors"
          >
            Accept
          </button>
          <button
            onClick={onReject}
            className="px-6 py-3 bg-[#eceaf2] rounded text-[#0a0a0b] hover:bg-[#d8d6e2] transition-colors"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
