const PostNav = () => {
  return (
    <div className="bg-[#1f232b]">
      <ul className="flex space-x-5 justify-evenly px-2 py-3 font-robo">
        <li
          className=" w-full flex justify-center py-2 bg-[#2a303c] hover:bg-[#2a303c] duration-500 rounded-md"
          style={{ cursor: "pointer" }}
        >
          Posts
        </li>
        <li
          className=" w-full flex justify-center py-2 bg-transparent hover:bg-[#2a303c] duration-500 rounded-md"
          style={{ cursor: "pointer" }}
        >
          Hashtags
        </li>
        <li
          className=" w-full flex justify-center py-2 bg-transparent hover:bg-[#2a303c] duration-500 rounded-md"
          style={{ cursor: "pointer" }}
        >
          People
        </li>
        <li
          className="w-full flex justify-center py-2 bg-transparent hover:bg-[#2a303c] duration-500 rounded-md"
          style={{ cursor: "pointer" }}
        >
          News
        </li>
      </ul>
    </div>
  );
};

export default PostNav;
