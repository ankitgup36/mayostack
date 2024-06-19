import MainSection from "./components/MainSection";
import FeatureCard from "./components/FeatureCard";
import BigFeatureSection from "./components/BigFeatureSection";
import ExamplesSection from "./components/ExamplesSection";

const Home = () => {
  const features = [
    {
      src: "/assets/webdev.png",
      title: "MERN Stack Development",
      description:
        "Build dynamic, responsive web applications with our expertise in the MERN stack, ensuring efficient, scalable, and high-performance solutions.",
    },
    {
      src: "/assets/webdesign.png",
      title: "UI/UX Design Services",
      description:
        "Craft visually appealing and user-centric designs that provide an engaging and intuitive user experience, enhancing customer satisfaction.",
    },
    {
      src: "/assets/ecommerce.png",
      title: "E-commerce Solutions",
      description:
        "Empower your online business with robust e-commerce platforms that enhance customer engagement and drive sales growth.",
    },
    {
      src: "/assets/seo.png",
      title: "SEO and Optimization",
      description:
        "Boost your online visibility with strategic SEO practices and optimize your website for faster performance and a seamless user experience.",
    },
    {
      src: "/assets/aws.svg",
      title: "AWS Serverless Architecture",
      description:
        "Leverage AWS serverless architecture to create flexible, scalable, and cost-effective solutions that meet your unique business needs.",
    },
    {
      src: "/assets/cloud.png",
      title: "Quality Assurance",
      description:
        "Ensure your applications are reliable, efficient, and bug-free with our comprehensive QA services, focusing on delivering top-notch quality.",
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
          <div className="features-area flex gap-5  xl:gap-10">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {bigFeatures.map((feature, index) => (
        <BigFeatureSection key={feature.title} index={index} {...feature} />
      ))}

      <ExamplesSection />
    </main>
  );
};

export default Home;
