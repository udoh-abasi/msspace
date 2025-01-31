import React from "react";

interface NavItem {
  icon: string;
  label: string;
  isActive?: boolean;
}

const Sidebar: React.FC = () => {
  const navItems: NavItem[] = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-2.png",
      label: "Dashboard",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/页面-1.png",
      label: "Departments",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-3.png",
      label: "Activities",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-4.png",
      label: "Jobs",
      isActive: true,
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-4.png",
      label: "Affliated Professionals",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-5.png",
      label: "Notification",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-6.png",
      label: "Profile",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-6.png",
      label: "Settings",
    },
  ];

  const departments = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-7.png",
      label: "Finance",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-8.png",
      label: "Audit",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/group-68-9.png",
      label: "Gap Analysis",
    },
  ];

  return (
    <div className="w-full max-w-[326px] min-h-screen bg-[#dde4ef] rounded-[20px] p-6">
      {/* Main Navigation */}
      <nav className="space-y-4">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors ${
              item.isActive ? "bg-[#1c2458] text-white" : "text-[#1c2458]"
            }`}
          >
            <img src={item.icon} alt="" className="w-5 h-5" />
            <span className="font-heebo text-sm">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Departments Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#444040] font-heebo text-lg font-medium">
            Departments
          </h2>
          <button className="text-[#444040] font-heebo text-sm font-medium hover:text-[#1c2458]">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-[60px] p-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <img src={dept.icon} alt="" className="w-6 h-6" />
              <span className="font-heebo text-base font-semibold text-[#444040]">
                {dept.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
