import Image from "next/image";

const BigFeatureSection: React.FC<{
  src: string;
  title: string;
  description: any;
}> = ({ src, title, description }) => (
  <section className="big-feature-section">
    <div className="container flex big-feature-container">
      <div className="feature-img">
        <Image width={100} height={100} src={src} alt={title} />
      </div>
      <div className="feature-desc flex">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </section>
);

export default BigFeatureSection;
