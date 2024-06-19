import Image from "next/image";
import Link from "next/link";

const MainSection = () => {
  return (
    <header>
      <div className="container header-section flex">
        <div className="header-left">
          <h1>
            Empowering Your Digital Journey with Excellence At Mayostack
            Infosolutions
          </h1>
          <p>
            we are passionate about transforming ideas into reality through
            innovative web development and comprehensive digital services. Our
            mission is to deliver exceptional web solutions that drive growth,
            enhance user experiences, and position your business at the
            forefront of your industry.
          </p>
          <Link href="#" className="primary-button get-started-btn">
            Get Started
          </Link>
        </div>
        <div className="header-right">
          <Image
            width={100}
            height={100}
            src="/assets/asset 2.svg"
            alt="hero image"
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default MainSection;
