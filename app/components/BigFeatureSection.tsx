import Image from "next/image";

const BigFeatureSection: React.FC<{
  src: string;
  title: string;
  description: any;
  index: number;
}> = ({ src, title, description, index }) => (
  <section className="big-feature-section">
    <div
      className={`container flex big-feature-container h-[60%] ${
        index % 2 !== 0 ? "flex-row-reverse" : ""
      }`}
    >
      <div className="feature-img">
        <Image width={100} height={100} src={src} alt={title} priority />
      </div>
      <div className="feature-desc items-center md:items-start flex">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </section>
);

export default BigFeatureSection;
