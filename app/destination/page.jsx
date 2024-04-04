"use client";
import Image from "next/image";
import Header from "../src/components/Header";
import { useEffect, useState } from "react";
import data from "../src/content/data.json";
import { useMediaQuery } from "react-responsive";

export default function Destination() {
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const [destination, setDestination] = useState(data.destinations[0]);
  const [tabIsActive, setTabIsActive] = useState("Moon");
  useEffect(() => {
    setTabIsActive(destination.name);
  }, [destination]);

  return (
    <>
      <Header path="destination" />
      <main id="destinationPage">
        <div id="titleBanner">
          <h5>
            <span>01</span> PICK YOUR DESTINATION
          </h5>
        </div>
        <div className="pageContent" id="destinationContent">
          <div id="destinationImg" className="destinationImgMobile">
            <Image
              src={destination && destination.images.png}
              width={445}
              height={445}
              alt={"photo of " + destination && destination.name}
            />
          </div>
          <div id="destinationDescription" className="pageDescription">
            <nav id="destinationNav">
              <div id="destinationTabs">
                <p
                  className={
                    tabIsActive === "Moon"
                      ? "destinationTabActive"
                      : "destinationTab"
                  }
                  onClick={() => setDestination(data.destinations[0])}
                >
                  MOON
                </p>
                <p
                  className={
                    tabIsActive === "Mars"
                      ? "destinationTabActive"
                      : "destinationTab"
                  }
                  onClick={() => setDestination(data.destinations[1])}
                >
                  MARS
                </p>
                <p
                  className={
                    tabIsActive === "Europa"
                      ? "destinationTabActive"
                      : "destinationTab"
                  }
                  onClick={() => setDestination(data.destinations[2])}
                >
                  EUROPA
                </p>
                <p
                  className={
                    tabIsActive === "Titan"
                      ? "destinationTabActive"
                      : "destinationTab"
                  }
                  onClick={() => setDestination(data.destinations[3])}
                >
                  TITAN
                </p>
              </div>
            </nav>
            <div id="destinationCard">
              <h2>{destination && destination.name}</h2>
              <p className="pageBodyText" id="destinationBodyText">
                {destination && destination.description}
              </p>
              <span id="lineDecoration"></span>
              <div id="destinationSpecs">
                <div className="destinationSpecItem">
                  <p className="subheading2">AVG. DISTANCE</p>
                  <p className="psubheading1">
                    {destination && destination.distance}
                  </p>
                </div>
                <div className="destinationSpecItem">
                  <p className="subheading2">EST. TIME TRAVEL</p>
                  <p className="psubheading1">
                    {destination && destination.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
