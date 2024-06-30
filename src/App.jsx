import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";
import RegistrationLayout from "./layouts/RegistrationLayout";
import PageNotFoundLayout from "./layouts/PageNotFoundLayout";
import ErrorElement from "./components/ErrorElement/ErrorElement";
import UserProfile from "./components/UserProfile/UserProfile";
import Settings from "./components/Settings/Settings";
import PassReset from "./components/PassReset/PassReset";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout></DefaultLayout>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "auth/login",
      element: <LoginLayout></LoginLayout>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "auth/register",
      element: <RegistrationLayout></RegistrationLayout>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    // forget password route
    {
      path: "auth/password/new-password",
      element: <PassReset></PassReset>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "profile/:email",
      element: <UserProfile></UserProfile>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "profile/:email/settings",
      element: <Settings></Settings>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "*",
      element: <PageNotFoundLayout></PageNotFoundLayout>,
      errorElement: <ErrorElement></ErrorElement>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
