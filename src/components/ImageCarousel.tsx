import React from "react";
import "./ImageCarousel.css";

const images = [
  "/cryt1.jpg",
  "/cryt2.jpg",
  "/cryt3.jpg",
  "/cryt4.jpg",
  "/cryt5.jpg",
  "/cryt6.jpg",
];

const ImageCarousel: React.FC = () => {
  // Duplicate for seamless loop
  const loopImages = [...images, ...images];

  return (
    <section className="ic-wrap" aria-label="Showcase">
      <div className="ic-track">
        {loopImages.map((src, i) => (
          <div className="ic-item" key={`${src}-${i}`}>
            <img src={src} alt={`Showcase image ${((i % images.length) + 1)}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
