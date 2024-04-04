"use client";
import Image from "next/image";
import Header from "../src/components/Header";
import data from "../src/content/data.json";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Technology() {
  const isTablet = useMediaQuery({
    query: "(max-width: 1300px)",
  });
  const [technology, setTechnology] = useState(data.technology[0]);
  const [circleIsActive, setCircleIsActive] = useState("Launch Vehicle");
  useEffect(() => {
    setCircleIsActive(technology.name);
  }, [technology]);
  return (
    <>
      <Header path="technology" />
      <main id="technologyPage">
        <div id="titleBanner">
          <h5>
            <span>03</span> SPACE LAUNCH 101
          </h5>
        </div>
        <div className="pageContent" id="technologyContent">
          <nav>
            <div
              className={
                circleIsActive === "Launch vehicle"
                  ? "navCircleActive"
                  : "navCircle"
              }
              onClick={() => setTechnology(data.technology[0])}
            >
              <p>1</p>
            </div>
            <div
              className={
                circleIsActive === "Spaceport" ? "navCircleActive" : "navCircle"
              }
              onClick={() => setTechnology(data.technology[1])}
            >
              <p>2</p>
            </div>
            <div
              className={
                circleIsActive === "Space capsule"
                  ? "navCircleActive"
                  : "navCircle"
              }
              onClick={() => setTechnology(data.technology[2])}
            >
              <p>3</p>
            </div>
          </nav>
          <div className="pageDescription" id="technologyDescription">
            <div className="pageCard" id="technologyCard">
              <div id="technologyCardHeader">
                <p>THE TERMINOLOGY...</p>
                <h3>{technology.name}</h3>
              </div>

              <p className="pageBodyText">{technology.description}</p>
            </div>
          </div>

          <div id="technologyImg">
            {isTablet ? (
              <Image
                src={technology.images.landscape}
                width={768}
                height={310}
                alt={"image of " + technology.name}
              />
            ) : (
              <Image
                src={technology.images.portrait}
                width={515}
                height={527}
                alt={"image of" + technology.name}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
