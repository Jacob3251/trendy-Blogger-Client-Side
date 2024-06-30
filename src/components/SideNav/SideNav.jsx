// import LinkAnalyzer from "../Shared/LinkAnalyzer";

import { FiHash, FiUsers } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../contexts/MainContext";
import { useNavigate } from "react-router-dom";
const SideNav = () => {
  const { user, setFeedType, feedType } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="w-[20%] lg:w-[25%] hidden md:block">
      <div className="md:fixed w-[22%]">
        {/* <LinkAnalyzer></LinkAnalyzer> */}
        {/* logo below */}
        <div className="hidden md:block">
          <div className="font-Kablam  text-[28px] ">
            <div className="-rotate-2 text-center">Difny . Com</div>
          </div>
          <div className="divider h-[1px] my-3 border-white"></div>
        </div>

        {/* Post Nav Options */}
        <div className="font-robo text-[18px] space-y-6 pl-5">
          <div
            className={`flex justify-start items-center space-x-2  ${
              feedType === 1 ? "text-[#8c8dff]" : "text-white"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setFeedType(1)}
          >
            <FiHash />
            <span>Explore</span>
          </div>
          <div
            className={`flex justify-start items-center space-x-2  ${
              feedType === 2 ? "text-[#8c8dff]" : "text-white"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setFeedType(2)}
          >
            <FiUsers />
            <span>People</span>
          </div>

          <div
            className={`flex justify-start items-center space-x-2  ${
              feedType === 3 ? "text-[#8c8dff]" : "text-white"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setFeedType(3)}
          >
            <FiUsers />
            <span>Favourites</span>
          </div>

          <div
            className={`flex justify-start items-center space-x-2  ${
              feedType === 4 ? "text-[#8c8dff]" : "text-white"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => setFeedType(4)}
          >
            <BsNewspaper />
            <span>News</span>
          </div>
        </div>
        {/* Login Options */}
        {!user && (
          <div className="flex flex-col justify-start items-center font-robo text-[16px] space-y-2 py-0 mt-5">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/auth/register")}
              className="bg-[#595aff] font-semibold flex hover:bg-opacity-80  justify-center items-center px-2 py-3 w-full rounded-md tracking-wide"
            >
              Create Account
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/auth/login")}
              className=" flex justify-center items-center px-2 py-3 w-full rounded-md tracking-wide border-[2px] border-[#8c8dff] text-[#8c8dff] hover:text-white hover:border-[#595aff] hover:bg-[#595aff]"
            >
              Login
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
