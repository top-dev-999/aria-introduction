import React from "react";

//import assets
import CoupleImage from "../../assets/images/specialties/couples.png";
import SomaticImage from "../../assets/images/specialties/somatic.png";
import FertilityImage from "../../assets/images/specialties/fertility.png";
import SupervisionImage from "../../assets/images/specialties/supervision.png";
import TraumaImage from "../../assets/images/specialties/trauma.png";
import "./specialties.scss";
function Specialties() {
  return (
    <div className="specialties-control">
      <h1 className="text-center">Specialties</h1>
      <div className="specialty-item">
        <img src={CoupleImage} />
        <div className="specialty-content">
          <a>Couples Therapy</a>
          <p>
            Couples Therapy can be a supportive container for intimate partners
            who would like to engage in relationship in a conscious and healthy
            way. We will work together to create a strong and secure bond and
            practice skills to continue to deepen the work outside of sessions.
            I am experienced in supporting couples in all stages of
            relationships and in diverse relationship styles. learn more here
          </p>
        </div>
      </div>
      <div className="specialty-item">
        <img src={SomaticImage} />
        <div className="specialty-content">
          <a>Somatic Therapy</a>
          <p>
            Somatic Therapy includes the body in the psychotherapy process. We
            use mindfulness, breath awareness, movement, and touch in order to
            develop inner resources and to deepen insight. You will develop new
            self care practices and coping skills and deepen insight into
            emotions and relationships through the wisdom of the body.
          </p>
        </div>
      </div>
      <div className="specialty-item">
        <img src={FertilityImage} />
        <div className="specialty-content">
          <a>Fertility, Pregnancy, Postpartum</a>
          <p>
            Planning for a new family, pre-conception, pregnancy, and postpartum
            is a profound time for individuals and couples, a time that can
            include loss, uncertainty, and stress. I love supporting couples and
            families of all kinds including those who are navigating diverse
            parenting structures and plans.
          </p>
        </div>
      </div>
      <div className="specialty-item">
        <img src={SupervisionImage} />
        <div className="specialty-content">
          <a>Supervision & Consultation</a>
          <p>
            Supervision and Consultation in Somatic and Couples Therapy for MFT
            trainees, interns, and licensed clinicians in Oakland. I work in a
            collaborative and relational style to help new therapists develop
            skills and process in a supportive environment.
          </p>
        </div>
      </div>
      <div className="specialty-item">
        <img src={TraumaImage} />
        <div className="specialty-content">
          <a>Trauma & EMDR</a>
          <p>
            EMDR is an evidence-based practice that works with the nervous
            system to process and heal the impact of traumatic events. My
            training is in attachment-focused EMDR, which means that I work with
            trauma that has occurred in early relationships. EMDR focuses on
            building resources and resilience so even while processing difficult
            material, it will be paced and contained in a way that helps you
            feel grounded and safe in the process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Specialties;
