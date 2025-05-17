import React from 'react';

interface FactProps {
  number: string;
  label: string;
  iconSrc: string;
}

const Fact: React.FC<FactProps> = ({ number, label, iconSrc }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 p-6 bg-white rounded-lg shadow-md w-full md:w-auto">
      <img src={iconSrc} alt={`${label} icon`} className="w-12 h-12 mb-2" />
      <div className="text-4xl font-bold text-[#8f2279]">{number}</div>
      <div className="text-lg text-gray-700">{label}</div>
    </div>
  );
};

export const FactsInNumbers: React.FC = () => {
  return (
    <div className="bg-[#f0f0f0] py-16 px-4 md:px-[72px]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-default-black">Facts In Numbers</h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover interesting facts about our services and achievements.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Fact number="1.5M+" label="Happy Customers" iconSrc="/g-16350.svg" />
        <Fact number="120+" label="Cars in Fleet" iconSrc="/g-16390.svg" />
        <Fact number="50K+" label="Kilometers Driven" iconSrc="/g-16430.svg" />
        <Fact number="15+" label="Years of Experience" iconSrc="/g-16470.svg" />
      </div>
    </div>
  );
};
