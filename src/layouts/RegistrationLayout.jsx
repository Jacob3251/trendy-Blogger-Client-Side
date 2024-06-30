const RegistrationLayout = () => {
  return (
    <div className="bg-[#282c37] h-[100vh] flex justify-center ">
      <div>
        <h1 className="font-Kablam text-[28px] md:text-[42px] mt-[60px] text-center">
          Difny.Com
        </h1>
        <h3 className="text-[18px] md:text-[26px] tracking-wider font-robo mb-8">
          Signup today at{" "}
          <span className="font-Kablam text-[32px]">Difny.Com</span>!!!
        </h3>
        <form action="" className="flex flex-col">
          {/* row-1 */}
          <div className="flex space-x-5">
            <div className="flex flex-col w-[35%]">
              <label
                htmlFor="nameInput"
                className="font-robo font-semibold tracking-tight text-[14px]"
              >
                Enter Name
              </label>
              <input
                type="text"
                name="nameInput"
                id="nameInput"
                className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-[65%]">
              <label
                htmlFor="emailInput"
                className="font-robo font-semibold tracking-tight text-[14px]"
              >
                Email Email
              </label>
              <input
                type="email"
                name="emailInput"
                id="emailInput"
                className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
              />
            </div>
          </div>
          {/* row-2 */}
          <div className="flex space-x-5">
            <div className="flex flex-col w-[65%]">
              <label
                htmlFor="emailInput"
                className="font-robo font-semibold tracking-tight text-[14px]"
              >
                Re-Email address
              </label>
              <input
                type="email"
                name="emailInput"
                id="emailInput"
                className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-[35%]">
              <label
                htmlFor="emailInput"
                className="font-robo font-semibold tracking-tight text-[14px]"
              >
                Enter Age
              </label>
              <input
                type="number"
                name="emailInput"
                id="emailInput"
                className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
              />
            </div>
          </div>
          {/* row-3 */}
          <div>
            <div className="flex flex-col ">
              <label
                htmlFor="emailInput"
                className="font-robo font-semibold tracking-tight text-[14px]"
              >
                Enter Password
              </label>
              <input
                type="email"
                name="emailInput"
                id="emailInput"
                className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
              />
            </div>
          </div>
          {/* row-4 */}
          <div className="flex space-x-5">
            <div className="flex flex-col w-[35%]">
              <label
                htmlFor="nameInput"
                className="font-robo font-semibold tracking-tight text-[14px]"
              >
                Enter Gender
              </label>
              <input
                type="text"
                name="nameInput"
                id="nameInput"
                className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-[65%]">
              <label
                htmlFor="emailInput"
                className="font-robo font-semibold tracking-tight text-[14px]"
              >
                Enter Bio
              </label>
              <input
                type="email"
                name="emailInput"
                id="emailInput"
                className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationLayout;
