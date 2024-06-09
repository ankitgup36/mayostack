import Image from "next/image";
import Subheader from "./SubHeader";

const Header = () => {
  return (
    <div className="main-nav-bg">
      <Subheader />
      <nav className="main-nav container">
        <a href="#" className="company-logo">
          <Image
            width={560}
            height={560}
            src="/assets/asset 1.png"
            alt="co/mpany logo"
          />
        </a>
        <div className="nav-links" id="nav-links">
          <ul className="flex">
            <li>
              <a href="#" className="hover-link">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Customer
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover-link secondary-button">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="hover-link primary-button">
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="nav-toggle hover-link" id="nav-toggle">
          <i className="fa-solid fa-bars"></i>
        </a>
      </nav>
    </div>
  );
};
export default Header;
