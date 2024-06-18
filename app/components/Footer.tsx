import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerData = {
  company: {
    logo: {
      src: "/assets/asset 1.png",
      alt: "company logo",
      width: 50,
      height: 50,
    },
    address: "Ellis bridge, Ahmedabad Gujarat, 380006",
    phone: "+91-8286168403",
    email: "contact@mayostack.in",
    socialIcons: [
      { src: "/assets/instagram.svg", alt: "Instagram", width: 20, height: 20 },
      { src: "/assets/linkedin.png", alt: "LinkedIn", width: 20, height: 20 },
      { src: "/assets/threads.svg", alt: "Threads", width: 20, height: 20 },
    ],
  },
  services: {
    title: "Services",
    links: [
      { href: "#", text: "Web Application" },
      { href: "#", text: "Full Stack Development" },
      { href: "#", text: "MERN Stack Development" },
      { href: "#", text: "Testing & QA Services" },
      { href: "#", text: "UI/UX Design Services" },
    ],
  },
  companyLinks: {
    title: "Company",
    links: [
      { href: "#", text: "About Us" },
      { href: "#", text: "Careers" },
      { href: "#", text: "Blogs" },
      { href: "#", text: "Portfolio" },
      { href: "#", text: "Contact Us" },
    ],
  },
};

const CustomImage: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}> = ({ src, alt, width, height, className }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

const CustomLink: React.FC<{
  href: string;
  className?: string;
  children: React.ReactNode;
}> = ({ href, children, className }) => (
  <Link href={href} className={className}>
    {children}
  </Link>
);

const Footer = () => {
  const { company, services, companyLinks } = footerData;

  return (
    <footer>
      <div className="container flex footer-container">
        <div>
          <CustomLink href="#" className="company-logo">
            <CustomImage {...company.logo} />
          </CustomLink>
          <p>{company.address}</p>
          <p>{company.phone}</p>
          <p>{company.email}</p>
          <div className="flex footer-icons">
            {company.socialIcons.map((icon) => (
              <CustomImage key={icon.alt} {...icon} className="contact-icon" />
            ))}
          </div>
        </div>
        <div className="link-column flex">
          <h4>{services.title}</h4>
          {services.links.map((link) => (
            <CustomLink key={link.href} href={link.href} className="hover-link">
              {link.text}
            </CustomLink>
          ))}
        </div>
        <div className="link-column flex">
          <h4>{companyLinks.title}</h4>
          {companyLinks.links.map((link) => (
            <CustomLink key={link.href} href={link.href} className="hover-link">
              {link.text}
            </CustomLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
