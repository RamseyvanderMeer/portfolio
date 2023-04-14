import React from "react";
import Typewriter from "typewriter-effect";
import home from "../styles/Home.module.scss";

const settings = {
  strings: ["Student", "Developer", "Photographer", "Investor"],
  autoStart: true,
  loop: true,
};

interface HomeProps {
  setCurrent: (current: number) => void;
}

const Home = function ({ setCurrent }: HomeProps) {
  return (
    <div className=" absolute left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center overflow-scroll text-white">
      <div className={home.content}>
        Hey 👋 I&apos;m{<br />}Ramsey,{<br />}
        <div className={home.text}>
          <Typewriter options={settings} />
        </div>
      </div>
      <div className={home.sectionContainer}>
        <div onClick={() => void setCurrent(1)} className={home.section}>
          About 🙋🏻‍♂️
        </div>
        <div onClick={() => void setCurrent(2)} className={home.section}>
          Photos 📸
        </div>
        <div onClick={() => void setCurrent(3)} className={home.section}>
          Projects 👨🏻
        </div>
        <div onClick={() => void setCurrent(4)} className={home.section}>
          Contact ✉️
        </div>
      </div>
    </div>
  );
};

export default Home;
