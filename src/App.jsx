import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";
import RegistrationLayout from "./layouts/RegistrationLayout";
import PageNotFoundLayout from "./layouts/PageNotFoundLayout";
import ErrorElement from "./components/ErrorElement/ErrorElement";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout></DefaultLayout>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "login",
      element: <LoginLayout></LoginLayout>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "register",
      element: <RegistrationLayout></RegistrationLayout>,
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
