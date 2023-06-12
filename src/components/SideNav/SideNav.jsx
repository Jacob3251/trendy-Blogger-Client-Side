// import LinkAnalyzer from "../Shared/LinkAnalyzer";

import { FiHash, FiUsers } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
const SideNav = () => {
  return (
    <div className="w-[20%] lg:w-[25%] hidden md:block">
      {/* <LinkAnalyzer></LinkAnalyzer> */}
      {/* logo below */}
      <div className="hidden md:block">
        <div className="font-Kablam flex space-x-2 text-[28px] justify-start">
          <div className="-rotate-2">Trendy</div>

          <div className="rotate-2"> Blogger</div>
        </div>
        <div className="divider h-[1px] my-6 border-white"></div>
      </div>

      {/* Post Nav Options */}
      <div className="font-robo text-[18px] space-y-6 pl-5">
        <div
          className="flex justify-start items-center space-x-2 text-[#8c8dff]"
          style={{ cursor: "pointer" }}
        >
          <FiHash />
          <span>Explore</span>
        </div>
        <div
          className="flex justify-start items-center space-x-2 text-white"
          style={{ cursor: "pointer" }}
        >
          <FiUsers />
          <span>Local</span>
        </div>
        <div
          className="flex justify-start items-center space-x-2 text-white"
          style={{ cursor: "pointer" }}
        >
          <BsNewspaper />
          <span>News</span>
        </div>
      </div>
      {/* Login Options */}
      <div className="flex flex-col justify-start items-center font-robo text-[16px] space-y-2 py-0 mt-5">
        <div className="bg-[#595aff] font-semibold flex hover:bg-opacity-80  justify-center items-center px-2 py-3 w-full rounded-md tracking-wide">
          Create Account
        </div>
        <div className=" flex justify-center items-center px-2 py-3 w-full rounded-md tracking-wide border-[2px] border-[#8c8dff] text-[#8c8dff] hover:text-white hover:border-[#595aff] hover:bg-[#595aff]">
          Login
        </div>
      </div>
    </div>
  );
};

export default SideNav;
