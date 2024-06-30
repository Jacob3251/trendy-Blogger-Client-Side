import { useContext, useState } from "react";
import { FaEllipsisV, FaGlobeAmericas, FaPaperclip } from "react-icons/fa";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/MainContext";
// import { FaEllipsisVertical } from "react-icons/fa6";
const Options = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className=" bg-[#313543] text-[#cdcfd4]  w-2/3 absolute right-0 -top-2 rounded-lg overflow-hidden text-[12px] font-robo tracking-tighter font-semibold">
      <ul className="px-2 py-2">
        <li
          className="rounded-md px-2 py-1 hover:bg-[#42485a] duration-300"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`profile/${user?.email}`);
          }}
        >
          Edit Profile
        </li>
        <li
          onClick={() => {
            navigate(`profile/${user?.email}/settings`);
          }}
          className="rounded-md px-2 py-1 hover:bg-[#42485a] duration-300"
          style={{ cursor: "pointer" }}
        >
          Settings
        </li>
        <li
          onClick={logOut}
          className="rounded-md px-2 py-1 hover:bg-[#42485a] duration-300"
          style={{ cursor: "pointer" }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};
const PostInputBox = () => {
  const [chrCounter, setChrCounter] = useState(200);
  const characterCounter = (event) => {
    const length = event.target.value.length;
    console.log(length);
    setChrCounter(200 - length);
    if (length === 200) {
      setTimeout(() => {
        alert(
          "You've reached the limit!! Get premium subsscription for more input options"
        );
      }, 100);
    }
  };
  return (
    <div className="">
      <div className="bg-white rounded-lg">
        <textarea
          onChange={(event) => characterCounter(event)}
          // disabled={chrCounter === 0 ? true : false}
          className="w-full outline-none bg-white rounded-t-md text-black px-2 pt-1 placeholder:text-[14px] text-[14px]"
          placeholder="Type Here"
          name=""
          id=""
          style={{ resize: "none" }}
          cols="30"
          rows="6"
          maxLength={200}
        ></textarea>
        {/* input options div below */}
        {/* bg-[#ebebeb] */}
        <div className="flex justify-between text-[#51596f]  bg-[#ebebeb]  border-t-[2px] border-[#d7d7d8] font-robo tracking-tighter font-bold text-[14px] px-2 py-1 rounded-b-lg">
          <ul className="flex space-x-3 items-center ">
            <li className="hover:bg-[#d6d8dc] p-2 text-[14px] rounded-md">
              <label htmlFor="IMG_UPLOAD">
                <FaPaperclip />
              </label>
            </li>
            <li className="hover:bg-[#d6d8dc] p-2 text-[14px] rounded-md">
              <FaGlobeAmericas />
            </li>
          </ul>
          {/* total input character counter */}
          <p>{chrCounter}</p>
        </div>
      </div>
      <div className="flex justify-end mt-2 text-[12px] font-robo font-semibold text-white">
        <button className="bg-[#595aff] hover:bg-[#6364ff] px-3 py-2 rounded-md tracking-wide">
          PUBLISH
        </button>
      </div>
      {/* image input tag below */}
      <input
        type="file"
        name=""
        id="IMG_UPLOAD"
        className="w-0 h-0"
        multiple
        accept="image/png, image/jpeg, image/webp"
      />
    </div>
  );
};
const UserInputBox = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="">
      <div className="flex my-3 justify-between items-center">
        {/* profile section */}
        <div className="flex space-x-2  ">
          <div className="avatar">
            <div className="w-8 rounded">
              <img
                src="https://images.unsplash.com/photo-1719352354062-0a35d9db5773?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user_profile_picture"
              />
            </div>
          </div>
          <div className="flex flex-col text-[12px] font-robo tracking-tight justify-center items-start">
            {/* profile route button*/}
            <button className="font-semibold">@UserName</button>
            {/* profile edit route button*/}
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="text-[18px] mr-2">
          <button onClick={() => setShowOptions(!showOptions)}>
            <FaEllipsisV></FaEllipsisV>
          </button>
        </div>
      </div>
      {/* options below */}
      <div className="relative">
        {showOptions === true && <Options></Options>}
      </div>
      {/* input component below */}
      <PostInputBox></PostInputBox>
      {/* information links */}
      <div className="mt-[105%]">
        <div className="flex space-x-2 items-center text-[14px] font-robo text-[#4c5779] ">
          {/* home page link */}
          <a href="" className="hover:underline">
            Difny.Com
          </a>
          {/* about page link*/}
          <a href="" className="hover:underline">
            About
          </a>
          {/* privacy policy link */}
          <a href="" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInputBox;
