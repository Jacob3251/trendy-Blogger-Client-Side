const PostNav = () => {
  return (
    //
    <div className=" w-full ml-1 md:ml-0 px-2 md:px-0">
      <ul className="flex space-x-2 md:space-x-5 justify-evenly px-2 py-3 font-robo tracking-tighter md:tracking-normal">
        <li
          className=" w-full flex justify-center px-1 py-1 bg-[#2a303c] hover:bg-[#2a303c] duration-500 rounded-md"
          style={{ cursor: "pointer" }}
        >
          Posts
        </li>
        <li
          className=" w-full flex justify-center px-1 py-1 bg-transparent hover:bg-[#2a303c] duration-500 rounded-md"
          style={{ cursor: "pointer" }}
        >
          Hashtags
        </li>
        <li
          className=" w-full flex justify-center px-1 py-1 bg-transparent hover:bg-[#2a303c] duration-500 rounded-md"
          style={{ cursor: "pointer" }}
        >
          People
        </li>
        <li
          className="w-full flex justify-center px-1 py-1 bg-transparent hover:bg-[#2a303c] duration-500 rounded-md"
          style={{ cursor: "pointer" }}
        >
          News
        </li>
      </ul>
    </div>
  );
};

export default PostNav;
