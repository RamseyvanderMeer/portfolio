import React, { useState } from "react";
import Image from "next/image";
import menu from "../styles/Menu.module.scss";
import Home from "./Home";
import Contact from "./Contact";
import PhotoGallery from "./PhotoGallery";
import Projects from "./Projects";
import About from "./About";
import hamburger from "../images/menu.svg";

const Menu = function () {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(-1);

  function setCurrent(index: number) {
    if (index != currentIdx) {
      setPrevIdx(currentIdx);
      setCurrentIdx(index);
    }
  }

  const data = [
    <Home key="home" setCurrent={setCurrent} />,
    <About key="about" />,
    <PhotoGallery key="gallery" currentIdx={currentIdx} />,
    <Projects key="projects" />,
    <Contact key="contact" />,
  ];

  return (
    <div>
      <div className={menu.menu}>
        {currentIdx != 0 ? (
          <button onClick={() => setCurrent(0)}>
            <Image
              src={hamburger as string}
              alt="hamburger"
              width={50}
              height={50}
            />
          </button>
        ) : null}
      </div>
      <div className={menu.scaleIn} key={currentIdx}>
        {currentIdx == 2 ? (
          <PhotoGallery currentIdx={currentIdx} />
        ) : (
          data[currentIdx]
        )}
      </div>
      <div className={menu.scaleOut} key={prevIdx}>
        {data[prevIdx]}
      </div>
    </div>
  );
};

export default Menu;
