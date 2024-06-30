import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";
import { AuthContext } from "../../contexts/MainContext";
import GeneralInfo from "./GeneralInfo";
import UserInputBox from "../UserInputBox/UserInputBox";
const Search = () => {
  const [showSearch, setShowSearch] = useState(true);
  // const [searchValue, setSearchValue] = useState("");
  const { user, inputSearch, setInputSearch } = useContext(AuthContext);
  useEffect(() => {
    if (inputSearch !== "") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  });
  const handleSearchParam = (event) => {
    setInputSearch(event.target.value);
    // alert(inputSearch);
  };
  return (
    <div className="w-[25%] hidden md:block ">
      <div className="md:fixed w-[20%] ">
        {/* search bar below */}
        <div className="w-full">
          <label htmlFor="searchBar" className="relative  w-full  ">
            {showSearch === true ? (
              <BsSearch className="absolute right-3 top-0 text-[19px] text-[#5d636c]" />
            ) : (
              <FiXCircle
                style={{ cursor: "pointer" }}
                onClick={() => setInputSearch("")}
                className="absolute right-3 top-0 text-[19px] text-[#5d636c]"
              />
            )}
            <input
              type="text"
              id="searchBar"
              onChange={(event) => handleSearchParam(event)}
              value={inputSearch}
              className="w-full pl-4 py-3 rounded-md bg-[#282c37] "
              placeholder="Search"
            />
          </label>
        </div>
        {/* rest content below*/}
        {!user && <GeneralInfo></GeneralInfo>}
        {user && <UserInputBox></UserInputBox>}
      </div>
    </div>
  );
};

export default Search;
