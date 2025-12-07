import React from "react";
import Navbar from "./layouts/Navbar";
import Banner from "./layouts/Banner";
import Succes from "./layouts/Succes";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
        <Succes/>
      </div>
    </>
  );
};

export default App;
