import { InputVariantOutlineStateEnabledSizeDefault } from "../InputVariantOutlineStateEnabledSizeDefault/InputVariantOutlineStateEnabledSizeDefault";
import { Navbar } from "../common/Navbar/Navbar";
import { Footer } from "../common/Footer/Footer";

export interface IContactUsProps {
  className?: string;
}

export const ContactUs = ({
  className,
  ...props
}: IContactUsProps): JSX.Element => {
  return (
    <div
      className={"bg-[#ffffff] flex flex-col min-h-screen " + (className ?? "")}
    >
      <Navbar />
      <main className="flex flex-col flex-1 items-center justify-start relative overflow-hidden">
        <div className="rounded-[40px] flex flex-col gap-5 items-center justify-center self-stretch shrink-0 h-60 relative overflow-hidden">
          <div className="text-[#000000] text-center font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative">
            Contact Us{" "}
          </div>
          <div
            className="text-center font-['WorkSans-Regular',_sans-serif] text-xl font-normal relative overflow-hidden"
            style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            <span>
              <span className="home-contact-us-span">Home / </span>
              <span className="home-contact-us-span2"></span>
              <span className="home-contact-us-span3">Contact Us</span>
            </span>{" "}
          </div>
        </div>
        <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-row items-center justify-between self-stretch shrink-0 relative">
          <div className="flex flex-row gap-3 items-center justify-start shrink-0 relative">
            <div className="bg-[#ec0868] rounded-[50px] shrink-0 w-16 h-16 relative overflow-hidden">
              <img
                className="w-7 h-7 absolute left-[18px] top-[18px] overflow-visible"
                src="map-pin0.svg"
              />
            </div>
            <div className="flex flex-col gap-3 items-start justify-center shrink-0 relative">
              <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-xl leading-[26px] font-normal relative">
                Address{" "}
              </div>
              <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-xl leading-[26px] font-semibold relative">
                Oxford Ave. Cary, NC 27511{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start shrink-0 relative">
            <div className="bg-[#ec0868] rounded-[50px] shrink-0 w-16 h-16 relative overflow-hidden">
              <img
                className="w-7 h-7 absolute left-[17.67px] top-[18px] overflow-visible"
                src="mail0.svg"
              />
            </div>
            <div className="flex flex-col gap-3 items-start justify-center self-stretch shrink-0 relative">
              <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-xl leading-[26px] font-normal relative">
                Email{" "}
              </div>
              <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-xl leading-[26px] font-semibold relative">
                nwiger@yahoo.com{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start shrink-0 relative">
            <div className="bg-[#ec0868] rounded-[50px] shrink-0 w-16 h-16 relative overflow-hidden">
              <img
                className="w-7 h-7 absolute left-[18.34px] top-[18px] overflow-visible"
                src="phone0.svg"
              />
            </div>
            <div className="flex flex-col gap-3 items-start justify-center shrink-0 relative">
              <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-xl leading-[26px] font-normal relative">
                Phone{" "}
              </div>
              <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-xl leading-[26px] font-semibold relative">
                +537 547-6401{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start shrink-0 relative">
            <div className="bg-[#ec0868] rounded-[50px] shrink-0 w-16 h-16 relative overflow-hidden">
              <img
                className="w-7 h-7 absolute left-[50%] top-[50%] overflow-visible"
                style={{ translate: "-50% -50%" }}
                src="clock0.svg"
              />
            </div>
            <div className="flex flex-col gap-3 items-start justify-center shrink-0 relative">
              <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-xl leading-[26px] font-normal relative">
                Opening hours{" "}
              </div>
              <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-xl leading-[26px] font-semibold relative">
                Sun-Mon: 10am - 10pm{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-row gap-16 items-start justify-center self-stretch shrink-0 relative">
          <div className="bg-[#fff] rounded-[20px] p-0 flex flex-col gap-8 items-center justify-start shrink-0 w-[500px] relative overflow-hidden">
            <div className="text-[#000] text-left font-['WorkSans-Bold',_sans-serif] text-[40px] font-bold w-full mb-6 mt-6 pl-6">
              Book your car
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full px-6">
              <InputVariantOutlineStateEnabledSizeDefault
                selectArrow={true}
                placeholderText="Car type"
                className="!self-stretch !shrink-0 !w-full"
              />
              <InputVariantOutlineStateEnabledSizeDefault
                selectArrow={true}
                placeholderText="Place of rental"
                className="!self-stretch !shrink-0 !w-full"
              />
              <InputVariantOutlineStateEnabledSizeDefault
                selectArrow={true}
                placeholderText="Place of return"
                className="!self-stretch !shrink-0 !w-full"
              />
              <InputVariantOutlineStateEnabledSizeDefault
                endAdornment={true}
                placeholderText="Rental date"
                className="!self-stretch !shrink-0 !w-full"
              />
              <InputVariantOutlineStateEnabledSizeDefault
                endAdornment={true}
                placeholderText="Return date"
                className="!self-stretch !shrink-0 !w-full"
              />
            </div>
            <button
              type="button"
              className="bg-[#ec0868] hover:bg-[#d0075c] rounded-xl text-white text-lg font-bold w-[90%] h-12 mt-4 mb-6 transition-colors"
            >
              Book now
            </button>
          </div>
          <img
            className="rounded-[20px] border border-[#000000] w-[900px] h-[540px] object-cover shadow-md"
            src="img99.png"
            alt="Car rental visual"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
