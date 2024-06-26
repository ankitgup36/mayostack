import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExampleCard: React.FC<{ text: string; alt: string; src: string }> = ({
  text,
  src,
  alt,
}) => (
  <Link className="examples-card" href="#">
    <Image width={100} height={100} alt={alt} src={src} priority />
    <h3 className="card-text">{text}</h3>
  </Link>
);

const examples = [
  {
    src: "/assets/react-bg.png",
    alt: "Insight",
    text: "Can user complete a task in my software interface?",
  },
  {
    src: "/assets/node-bg.png",
    alt: "Insight",
    text: "Can user complete a task in my software interface?",
  },
  {
    src: "/assets/react-bg.png",
    alt: "Insight",
    text: "Can user complete a task in my software interface?",
  },
  {
    src: "/assets/node-bg.png",
    alt: "Insight",
    text: "Can user complete a task in my software interface?",
  },
];

const ExamplesSection = () => (
  <section className="examples-section">
    <div className="container">
      <div className="examples-header flex">
        <h3 className="examples-heading-text">Our Insights and Articles</h3>
        <Link href="#" className="secondary-button">
          Read articles <i className="fa-solid fa-right-long"></i>
        </Link>
      </div>
      <div className="examples-area flex">
        {examples.map((example) => (
          <ExampleCard key={example.text} {...example} />
        ))}
      </div>
    </div>
  </section>
);

export default ExamplesSection;
