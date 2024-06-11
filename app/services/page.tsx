const Services = () => {
  return (
    <section className="features-section mb-20">
      <div className="container">
        <div className="features-header">
          <h1 className="features-heading-text">Our Expertise</h1>
        </div>
        <div className="features-area flex">
          <div className="features-card flex">
            <img src="./assets/webdev.png" alt="" />
            <h3>Building Robust Digital Solutions</h3>
            <p>
              Develop high-performing, scalable, and secure websites tailored to
              meet your business objectives with our expert web development
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
              captivate your audience and provide an intuitive user experience.
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
              Transform your business operations with cloud solutions that offer
              enhanced security, scalability, and performance.
            </p>
            <a href="#" className="secondary-button">
              Learn more <i className="fa-solid fa-right-long"></i>
            </a>
          </div>
          <div className="features-card flex">
            <img src="./assets/cloud.png" alt="" />
            <h3>Innovative Serverless Solutions</h3>
            <p>
              Utilize serverless architecture to build flexible, cost-effective,
              and highly scalable applications tailored to your specific needs.
            </p>
            <a href="#" className="secondary-button">
              Learn more <i className="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
