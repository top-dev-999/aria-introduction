import React from "react";

//import assets
import MyImage from "../../assets/images/me.png";
import "./introduction.scss";
function Introduction() {
  return (
    <div className="introduction-control">
      <img src={MyImage} />
      <div className="introduction-content">
        <h1>
          <em>Hello and welcome.</em> I'm Raia Kogan and I am a Somatic
          Psychotherapist specializing in helping <strong>individuals</strong>{" "}
          and <strong>couples</strong> deepen intimacy, passion, authenticity,
          and self-expression in relationships.
        </h1>
        <p>
          Healing begins when we can meet our experience with love, compassion,
          and acceptance, including the painful or uncomfortable parts. A
          relationship with a supportive ally is a vital part of healing.
          Through a somatic and mindful approach, I will help you develop
          increased love and compassion for yourself and to bring curiosity to
          habitual patterns that no longer serve your desires for your life.
        </p>
      </div>
      <a className="btn" href="/aboutme">
        LEARN MORE ABOUT ME
      </a>
    </div>
  );
}

export default Introduction;
