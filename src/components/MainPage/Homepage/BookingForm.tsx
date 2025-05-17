import React from 'react';
import { InputVariantOutlineStateEnabledSizeDefault } from '../InputVariantOutlineStateEnabledSizeDefault/InputVariantOutlineStateEnabledSizeDefault';

export const BookingForm: React.FC = () => {
  return (
    <div className="bg-default-white rounded-[20px] p-10 flex flex-col gap-5 items-center justify-start shrink-0 w-[416px] relative overflow-hidden shadow-lg">
      <div
        className="text-[#000000] text-center font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative mb-5"
      >
        Book your car
      </div>
      <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
        <InputVariantOutlineStateEnabledSizeDefault
          selectArrow={true}
          placeholderText="Car type"
          className="!self-stretch !shrink-0 !w-full"
          labelText="Car type"
          label={false}
        />
        <InputVariantOutlineStateEnabledSizeDefault
          selectArrow={true}
          placeholderText="Place of rental"
          className="!self-stretch !shrink-0 !w-full"
          labelText="Place of rental"
          label={false}
        />
        <InputVariantOutlineStateEnabledSizeDefault
          selectArrow={true}
          placeholderText="Place of return"
          className="!self-stretch !shrink-0 !w-full"
          labelText="Place of return"
          label={false}
        />
        <InputVariantOutlineStateEnabledSizeDefault
          selectArrow={true}
          placeholderText="Rental date"
          className="!self-stretch !shrink-0 !w-full"
          labelText="Rental date"
          label={false}
        />
        <InputVariantOutlineStateEnabledSizeDefault
          selectArrow={true}
          placeholderText="Return date"
          className="!self-stretch !shrink-0 !w-full"
          labelText="Return date"
          label={false}
        />
      </div>
      <button className="bg-[#8f2279] hover:bg-[#7f1f6c] text-white font-['Inter-SemiBold',_sans-serif] rounded-xl py-3 px-9 text-base font-semibold w-full mt-4 shadow-none border-none">
        Book now
      </button>
    </div>
  );
};
