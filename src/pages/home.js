import React, { useState } from "react";

//import component
import Introduction from "../components/introduction/introduction";
import Specialties from "../components/specialties/specialties";
function Home() {
  return (
    <div>
      <Introduction />
      <hr />
      <Specialties />
      <hr />
    </div>
  );
}

export default Home;
