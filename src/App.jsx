import React from "react";
import Navbar from "./layouts/Navbar";
import Banner from "./layouts/Banner";
import Succes from "./layouts/Succes";
import Services from "./layouts/Services";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
        <Succes/>
        <Services/>
      </div>
    </>
  );
};

export default App;
