"use client";
import Image from "next/image";
import Subheader from "./SubHeader";
import Link from "next/link";
import { LucideAlignJustify } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState<boolean>(false);
  return (
    <>
      <div className="main-nav-bg">
        <Subheader />
        <nav className={`main-nav container`}>
          <Link href="/" className="company-logo flex-1 md:flex-none">
            <Image
              width={560}
              height={560}
              src="/assets/asset 1.webp"
              alt="company logo"
              priority
            />
          </Link>
          <div className={`nav-links hidden md:block `} id="nav-links">
            <ul className={`flex  `}>
              <li>
                <Link href="/about-us" className="hover-link">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <button className="hover-link primary-button">
                  Get Free Estimation
                </button>
              </li>
            </ul>
          </div>
          <Link href="#" className="nav-toggle hover-link" id="nav-toggle">
            <LucideAlignJustify
              className=" block md:hidden"
              onClick={() => setShowNavLinks((prev) => !prev)}
            />
          </Link>
        </nav>
      </div>
      {showNavLinks ? (
        <div className={`nav-links flex-col`} id="nav-links">
          <ul className={`flex flex-col`}>
            <li>
              <Link
                href="/about-us"
                className="hover-link"
                onClick={() => setShowNavLinks((prev) => !prev)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover-link"
                onClick={() => setShowNavLinks((prev) => !prev)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover-link"
                onClick={() => setShowNavLinks((prev) => !prev)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <button
                className="hover-link primary-button"
                onClick={() => setShowNavLinks((prev) => !prev)}
              >
                Get Free Estimation
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};
export default Header;
