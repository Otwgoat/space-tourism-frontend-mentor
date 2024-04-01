"use client";
import Link from "next/link";

export default function Header({ path }) {
  return (
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <span id="headerLineDecoration"></span>
      <nav>
        <div className="links">
          <Link href="/" className={path === "home" ? "navLinkActive" : ""}>
            <span>00</span>HOME
          </Link>
          <Link
            href="/destination"
            className={path === "destination" ? "navLinkActive" : ""}
          >
            <span>01</span>DESTINATION
          </Link>
          <Link href="/crew" className={path === "crew" ? "navLinkActive" : ""}>
            <span>02</span>CREW
          </Link>
          <Link
            href="/technology"
            className={path === "technology" ? "navLinkActive" : ""}
          >
            <span>03</span>TECHNOLOGY
          </Link>
        </div>
      </nav>
    </header>
  );
}
