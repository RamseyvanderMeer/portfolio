import React, { useState } from "react";
import about from "../styles/About.module.scss";
import ramsey from "../images/Ramsey.svg";
import vanderMeer from "../images/vanderMeer.svg";
import repeat from "../images/replay.svg";
import Image from "next/image";

export default function About() {
  const [intro, setIntro] = useState(0);
  const [svg, setSvg] = useState(1);
  const [crawl, setCrawl] = useState(2);
  const [replay, setReplay] = useState(false);

  function reset() {
    setIntro(intro + 1);
    setSvg(svg + 1);
    setCrawl(crawl + 1);
    setReplay(true);
  }

  return (
    <div className="t-0 l-0 absolute h-screen w-screen">
      <div
        id="about"
        className="absolute m-0 h-screen w-screen overflow-hidden p-0"
      >
        <section
          key={intro}
          className="absolute flex h-screen w-screen items-center justify-center border-slate-100"
        >
          <p className={about.introText}>
            Not so long ago, in a university,
            <br /> not so far away....
          </p>
        </section>

        <section key={svg} className={about.svg}>
          <Image
            priority
            src={ramsey}
            height={100}
            width={600}
            alt="ramsey"
            className="w-screen h-auto opacity-1"
          />
          <Image
            priority
            src={vanderMeer}
            height={100}
            width={1200}
            alt="van der meer"
            className={about.logoSvg}
          />
        </section>

        <div key={crawl} className={about.crawl}>
          <div className={about.content}>
            <p className={about.title}>Year II</p>
            <p className={about.subtitle}>The Grind</p>
            <br />
            <p className={about.text}>
              A student named Ramsey, who sought knowledge in the ways of
              computer engineering at the University of Illinois Urbana
              Champaign. But his journey was not limited to the confines of the
              classroom, as he also found joy in exploring the great outdoors
              through camping, hiking, fishing, and mountain biking.
            </p>
            <p className={about.text}>
              As he honed his physical prowess and strengthened his connection
              with the natural world, he discovered a new passion for the game
              of basketball, becoming a skilled master of the court.
            </p>
            <p className={about.text}>
              Guided by his determination and the force within, Ramsey continues
              his journey to master both the physical and mental aspects of his
              craft. For he know that with each new challenge, he become
              stronger and closer to the greatness that lies ahead. The force is
              strong with this one.
            </p>
          </div>
        </div>
      </div>
      <div className={about.replay}>
        {replay ? (
          <Image
            priority
            src={repeat}
            height={50}
            width={50}
            alt="replay"
            onAnimationEnd={() => setReplay(false)}
            className={about.replaySvgActive}
          />
        ) : (
          <Image
            priority
            src={repeat}
            height={50}
            width={50}
            alt="replay"
            onClick={reset}
            className={about.replaySvg}
          />
        )}
      </div>
    </div>
  );
}
