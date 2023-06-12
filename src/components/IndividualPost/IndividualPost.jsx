import {
  FaEllipsisH,
  FaGlobeAmericas,
  FaReply,
  FaStar,
  FaRetweet,
} from "react-icons/fa";
const IndividualPost = () => {
  return (
    <div className="bg-[#313543]">
      <div className="px-5 py-2 font-robo">
        {/* top part */}
        <div className="flex justify-between items-center my-3">
          <div className="flex justify-start items-start  space-x-2">
            {/* username and picture */}
            <div className="avatar">
              <div className="w-12 rounded">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div>
              <h2 className="text-[14px] font-semibold">John Doe</h2>
              <h4 className="text-[14px] font-medium text-[#4a6584]">
                @johnisidiot
              </h4>
            </div>
          </div>
          <div className="text-[14px] flex justify-center items-center">
            <FaGlobeAmericas /> <span className="ml-2">2h</span>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugiat
          in, quam perferendis, vitae ullam quisquam perspiciatis laboriosam quo
          animi culpa, eveniet deleniti natus corrupti!
        </div>
        {/* Reactions */}
        <div className="flex justify-between py-3 text-[16px] text-[#606984] ">
          <div className="flex hover:bg-[#22272f] justify-center items-center space-x-2 px-3 py-2 rounded-md">
            <FaReply className="" /> <span>1+</span>
          </div>
          <div className="flex hover:bg-[#22272f] justify-center items-center space-x-2 px-3 py-2 rounded-md">
            <FaRetweet className=" text-[20px]" /> <span>1+</span>
          </div>
          <div className="flex hover:bg-[#22272f] justify-center items-center space-x-2 px-3 py-2 rounded-md">
            <FaStar className="" /> <span>3251</span>
          </div>
          <div className="flex hover:bg-[#22272f] justify-center items-center space-x-2 px-3 py-2 rounded-md">
            <FaEllipsisH className="" />
          </div>
        </div>
      </div>
      <div className="divider h-[1px] my-0 border-white"></div>
    </div>
  );
};

export default IndividualPost;
