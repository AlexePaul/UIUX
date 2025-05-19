import React from 'react';
import { GearShift11 } from '../../MainPage/GearShift11/GearShift11';
import { G17 } from '../../MainPage/G17/G17';
import { G1593 } from '../../MainPage/G1593/G1593';

interface CarCardProps {
  name: string;
  type: string;
  price: string;
  imgSrc: string;
  altText: string;
  transmission: string;
  fuel: string;
  ac: boolean;
}

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  price,
  imgSrc,
  altText,
  transmission,
  fuel,
  ac,
}) => {
  return (
    <div className="bg-[#fafafa] rounded-[20px] p-6 flex flex-col gap-10 items-center justify-start shrink-0 w-[416px] relative overflow-hidden">
      <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
        <div className="flex items-center justify-center w-full h-[240px] bg-gray-100 rounded-xl overflow-hidden">
          <img
            className="max-w-full max-h-full object-contain"
            src={imgSrc}
            alt={altText}
          />
        </div>
        <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
          <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
            <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
              <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {name}
              </div>
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {type}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
              <div className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {price}
              </div>
              <div className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-sm font-normal relative overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                per day
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative px-2">
            <div className="flex flex-row items-center justify-start gap-1 w-1/3 pt-1">
              <GearShift11 className="!shrink-0 w-5 h-5" />
              <div className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-xs font-normal relative">
                {transmission}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-1 w-1/3 pt-1">
              <G17 className="!shrink-0 w-5 h-5" />
              <div className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-xs font-normal relative">
                {fuel}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-1 w-1/3 pt-1">
              {ac && <G1593 className="!shrink-0 w-5 h-5" />}
              <div className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-xs font-normal relative whitespace-normal">
                Air Conditioner
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#ec0868] hover:bg-[#d0075c] text-default-white font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center self-stretch h-[50px] overflow-hidden transition-colors duration-150 ease-in-out">
        View Details
      </button>
    </div>
  );
};
