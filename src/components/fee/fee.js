import React from "react";

//import assets
import Fee1Image from "../../assets/images/fee/fee1.jpeg";
import Fee2Image from "../../assets/images/fee/fee2.jpeg";
//import css
import "./fee.scss";
function Fee() {
  return (
    <div className="fee-control">
      <div className="fee-banner">
        <div>
          <img src={Fee1Image} />
        </div>
        <div>
          <img src={Fee2Image} />
        </div>
      </div>
      <div className="fee-content">
        <h1>Fees</h1>
        <p>Individuals: $180 for a 50 minute session</p>
        <p>$250 for a 75 minute session.</p>
        <p>Couples: $200 for a 50 minute session </p>
        <p>$270 for a 75 minute session </p>
        <p>
          Longer sessions and sessions more frequent than weekly are discounted
        </p>
        <p>
          I hold a few spots in my practice for sliding scale clients and in
          particular try to support psychotherapy students and interns in
          receiving psychotherapy services that they would not otherwise be able
          to afford.{" "}
        </p>
        <p>
          I accept Victims of Crime Compensation as well as Health and Flexible
          spending accounts.{" "}
        </p>
        <p>
          I am not currently an in-network provider with any insurance companies
          but, am happy to provide you with a Superbill for reimbursement.{" "}
        </p>
      </div>
    </div>
  );
}

export default Fee;
