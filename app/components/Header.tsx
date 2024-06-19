import Image from "next/image";
import Subheader from "./SubHeader";
import Link from "next/link";

const Header = () => {
  return (
    <div className="main-nav-bg">
      <Subheader />
      <nav className="main-nav container">
        <Link href="/" className="company-logo">
          <Image
            width={560}
            height={560}
            src="/assets/asset 1.png"
            alt="company logo"
            priority
          />
        </Link>
        <div className="nav-links" id="nav-links">
          <ul className="flex">
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
          <i className="fa-solid fa-bars"></i>
        </Link>
      </nav>
    </div>
  );
};
export default Header;
