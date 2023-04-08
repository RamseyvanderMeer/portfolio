import React from "react";
import Typewriter from "typewriter-effect";
import home from "../styles/Home.module.scss";

const settings = {
  strings: ["Student", "Developer", "Photographer", "Investor"],
  autoStart: true,
  loop: true,
};

const Home = function ({ setCurrent }) {
  return (
    <div className={home.textConainer}>
      <div className={home.content}>
        Hey 👋 I'm{<br />}Ramsey,{<br />}
        <div className={home.text}>
          <Typewriter options={settings}> </Typewriter>
        </div>
      </div>
      <div className={home.sectionContainer}>
        <div onClick={() => setCurrent(1)} className={home.section}>
          About 🙋🏻‍♂️
        </div>
        <div onClick={() => setCurrent(2)} className={home.section}>
          Photos 📸
        </div>
        <div onClick={() => setCurrent(3)} className={home.section}>
          Projects 👨🏻
        </div>
        <div onClick={() => setCurrent(4)} className={home.section}>
          Contact ✉️
        </div>
      </div>
    </div>
  );
};

export default Home;
