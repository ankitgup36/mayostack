import MainSection from "./components/MainSection";
import FeatureCard from "./components/FeatureCard";
import BigFeatureSection from "./components/BigFeatureSection";
import ExamplesSection from "./components/ExamplesSection";

const Home = () => {
  const features = [
    {
      src: "/assets/webdev.png",
      title: "Building Robust Digital Solutions",
      description:
        "Develop high-performing, scalable, and secure websites tailored to meet your business objectives with our expert web development services.",
    },
    {
      src: "/assets/webdesign.png",
      title: "Creating Engaging Digital Experiences",
      description:
        "Design visually stunning and user-friendly interfaces that captivate your audience and provide an intuitive user experience.",
    },
    {
      src: "/assets/ecommerce.png",
      title: "Empowering Your Online Business",
      description:
        "Develop comprehensive ecommerce platforms that drive sales, enhance customer engagement, and support your business growth.",
    },
    {
      src: "/assets/Seo.png",
      title: "Maximizing Visibility and Speed",
      description:
        "Enhance your online presence with strategic SEO practices and optimize website performance to ensure fast, seamless user experiences.",
    },
    {
      src: "/assets/aws.svg",
      title: "Optimizing with Cloud Technologies",
      description:
        "Transform your business operations with cloud solutions that offer enhanced security, scalability, and performance.",
    },
    {
      src: "/assets/cloud.png",
      title: "Innovative Serverless Solutions",
      description:
        "Utilize serverless architecture to build flexible, cost-effective, and highly scalable applications tailored to your specific needs.",
    },
  ];

  const bigFeatures = [
    {
      src: "/assets/service.svg",
      title: "Why Choose Us?",
      description: (
        <div>
          <ul>
            <li>
              Innovative Solutions: We harness the power of modern technologies
              to deliver unique and effective web solutions.
            </li>
            <li>
              Client-Focused: Your success is our priority. We tailor our
              services to meet your specific needs and objectives.
            </li>
            <li>
              Expert Team: Our talented professionals are dedicated to
              excellence and continuous improvement.
            </li>
            <li>
              Results-Driven: We aim to provide measurable outcomes that drive
              your business forward.
            </li>
          </ul>
        </div>
      ),
    },
    {
      src: "/assets/teamlead.svg",
      title: "Highly skilled and collaborative team",
      description:
        "Our team of skilled professionals brings a wealth of expertise and a forward-thinking mindset to every project. We pride ourselves on our ability to adapt to the ever-evolving digital landscape, ensuring that our clients benefit from the latest advancements and trends in web development.",
    },
    {
      src: "/assets/customer.svg",
      title: "Commitment to Customer Satisfaction",
      description:
        "Our dedication to customer satisfaction is unwavering. We strive to exceed client expectations by delivering exceptional service and tailored solutions. Our team is committed to understanding your unique needs and ensuring your success, fostering long-term partnerships built on trust and excellence. We continuously seek feedback and make improvements to guarantee that our clients receive the highest level of satisfaction and support.",
    },
  ];

  return (
    <main>
      {/* <Subheader /> */}
      <MainSection />

      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h1 className="features-heading-text">Our Expertise</h1>
          </div>
          <div className="features-area flex">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {bigFeatures.map((feature) => (
        <BigFeatureSection key={feature.title} {...feature} />
      ))}

      <ExamplesSection />
    </main>
  );
};

export default Home;
