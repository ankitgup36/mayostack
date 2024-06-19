import Image from "next/image";
import Link from "next/link";

const CustomImage: React.FC<{
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}> = ({ imageSrc, alt, width, height, className }) => (
  <Image
    src={imageSrc}
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

interface Service {
  imageSrc: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

const servicesData = [
  {
    imageSrc: "/assets/webdev.png",
    title: "MERN Stack Development",
    learnMoreLink: "#",
    description:
      "Build dynamic, responsive web applications with our expertise in the MERN stack, ensuring efficient, scalable, and high-performance solutions.",
  },
  {
    imageSrc: "/assets/webdesign.png",
    title: "UI/UX Design Services",
    learnMoreLink: "#",
    description:
      "Craft visually appealing and user-centric designs that provide an engaging and intuitive user experience, enhancing customer satisfaction.",
  },
  {
    imageSrc: "/assets/ecommerce.png",
    title: "E-commerce Solutions",
    learnMoreLink: "#",
    description:
      "Empower your online business with robust e-commerce platforms that enhance customer engagement and drive sales growth.",
  },
  {
    imageSrc: "/assets/seo.png",
    title: "SEO and Optimization",
    learnMoreLink: "#",
    description:
      "Boost your online visibility with strategic SEO practices and optimize your website for faster performance and a seamless user experience.",
  },
  {
    imageSrc: "/assets/aws.svg",
    title: "AWS Serverless Architecture",
    learnMoreLink: "#",
    description:
      "Leverage AWS serverless architecture to create flexible, scalable, and cost-effective solutions that meet your unique business needs.",
  },
  {
    imageSrc: "/assets/cloud.png",
    title: "Quality Assurance",
    learnMoreLink: "#",
    description:
      "Ensure your applications are reliable, efficient, and bug-free with our comprehensive QA services, focusing on delivering top-notch quality.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="features-section mb-20">
      <div className="container">
        <div className="features-header">
          <h1 className="features-heading-text">Our Expertise</h1>
        </div>
        <div className="features-area flex">
          {servicesData.map((service, index) => (
            <div key={service.title} className="features-card flex">
              <CustomImage
                imageSrc={service.imageSrc}
                alt={service.title}
                width={100}
                height={100}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <CustomLink
                href={service.learnMoreLink}
                className="secondary-button"
              >
                Learn more <i className="fa-solid fa-right-long"></i>
              </CustomLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
