import React from 'react';
import { BookingForm } from './BookingForm';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#ec0868] rounded-[40px] px-[72px] flex flex-row items-center justify-between self-stretch h-[660px] relative overflow-hidden">
      {/* TyreMarks.svg as faded background, top-left */}
      <img
        src="tyre-marks.svg"
        alt="Tyre marks background pattern"
        className="absolute left-0 top-0 w-[700px] h-auto opacity-[0.13] z-0 select-none pointer-events-none"
        draggable="false"
      />
      {/* Car image, bottom-left, above TyreMarks */}
      <img
        src="/Homepage/img0.png"
        alt="Car"
        className="absolute left-[60px] bottom-0 w-[540px] max-w-[48vw] h-auto z-10 object-contain select-none pointer-events-none"
        draggable="false"
      />
      {/* Text Content Area - Left Side */}
      <div className="relative z-20 flex flex-col gap-7 items-start justify-center w-[50%] max-w-[650px] h-full py-[70px] pl-2">
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <h1 className="text-default-white text-left font-['WorkSans-Bold',_sans-serif] text-6xl font-bold w-full leading-[1.05]">
            Experience the road <br /> like never before
          </h1>
          <p className="text-[#f0f0f0] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal w-[85%] max-w-[480px] leading-relaxed">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
        </div>
        <button className="bg-[#8f2279] hover:bg-[#7f1f6c] text-white font-['Inter-SemiBold',_sans-serif] rounded-xl py-3 px-9 text-base font-semibold shadow-none border-none">
          View all cars
        </button>
      </div>
      {/* BookingForm Area - Right Side */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <BookingForm />
      </div>
    </div>
  );
};
