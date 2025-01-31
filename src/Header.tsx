import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Header: React.FC = () => {
  const navItems = [
    { text: "Certification", href: "#" },
    { text: "Mentorship", href: "#" },
    { text: "Professional", href: "#" },
    { text: "Learning", href: "#" },
  ];

  return (
    <header className="w-full h-[90px] flex px-14">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z5xIt-xZjZ9DnCA8/ms-space.png"
          alt="MS Space Logo"
          className="w-[82px] h-[29px] md:w-[212px] md:h-[39px] object-contain"
        />

        {/* Navigation Links */}
        <div className="md:flex gap-x-12">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-black font-heebo text-[16px] hover:text-gray-600 transition-colors"
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* MS Space Button */}
        <div className="flex items-center">
          <button
            type="button"
            className="bg-[#e7e6ed] rounded-[60px] px-4 py-2 md:px-6 md:py-3 min-w-[120px] md:min-w-[161px] h-[40px] md:h-[51px] flex items-center justify-center"
          >
            <span className="text-[#0a0a0b] font-heebo font-medium text-[14px] flex items-center justify-center gap-x-1">
              Msspace <FaAngleRight />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
