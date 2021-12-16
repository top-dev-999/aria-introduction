import React from "react";

//import Components
import Contact from "../components/contact/contact";
import Location from "../components/location.js/location";
import Fee from "../components/fee/fee";
function ContactPage() {
  return (
    <>
      <Contact />
      <hr />
      <Location />
      <hr />
      <Fee />
    </>
  );
}

export default ContactPage;
