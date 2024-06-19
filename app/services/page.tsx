import Image from "next/image";
import Link from "next/link";

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

interface Service {
  imageSrc: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

const servicesData: Service[] = [
  {
    imageSrc: "/assets/webdev.png",
    title: "Building Robust Digital Solutions",
    description:
      "Develop high-performing, scalable, and secure websites tailored to meet your business objectives with our expert web development services.",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/assets/webdesign.png",
    title: "Creating Engaging Digital Experiences",
    description:
      "Design visually stunning and user-friendly interfaces that captivate your audience and provide an intuitive user experience.",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/assets/ecommerce.png",
    title: "Empowering Your Online Business",
    description:
      "Develop comprehensive ecommerce platforms that drive sales, enhance customer engagement, and support your business growth.",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/assets/seo.png",
    title: "Maximizing Visibility and Speed",
    description:
      "Enhance your online presence with strategic SEO practices and optimize website performance to ensure fast, seamless user experiences.",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/assets/aws.svg",
    title: "Optimizing with Cloud Technologies",
    description:
      "Transform your business operations with cloud solutions that offer enhanced security, scalability, and performance.",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/assets/cloud.png",
    title: "Innovative Serverless Solutions",
    description:
      "Utilize serverless architecture to build flexible, cost-effective, and highly scalable applications tailored to your specific needs.",
    learnMoreLink: "#",
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
                src={service.imageSrc}
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
