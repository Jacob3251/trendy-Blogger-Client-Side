import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/MainContext";
import { useLocation, useNavigate } from "react-router-dom";

const LoginLayout = () => {
  const { user, signInWithGooglePopUp, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);
  return (
    <div className="bg-[#282c37]  h-[100vh] flex justify-center items-start">
      <div className="w-[80%] md:w-[25%] mx-auto flex flex-col ">
        <h3 className="font-Kablam text-[28px] md:text-[42px] mt-[60px] md:mt-[80px] text-center">
          Difny.Com
        </h3>
        <h6 className="text-[18px] md:text-[26px] mt-[30px] text-center font-robo tracking-wider">
          Login to Difny.Com
        </h6>
        {/* email address input below */}
        <form action="" className="flex flex-col space-y-5 mt-[26px]  w-full">
          <div className="flex flex-col">
            <label
              htmlFor="emailInput"
              className="font-robo font-semibold tracking-tight text-[14px]"
            >
              Email address
            </label>
            <input
              type="email"
              name="emailInput"
              id="emailInput"
              className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
            />
          </div>
          {/* password address input below */}
          <div className="flex flex-col">
            <label
              htmlFor="passInput"
              className="font-robo font-semibold tracking-tight text-[14px]"
            >
              Password
            </label>
            <input
              type="password"
              name="passInput"
              id="passInput"
              className="py-2 rounded-md mt-2 pl-2 border-2 border-transparent  focus:border-[#8c8dff] focus:outline-none"
            />
          </div>
          <div>
            <input
              type="submit"
              value="LOG IN"
              className="bg-[#6364FF] w-full rounded-md py-3 text-white font-semibold tracking-widest text-[14px]"
            />
          </div>
        </form>
        {/* Other Options */}
        {/* Social Login Option */}
        <div>
          <button onClick={signInWithGooglePopUp}>Login via Google</button>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-3 md:mt-6">
          <button
            onClick={() => navigate("/auth/register")}
            className="tracking-tight hover:underline text-[#9baec8] font-robo font-semibold"
          >
            Sign up
          </button>
          <button
            className="tracking-tight hover:underline text-[#9baec8] font-robo font-semibold"
            onClick={() => navigate("/auth/password/new-password")}
          >
            Forgot your password?{" "}
          </button>
        </div>
      </div>
      {/* {!user && <button onClick={() => signInWithGooglePopUp()}>Login</button>}
      {user && <button onClick={() => logOut()}>Logout</button>}
      <h2>Logged User: {user === null ? "No User" : user?.displayName}</h2>
      <h3></h3> */}
    </div>
  );
};

export default LoginLayout;
