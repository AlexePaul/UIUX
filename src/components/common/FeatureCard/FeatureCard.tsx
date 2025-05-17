import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-[29px] items-center justify-start shrink-0 relative">
      <div className="flex flex-col gap-5 items-center justify-start shrink-0 relative">
        <div className="shrink-0 w-16 h-16 relative overflow-hidden">
          <img
            className="h-full w-full absolute left-0 top-0 object-contain"
            src={iconSrc} // Use prop for icon source
            alt={title} // Added alt text
          />
        </div>
        <div className="text-default-black text-center font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative w-[336px]">
          {title} {/* Use prop for title */}
        </div>
      </div>
      <div className="text-default-black text-center font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[357px]">
        {description} {/* Use prop for description */}
      </div>
    </div>
  );
};
