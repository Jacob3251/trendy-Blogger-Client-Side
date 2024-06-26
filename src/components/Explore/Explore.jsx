import { FiHash, FiUsers, FiXCircle } from "react-icons/fi";
import PostNav from "../PostNav/PostNav";
import IndividualPost from "../IndividualPost/IndividualPost";
import { useContext, useEffect, useState } from "react";
import { BsNewspaper, BsSearch } from "react-icons/bs";
import { FaEllipsisH, FaPowerOff, FaUserSecret } from "react-icons/fa";
import { AuthContext } from "../../contexts/MainContext";
import { useNavigate } from "react-router-dom";
const Explore = () => {
  const [showSearch, setShowSearch] = useState(true);
  const { user, logOut, feedType } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (searchValue !== "") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  });
  return (
    <div className="relative w-full md:w-[48%]  md:rounded-t-md h-full overflow-hidden bg-[#282c37] ">
      {/* small device view logo portion below */}
      <div className="md:hidden block py-2 px-2 border-b-[1px] border-[#40434d]">
        <div className="fixed top-0 left-0 z-50 bg-[#282c37] w-full  pr-3 py-2">
          <div className="flex justify-between px-1">
            {/* logo below */}
            <div className="font-Kablam flex space-x-2 ml-2 text-[26px] justify-start items-end">
              <div className="-rotate-2">Difny</div>

              <div className="rotate-2 text-[18px]">.Com</div>
            </div>
            {/* md device Login Option */}
            <div className="flex justify-between items-center font-robo text-[11px] py-0">
              {user === null ? (
                <div className="flex space-x-2">
                  <div
                    onClick={() => navigate("/auth/register")}
                    className="bg-[#595aff] font-semibold flex hover:bg-opacity-80  justify-center items-center px-2 h-[32px] rounded-md tracking-tighter"
                  >
                    Create Account
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/auth/login")}
                    className=" flex justify-center items-center px-2 h-[32px] rounded-md tracking-tighter border-[2px] border-[#8c8dff] text-[#8c8dff] hover:text-white hover:border-[#595aff] hover:bg-[#595aff]"
                  >
                    Login
                  </div>
                </div>
              ) : (
                <div className="flex justify-center  items-center  space-x-4 text-lg">
                  <FaUserSecret className="text-[#8c8dff]">
                    <button></button>
                  </FaUserSecret>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="divider h-[1px] mt-6 border-white"></div> */}
      </div>
      <div className="flex bg-[#282c37] ">
        {/* bg-[#1f232b] */}
        <div className="w-[86%] md:w-full bg-[#1f232b]">
          <div className="">
            <div className="bg-[#313543] pt-8 md:pt-0">
              <h1 className="px-5 py-3 text-[18px] font-semibold font-robo flex justify-start items-center">
                {feedType === 1 && (
                  <>
                    <FiHash /> Explore
                  </>
                )}
                {feedType === 2 && (
                  <>
                    <FiHash /> People
                  </>
                )}
                {feedType === 3 && (
                  <>
                    <FiHash /> Favourites
                  </>
                )}
                {feedType === 4 && (
                  <>
                    <FiHash /> News
                  </>
                )}
              </h1>
            </div>
            {/* small device postnav */}
            <div className="md:hidden block">
              <PostNav></PostNav>
            </div>
          </div>
          {/*md device search bar below */}
          <div className="w-[96%]  mx-auto block md:hidden my-2">
            <label htmlFor="searchBar" className="relative  w-full  ">
              {showSearch === true ? (
                <BsSearch className="absolute right-3 top-0 text-[19px] text-[#5d636c]" />
              ) : (
                <FiXCircle
                  style={{ cursor: "pointer" }}
                  onClick={() => setSearchValue("")}
                  className="absolute right-3 top-0 text-[19px] text-[#5d636c]"
                />
              )}
              <input
                type="text"
                id="searchBar"
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
                className="w-full pl-4 py-3 rounded-md bg-[#282c37] "
                placeholder="Search"
              />
            </label>
          </div>
          {/* lg device postnav */}
          <div className="hidden md:block">
            <PostNav></PostNav>
          </div>
          {/* scroll-container */}
          <div className="w-full ml-1 mx-auto h-[80vh] overflow-y-scroll">
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
            <IndividualPost></IndividualPost>
          </div>
        </div>
        {/* small md secondary sidenav */}
        {/* bg-[#282c37] */}
        <div className=" block md:hidden">
          <div className="font-robo text-[18px] fixed  bg-[#282c37]  w-[12%] right-0 top-12 pb- rounded-l-md space-y-5 px-2 py-2 mt-3">
            <div
              className="hover:bg-blue-500 flex justify-center  text-[#8c8dff]"
              style={{ cursor: "pointer" }}
            >
              <FiHash />
              {/* <span>Explore</span> */}
            </div>
            <div
              className="hover:bg-blue-500 flex justify-center text-white"
              style={{ cursor: "pointer" }}
            >
              <FiUsers />
              {/* <span>Local</span> */}
            </div>
            <div
              className="hover:bg-blue-500 flex justify-center text-white"
              style={{ cursor: "pointer" }}
            >
              <BsNewspaper />
              {/* <span>News</span> */}
            </div>
            <div
              className="hover:bg-blue-500 flex justify-center text-white"
              style={{ cursor: "pointer" }}
            >
              <FaEllipsisH />
              {/* <span>About</span> */}
            </div>
            {user && (
              <div
                onClick={() => logOut()}
                className="hover:bg-blue-500 flex justify-center text-white"
                style={{ cursor: "pointer" }}
              >
                <FaPowerOff className="text-red-500">
                  <button></button>
                </FaPowerOff>
                {/* <span>About</span> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
