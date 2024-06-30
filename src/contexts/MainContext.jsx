import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import app from "../firebase.init";
import { Toaster } from "react-hot-toast";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const auth = getAuth(app);
const MainContext = ({ children }) => {
  const [userType, setUserType] = useState(1);
  // Auth properties below
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Feed properties below
  // 1 for explore, 2 for people, 3 for favourites, 4 for News // Default it is set to 1 or explore
  const [feedType, setFeedType] = useState(1);

  // Search Bar properties below

  const [inputSearch, setInputSearch] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);

  // useEffect for finding users
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("inside useEffect", currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };
  const createUserWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLogToaster(3);
        setUser(user);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const logOut = () => {
    // setLogToaster(4);
    return signOut(auth);
  };

  const signInWithGooglePopUp = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        setError("");
        setLoading(false);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        setLoading(false);
        // ...
      });
  };
  const appInfo = {
    userType,
    setUserType,
    inputSearch,
    setInputSearch,
    showSearchResult,
    setShowSearchResult,
    user,
    setUser,
    logOut,
    error,
    setError,
    loading,
    setLoading,
    createUserWithEmail,
    signInWithEmail,
    signInWithGooglePopUp,
    feedType,
    setFeedType,
  };
  return (
    <AuthContext.Provider value={appInfo}>
      {children}
      <Toaster position="bottom-right" reverseOrder={false} />
    </AuthContext.Provider>
  );
};
export default MainContext;
