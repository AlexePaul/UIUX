import React from 'react';

const brandLogos = [
  { src: "/logo1.svg", alt: "Toyota Logo" }, // Assuming logo1.svg is Toyota
  { src: "/logo5.svg", alt: "Ford Logo" },   // Assuming logo5.svg is Ford
  { src: "/logo6.svg", alt: "Mercedes Logo" }, // Assuming logo6.svg is Mercedes
  { src: "/g-29930.svg", alt: "Jeep Logo" }, // Assuming g-29930.svg is Jeep, based on image
  { src: "/layer-10.svg", alt: "BMW Logo" }, // Assuming layer-10.svg is BMW, based on image
  { src: "/layer-11.svg", alt: "Audi Logo" }, // Assuming layer-11.svg is Audi, based on image
];

export const BrandLogos: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-[72px]">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-8 md:gap-12">
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-12 lg:h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};
