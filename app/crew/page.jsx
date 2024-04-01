"use client";
import Image from "next/image";
import Header from "../src/components/Header";
import data from "../src/content/data.json";
import { useEffect, useState } from "react";

export default function Crew() {
  const [crew, setCrew] = useState(data.crew[0]);
  const [circleIsActive, setCircleIsActive] = useState("Douglas Hurley");
  useEffect(() => {
    setCircleIsActive(crew.name);
  }, [crew]);

  return (
    <>
      <Header path="crew" />
      <main id="crewPage">
        <div id="titleBanner">
          <h5>
            <span>02</span> MEET YOUR CREW
          </h5>
        </div>
        <div className="pageContent" id="crewContent">
          <div className="pageDescription" id="crewDescription">
            <div className="pageCard" id="crewCard">
              <div id="crewCardHeader">
                <h4>{crew.role}</h4>
                <h3>{crew.name}</h3>
              </div>

              <p className="pageBodyText" id="crewBodyText">
                {crew.bio}
              </p>
            </div>
            <nav>
              <span
                className={
                  circleIsActive === "Douglas Hurley"
                    ? "navCircleActive"
                    : "navCircle"
                }
                onClick={() => setCrew(data.crew[0])}
              ></span>
              <span
                className={
                  circleIsActive === "Mark Shuttleworth"
                    ? "navCircleActive"
                    : "navCircle"
                }
                onClick={() => setCrew(data.crew[1])}
              ></span>
              <span
                className={
                  circleIsActive === "Victor Glover"
                    ? "navCircleActive"
                    : "navCircle"
                }
                onClick={() => setCrew(data.crew[2])}
              ></span>
              <span
                className={
                  circleIsActive === "Anousheh Ansari"
                    ? "navCircleActive"
                    : "navCircle"
                }
                onClick={() => setCrew(data.crew[3])}
              ></span>
            </nav>
          </div>
          <div id="crewImg">
            <Image
              src={crew && crew.images.png}
              width={crew.imagesSizes.desktop.width}
              height={crew.imagesSizes.desktop.height}
              alt="photo of a man"
            />
          </div>
        </div>
      </main>
    </>
  );
}
