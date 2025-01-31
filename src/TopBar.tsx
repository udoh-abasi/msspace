import React from "react";

interface TopBarProps {
  userName?: string;
  notificationCount?: number;
}

const TopBar: React.FC<TopBarProps> = ({
  userName = "Msspace",
  notificationCount = 16,
}) => {
  return (
    <div className="flex items-center justify-between w-full h-[60px] px-5 bg-[#eceaf2]">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 h-[44px] bg-[#c7c4d1] rounded-[60px] hover:bg-[#b8b4c4] transition-colors">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-67.png"
            alt="workspace"
            className="w-[13px] h-4"
          />
          <span className="text-[#0a0a0b] text-xs font-medium">Workspace</span>
        </button>

        <button className="flex items-center gap-2 px-4 h-[44px] bg-[#c7c4d1] rounded-[60px] hover:bg-[#b8b4c4] transition-colors">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group.png"
            alt="training"
            className="w-3.5 h-3.5"
          />
          <span className="text-[#0a0a0b] text-xs font-medium">Training</span>
        </button>

        <button className="flex items-center gap-2 px-4 h-[44px] bg-[#c7c4d1] rounded-[60px] hover:bg-[#b8b4c4] transition-colors">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-2.png"
            alt="certification"
            className="w-3.5 h-3.5"
          />
          <span className="text-[#0a0a0b] text-xs font-medium">
            Certification
          </span>
        </button>
      </div>

      {/* Center Section */}
      <h3 className="text-[20px] text-[#444040] font-semibold">
        Hello {userName}
      </h3>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 h-[44px] bg-[#c7c4d1] rounded-[29px] hover:bg-[#b8b4c4] transition-colors">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/vector.png"
            alt="share"
            className="w-4 h-4"
          />
          <span className="text-[#0a0a0b] text-xs font-medium">Share</span>
        </button>

        <button className="flex items-center gap-2 px-4 h-[44px] bg-[#c7c4d1] rounded-[60px] hover:bg-[#b8b4c4] transition-colors">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-3.png"
            alt="hire"
            className="w-4 h-4"
          />
          <span className="text-[#0a0a0b] text-xs font-medium">
            Hire Professionals
          </span>
        </button>

        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-[44px] h-[44px] rounded-full bg-[#c7c4d1] flex items-center justify-center">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-10.png"
                alt="notification"
                className="w-[22px] h-5 cursor-pointer"
              />
              {notificationCount > 0 && (
                <span className="absolute -top-[2px] right-[3px] text-[12px] font-extrabold text-[#d03328]">
                  {notificationCount}
                </span>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="w-[44px] h-[44px] rounded-full bg-[#c7c4d1] flex items-center justify-center">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-11.png"
                alt="profile"
                className="w-[44px] h-[44px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
