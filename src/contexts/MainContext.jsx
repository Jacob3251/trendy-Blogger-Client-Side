import { createContext, useState } from "react";

export const AuthContext = createContext();
const MainContext = ({ children }) => {
  const [userType, setUserType] = useState(1);
  const [inputSearch, setInputSearch] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const appInfo = {
    userType,
    setUserType,
    inputSearch,
    setInputSearch,
    showSearchResult,
    setShowSearchResult,
  };
  return (
    <AuthContext.Provider value={appInfo}>{children}</AuthContext.Provider>
  );
};
export default MainContext;
