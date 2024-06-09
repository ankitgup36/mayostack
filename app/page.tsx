import Image from "next/image";
import Subheader from "./components/SubHeader";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <main>
      {/* <Subheader /> */}
      <div className="main-nav-bg">
        <Header />
      </div>

      <MainSection />

      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h1 className="features-heading-text">Our Expertise</h1>
          </div>
          <div className="features-area flex">
            <div className="features-card flex">
              <img src="./assets/webdev.png" alt="" />
              <h3>Building Robust Digital Solutions</h3>
              <p>
                Develop high-performing, scalable, and secure websites tailored
                to meet your business objectives with our expert web development
                services.
              </p>
              <a href="#" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
            <div className="features-card flex">
              <img src="./assets/webdesign.png" alt="" />
              <h3>Creating Engaging Digital Experiences</h3>
              <p>
                Design visually stunning and user-friendly interfaces that
                captivate your audience and provide an intuitive user
                experience.
              </p>
              <a href="#" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
            <div className="features-card flex">
              <img src="./assets/ecommerce.png" alt="" />
              <h3>Empowering Your Online Business</h3>
              <p>
                Develop comprehensive ecommerce platforms that drive sales,
                enhance customer engagement, and support your business growth.
              </p>
              <a href="#" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
            <div className="features-card flex">
              <img src="./assets/Seo.png" alt="" />
              <h3>Maximizing Visibility and Speed</h3>
              <p>
                Enhance your online presence with strategic SEO practices and
                optimize website performance to ensure fast, seamless user
                experiences.
              </p>
              <a href="#" className="secondary-button">
                Learn More <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
            <div className="features-card flex">
              <img src="./assets/aws.svg" alt="" />
              <h3>Optimizing with Cloud Technologies</h3>
              <p>
                Transform your business operations with cloud solutions that
                offer enhanced security, scalability, and performance.
              </p>
              <a href="#" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
            <div className="features-card flex">
              <img src="./assets/cloud.png" alt="" />
              <h3>Innovative Serverless Solutions</h3>
              <p>
                Utilize serverless architecture to build flexible,
                cost-effective, and highly scalable applications tailored to
                your specific needs.
              </p>
              <a href="#" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src="./assets/service.svg" alt="" />
          </div>
          <div className="feature-desc flex">
            <h3>Why Choose Us?</h3>
            <div>
              <ul>
                <li>
                  Innovative Solutions: We harness the power of modern
                  technologies to deliver unique and effective web solutions.
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
                  Results-Driven: We aim to provide measurable outcomes that
                  drive your business forward.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="big-feature-section">
        <div
          className="container flex big-feature-container"
          id="second-big-feature"
        >
          <div className="feature-img">
            <img src="./assets/teamlead.svg" alt="" />
          </div>
          <div className="feature-desc flex">
            <h3>Highly skilled and collaborative team</h3>
            <p>
              Our team of skilled professionals brings a wealth of expertise and
              a forward-thinking mindset to every project. We pride ourselves on
              our ability to adapt to the ever-evolving digital landscape,
              ensuring that our clients benefit from the latest advancements and
              trends in web development.
            </p>
          </div>
        </div>
      </section>

      <section className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src="./assets/customer.svg" alt="" />
          </div>
          <div className="feature-desc flex">
            <h3>Commitment to Customer Satisfaction</h3>
            <p>
              Our dedication to customer satisfaction is unwavering. We strive
              to exceed client expectations by delivering exceptional service
              and tailored solutions. Our team is committed to understanding
              your unique needs and ensuring your success, fostering long-term
              partnerships built on trust and excellence. We continuously seek
              feedback and make improvements to guarantee that our clients
              receive the highest level of satisfaction and support.
            </p>
          </div>
        </div>
      </section>

      <section className="examples-section">
        <div className="container">
          <div className="examples-header flex">
            <h3 className="examples-heading-text">Our Insights and Articles</h3>
            <a href="#" className="secondary-button">
              Read articles <i className="fa-solid fa-right-long"></i>
            </a>
          </div>
          <div className="examples-area flex">
            <a href="#" className="examples-card">
              <img src="./assets/bg-image.png" />
              <h3 className="card-text">
                Can user complete a task in my software interface?
              </h3>
            </a>
            <a className="examples-card" href="#">
              <img src="./assets/bg-image-node.png" />
              <h3 className="card-text">
                Can user complete a task in my software interface?
              </h3>
            </a>
            <a className="examples-card" href="#">
              <img src="./assets/bg-image.png" />
              <h3 className="card-text">
                Can user complete a task in my software interface?
              </h3>
            </a>
            <a className="examples-card" href="#">
              <img src="./assets/bg-image-node.png" />
              <h3 className="card-text">
                Can user complete a task in my software interface?
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* <section className="cta-section">
        <div className="container flex cta-section-container">
          <h2>Start testing today</h2>
          <p>Take the guesswork out of design decisions</p>
          <a href="#" className="primary-button">
            Get Started
          </a>
        </div>
      </section> */}

      <footer>
        <div className="container flex footer-container">
          <div>
            <a href="#" className="company-logo">
              <img src="./assets/asset 1.png" alt="company logo" />
            </a>

            <p>
              Ellis bridge, Ahmedabad Gujarat, <br />
              380006
            </p>
            <p>+91-8286168403</p>
            <p>contact@mayostack.in</p>
            <div className="flex footer-icons">
              <img src="./assets/instagram.svg" className="contact-icon" />
              <img src="./assets/linkedin.png" className="contact-icon" />
              <img src="./assets/threads.svg" className="contact-icon" />
            </div>
          </div>
          <div className="link-column flex">
            <h4>Services</h4>
            <a href="#" className="hover-link">
              Web Application
            </a>
            <a href="#" className="hover-link">
              Full Stack Development
            </a>
            <a href="#" className="hover-link">
              MERN Stack Development
            </a>
            <a href="#" className="hover-link">
              Testing & QA Services
            </a>
            <a href="#" className="hover-link">
              UI/UX Design Services
            </a>
          </div>
          <div className="link-column flex">
            <h4>Company</h4>
            <a href="#" className="hover-link">
              About Us
            </a>
            <a href="#" className="hover-link">
              Careers
            </a>
            <a href="#" className="hover-link">
              Blogs
            </a>
            <a href="#" className="hover-link">
              Portfolio
            </a>
            <a href="#" className="hover-link">
              Contact Us
            </a>
          </div>
        </div>
      </footer>

      <div className="subfooter">
        <div className="container flex subfooter-container">
          Copyright © 2024 Mayostack Infosolutions Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </main>
  );
}
