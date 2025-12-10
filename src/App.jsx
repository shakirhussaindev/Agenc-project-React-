import React from "react";
import Navbar from "./layouts/Navbar";
import Banner from "./layouts/Banner";
import Succes from "./layouts/Succes";
import Services from "./layouts/Services";
import Work from "./layouts/Work";
import Agenc from "./layouts/Agenc";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
        <Succes/>
        <Services/>
        <Work/>
        <Agenc/>
      </div>
    </>
  );
};

export default App;
