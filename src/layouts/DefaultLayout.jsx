import Search from "../components/Search/Search";
import Explore from "../components/Explore/Explore";
import SideNav from "../components/SideNav/SideNav";
import { useContext } from "react";
import { AuthContext } from "../contexts/MainContext";

const DefaultLayout = () => {
  const { userType } = useContext(AuthContext);
  return (
    <div className="md:pt-5 w-full md:w-[85%] mx-auto">
      {console.log(userType)}
      <div className="flex justify-between items-start w-full ">
        <Search></Search>
        <Explore></Explore>
        <SideNav></SideNav>
      </div>
    </div>
  );
};

export default DefaultLayout;
