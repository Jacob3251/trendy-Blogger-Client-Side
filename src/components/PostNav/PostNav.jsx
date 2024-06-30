import { useContext } from "react";
import { AuthContext } from "../../contexts/MainContext";

const PostNav = () => {
  const { feedType, setFeedType } = useContext(AuthContext);
  return (
    //
    <div className=" w-full ml-1 md:ml-0 px-2 md:px-0">
      <ul className="flex space-x-2 md:space-x-5 justify-evenly px-2 py-3 font-robo tracking-tighter md:tracking-normal">
        <li
          className={` w-full flex justify-center px-1 py-1  duration-500 rounded-md ${
            feedType === 1
              ? "bg-[#2a303c]"
              : "bg-transparent hover:bg-[#2a303c]"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setFeedType(1)}
        >
          Posts
        </li>
        <li
          className={` w-full flex justify-center px-1 py-1 duration-500 rounded-md ${
            feedType === 2
              ? "bg-[#2a303c]"
              : "bg-transparent hover:bg-[#2a303c]"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setFeedType(2)}
        >
          People
        </li>
        <li
          className={` w-full flex justify-center px-1 py-1   duration-500 rounded-md ${
            feedType === 3
              ? "bg-[#2a303c]"
              : "bg-transparent hover:bg-[#2a303c]"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setFeedType(3)}
        >
          Favourites
        </li>
        <li
          className={`w-full flex justify-center px-1 py-1   duration-500 rounded-md ${
            feedType === 4
              ? "bg-[#2a303c]"
              : "bg-transparent hover:bg-[#2a303c]"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setFeedType(4)}
        >
          News
        </li>
      </ul>
    </div>
  );
};

export default PostNav;
