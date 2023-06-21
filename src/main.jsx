import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainContext from "./contexts/MainContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContext>
    <App />
  </MainContext>
);
