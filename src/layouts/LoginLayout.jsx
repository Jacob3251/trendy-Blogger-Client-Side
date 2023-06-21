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
    <div>
      <h3>Login Layout</h3>
      {!user && <button onClick={() => signInWithGooglePopUp()}>Login</button>}
      {user && <button onClick={() => logOut()}>Logout</button>}
      <h2>Logged User: {user === null ? "No User" : user?.displayName}</h2>
      <h3></h3>
    </div>
  );
};

export default LoginLayout;
