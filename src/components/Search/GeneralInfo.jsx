const GeneralInfo = () => {
  return (
    <div>
      {/* welcome section */}
      <div className="my-8">
        <h3 className="font-robo text-[14px] px-2">
          Trendy Blogger: Your go-to social platform for the latest trends and
          insightful blogging.
        </h3>
        {/* welcome image */}
        <div className="w-full h-[240px] overflow-hidden rounded-lg my-5">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <h3 className="font-robo text-[14px] px-2">
          This site is operated, maintained and regulated by A<sup>2</sup>{" "}
          developers association.
        </h3>
        <div className="px-2 my-3 text-[14px] w-[95%] flex flex-col space-y-5">
          {/* Admin logo below */}
          <div>
            <h1 className="text-[#7e8ea3] font-robo font-bold">
              ADMINISTERED BY:
            </h1>
            <div className="flex justify-start items-center mt-2">
              <div className="text-[18px] bg-[#5740D4] rounded-md p-3 font-bold mr-2">
                TB
              </div>
              <div>
                <h1 className="font-robo font-bold">Trendy Blogger</h1>
                <h1 className="text-[#7e8ea3]">@trendyBlogger</h1>
              </div>
            </div>
          </div>
          {/* server stats below */}
          <div>
            <h1 className="text-[#7e8ea3] font-robo font-bold">
              SERVER STATS:
            </h1>
            <div className="flex justify-start items-center mt-2">
              <div>
                <h1 className="font-robo font-bold">250K</h1>
                <h1 className="text-[#7e8ea3]">active users</h1>
              </div>
            </div>
          </div>
        </div>
        <button className="text-[#7e8ea3] font-robo font-bold w-full border-2 border-[#7e8ea3] rounded-md py-2 mt-5">
          Learn more
        </button>
      </div>
      {/* Links section */}
      <div className="">
        <h1 className="text-[#7e8ea3] inline-block">Trendy Blogger</h1>
        <a
          className="text-[#7e8ea3] underline hover:no-underline inline-block ml-2"
          href="https://react-icons.github.io/react-icons/icons?name=fi"
        >
          about
        </a>
        <a
          className="text-[#7e8ea3] underline hover:no-underline inline-block ml-2"
          href="https://react-icons.github.io/react-icons/icons?name=fi"
        >
          Privacy policy
        </a>
        <a
          className="text-[#7e8ea3] underline hover:no-underline inline-block ml-2"
          href="https://react-icons.github.io/react-icons/icons?name=fi"
        >
          Contact creators
        </a>
      </div>
    </div>
  );
};

export default GeneralInfo;
