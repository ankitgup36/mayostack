import Image from "next/image";
import Link from "next/link";

const FeatureCard: React.FC<{
  src: string;
  title: string;
  description: string;
}> = ({ src, title, description }) => (
  <div className="features-card flex">
    <Image width={100} height={100} src={src} alt={title} priority/>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link href="#" className="secondary-button">
      Learn more <i className="fa-solid fa-right-long"></i>
    </Link>
  </div>
);

export default FeatureCard;
