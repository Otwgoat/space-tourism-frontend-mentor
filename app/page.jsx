import Link from "next/link";
import Header from "./src/components/Header";

export const metadata = {
  title: "Space Tourism - Home",
  description: "Space tourism home page",
};
export default function Home() {
  return (
    <>
      <Header path="home" />
      <main id="homePage">
        <div className="homePageContent" id="homeDescription">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="homePageContent" id="homeButton">
          <button className="ctaButton" id="exploreButton">
            <Link href="/destination">EXPLORE</Link>
          </button>
        </div>
      </main>
    </>
  );
}
