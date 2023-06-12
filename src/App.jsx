// import { useState } from 'react'

import Explore from "./components/Explore/Explore";
import Search from "./components/Search/Search";
import SideNav from "./components/SideNav/SideNav";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="md:pt-5 w-full md:w-[80%] mx-auto">
      <div className="flex justify-between items-start w-full">
        <Search></Search>
        <Explore></Explore>
        <SideNav></SideNav>
      </div>
    </div>
  );
}

export default App;
