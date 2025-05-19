import { Frame124 } from "../Frame124/Frame124";
import { GearShift11 } from "../GearShift11/GearShift11";
import { G17 } from "../G17/G17";
import { G1593 } from "../G1593/G1593";
import { Link } from "react-router";
import { Navbar } from "../../common/Navbar/Navbar";

export interface ICarDetailsProps {
  className?: string;
}

export const CarDetails = ({
  className,
  ...props
}: ICarDetailsProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#ffffff] flex flex-col gap-0 items-center justify-start relative overflow-hidden " +
        className
      }
    >
      <Navbar />
      <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-row gap-6 items-start justify-center self-stretch shrink-0 relative">
        <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
          <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
              <div
                className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-[40px] font-bold relative overflow-hidden"
                style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              >
                BMW{" "}
              </div>
              <div className="flex flex-row gap-1 items-center justify-end shrink-0 relative">
                <div
                  className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-[40px] font-semibold relative overflow-hidden"
                  style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  $25{" "}
                </div>
                <div
                  className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                  style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  / day{" "}
                </div>
              </div>
            </div>
            <img
              className="shrink-0 w-full max-w-[636px] h-auto relative"
              style={{
                objectFit: "contain",
              }}
              src="img7.png"
              alt="Car"
            />
          </div>
          <div className="flex flex-row gap-6 items-start justify-start shrink-0 w-[636px] relative">
            <img
              className="rounded-xl flex flex-col gap-2.5 items-start justify-start shrink-0 w-[140px] h-[100px] relative"
              style={{ objectFit: "cover" }}
              src="img1.png"
            />
            <img
              className="rounded-xl flex flex-col gap-2.5 items-start justify-start shrink-0 w-[140px] h-[100px] relative"
              style={{ objectFit: "cover" }}
              src="img2.png"
            />
            <img
              className="rounded-xl flex flex-col gap-2.5 items-start justify-start shrink-0 w-[140px] h-[100px] relative"
              style={{ objectFit: "cover" }}
              src="img3.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-16 items-start justify-start shrink-0 relative">
          <div className="flex flex-col gap-10 items-start justify-start shrink-0 relative">
            <div
              className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              Technical Specification{" "}
            </div>
            <div className="flex flex-row gap-6 items-start justify-start flex-wrap content-start shrink-0 w-[636px] relative">
              <div className="bg-[#fafafa] rounded-xl p-6 flex flex-col gap-5 items-center justify-center shrink-0 w-[196px] h-[148px] relative overflow-hidden">
                <div className="flex items-center justify-center w-6 h-6 relative overflow-hidden">
                  <img
                    className="w-[83.33%] h-[83.33%] absolute"
                    src="group0.svg"
                    alt="Gear Box Icon"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div
                    className="text-default-black text-center font-['WorkSans-SemiBold',_sans-serif] text-base font-semibold relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Gear Box{" "}
                  </div>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Automat{" "}
                  </div>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-xl p-6 flex flex-col gap-5 items-center justify-center shrink-0 w-[196px] h-[148px] relative overflow-hidden">
                <div className="flex items-center justify-center w-6 h-6 relative overflow-hidden">
                  <img
                    className="h-[auto] absolute"
                    src="clip-path-group0.svg"
                    alt="Fuel Icon"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div
                    className="text-default-black text-center font-['WorkSans-SemiBold',_sans-serif] text-base font-semibold relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Fuel{" "}
                  </div>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Petrol{" "}
                  </div>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-xl p-6 flex flex-col gap-5 items-center justify-center shrink-0 w-[196px] h-[148px] relative overflow-hidden">
                <div className="flex items-center justify-center w-6 h-6 relative overflow-hidden">
                  <img
                    className="h-[auto] absolute"
                    src="g3353.png"
                    alt="Doors Icon"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div
                    className="text-default-black text-center font-['WorkSans-SemiBold',_sans-serif] text-base font-semibold relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Doors{" "}
                  </div>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    2{" "}
                  </div>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-xl p-6 flex flex-col gap-5 items-center justify-center shrink-0 w-[196px] h-[148px] relative overflow-hidden">
                <div className="flex items-center justify-center w-6 h-6 relative overflow-hidden">
                  <img
                    className="w-[83.33%] h-[83.33%] absolute"
                    src="group0.svg"
                    alt="Air Conditioner Icon"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div
                    className="text-default-black text-center font-['WorkSans-SemiBold',_sans-serif] text-base font-semibold relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Air Conditioner{" "}
                  </div>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Yes{" "}
                  </div>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-xl p-6 flex flex-col gap-5 items-center justify-center shrink-0 w-[196px] h-[148px] relative overflow-hidden">
                <div className="flex items-center justify-center w-6 h-6 relative overflow-hidden">
                  <img
                    className="h-[auto] absolute"
                    src="g2337.png"
                    alt="Seats Icon"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div
                    className="text-default-black text-center font-['WorkSans-SemiBold',_sans-serif] text-base font-semibold relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Seats{" "}
                  </div>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    5{" "}
                  </div>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-xl p-6 flex flex-col gap-5 items-center justify-center shrink-0 w-[196px] h-[148px] relative overflow-hidden">
                <div className="flex items-center justify-center w-6 h-6 relative overflow-hidden">
                  <img
                    className="h-[auto] absolute"
                    src="Vector.png"
                    alt="Distance Icon"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div
                    className="text-default-black text-center font-['WorkSans-SemiBold',_sans-serif] text-base font-semibold relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Distance{" "}
                  </div>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    500{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ec0868] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[290px] h-[50px] relative overflow-hidden">
            <div className="text-default-white text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
              Rent this car{" "}
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
            <div
              className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              Car Equipment{" "}
            </div>
            <div className="flex flex-row gap-[60px] items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-[17px] items-start justify-start shrink-0 relative">
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                  <Frame124 className="!shrink-0"></Frame124>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    ABS{" "}
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                  <Frame124 className="!shrink-0"></Frame124>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Air Bags{" "}
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                  <Frame124 className="!shrink-0"></Frame124>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Cruise Control{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start shrink-0 relative">
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                  <Frame124 className="!shrink-0"></Frame124>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    ABS{" "}
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                  <Frame124 className="!shrink-0"></Frame124>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Air Bags{" "}
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                  <Frame124 className="!shrink-0"></Frame124>
                  <div
                    className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    Air Conditioner{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
        <div className="flex flex-row items-end justify-between shrink-0 w-[1296px] relative">
          <div
            className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative w-[631px] overflow-hidden"
            style={{ textOverflow: "ellipsis" }}
          >
            Other cars{" "}
          </div>
          <div className="flex flex-row gap-2 items-start justify-start shrink-0 relative">
            <div
              className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-xl font-bold relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              View All{" "}
            </div>
            <img
              className="shrink-0 w-6 h-6 relative overflow-visible"
              src="arrow-right0.svg"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start justify-start flex-wrap content-start shrink-0 w-[1296px] relative">
          <div className="bg-[#fafafa] rounded-[20px] p-6 flex flex-col gap-10 items-center justify-start shrink-0 w-[416px] relative overflow-hidden">
            <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
              <img
                className="self-stretch shrink-0 h-60 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="img4.png"
              />
              <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                    <div
                      className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Mercedes{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Sedan{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
                    <div
                      className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      $25{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-sm font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      per day{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    <GearShift11 className="!shrink-0"></GearShift11>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automat{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Air Conditioner{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ec0868] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 h-[50px] relative overflow-hidden">
              <div className="text-default-white text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
                View Details{" "}
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] rounded-[20px] p-6 flex flex-col gap-10 items-center justify-start shrink-0 w-[416px] relative overflow-hidden">
            <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
              <img
                className="self-stretch shrink-0 h-60 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="img5.png"
              />
              <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                    <div
                      className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Mercedes{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Sport{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
                    <div
                      className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      $50{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-sm font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      per day{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    <GearShift11 className="!shrink-0"></GearShift11>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automat{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Air Conditioner{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ec0868] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 h-[50px] relative overflow-hidden">
              <div className="text-default-white text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
                View Details{" "}
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] rounded-[20px] p-6 flex flex-col gap-10 items-center justify-start shrink-0 w-[416px] relative overflow-hidden">
            <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
              <img
                className="self-stretch shrink-0 h-60 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="img6.png"
              />
              <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                    <div
                      className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Mercedes{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Sedan{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
                    <div
                      className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      $45{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-sm font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      per day{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    <GearShift11 className="!shrink-0"></GearShift11>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automat{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Air Conditioner{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ec0868] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 h-[50px] relative overflow-hidden">
              <div className="text-default-white text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
                View Details{" "}
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] rounded-[20px] p-6 flex flex-col gap-10 items-center justify-start shrink-0 w-[416px] relative overflow-hidden">
            <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
              <img
                className="self-stretch shrink-0 h-60 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="img7.png"
              />
              <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                    <div
                      className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Porsche{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      SUV{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
                    <div
                      className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      $40{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-sm font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      per day{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    <GearShift11 className="!shrink-0"></GearShift11>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automat{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Air Conditioner{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ec0868] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 h-[50px] relative overflow-hidden">
              <div className="text-default-white text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
                View Details{" "}
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] rounded-[20px] p-6 flex flex-col gap-10 items-center justify-start shrink-0 w-[416px] relative overflow-hidden">
            <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
              <img
                className="self-stretch shrink-0 h-60 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="img8.png"
              />
              <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                    <div
                      className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Toyota{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Sedan{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
                    <div
                      className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      $35{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-sm font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      per day{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    <GearShift11 className="!shrink-0"></GearShift11>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automat{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Air Conditioner{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ec0868] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 h-[50px] relative overflow-hidden">
              <div className="text-default-white text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
                View Details{" "}
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] rounded-[20px] p-6 flex flex-col gap-10 items-center justify-start shrink-0 w-[416px] relative overflow-hidden">
            <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
              <img
                className="self-stretch shrink-0 h-60 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="img9.png"
              />
              <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                    <div
                      className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Porsche{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      SUV{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
                    <div
                      className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      $50{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-sm font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      per day{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    <GearShift11 className="!shrink-0"></GearShift11>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automat{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Air Conditioner{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ec0868] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 h-[50px] relative overflow-hidden">
              <div className="text-default-white text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
                View Details{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] rounded-[40px] pt-[60px] pr-10 pb-[60px] pl-10 flex flex-row items-center justify-between shrink-0 w-[1296px] relative">
          <img
            className="shrink-0 w-[82px] h-[54px] relative overflow-visible"
            src="logo1.svg"
          />
          <div className="shrink-0 w-[115px] h-11 relative overflow-hidden">
            <img
              className="w-[96.96%] h-[100%] absolute right-[1.1%] left-[1.94%] bottom-[0%] top-[0%] overflow-visible"
              src="layer-10.svg"
            />
          </div>
          <div className="shrink-0 w-[55px] h-[54px] relative overflow-hidden">
            <img
              className="w-[95%] h-[95%] absolute right-[2.5%] left-[2.5%] bottom-[2.5%] top-[2.5%] overflow-visible"
              src="layer-11.svg"
            />
          </div>
          <div className="shrink-0 w-[109px] h-11 relative overflow-hidden">
            <img
              className="h-[auto] absolute left-[0.05px] top-[43.95px] overflow-visible"
              style={{ transform: "translate(0px, -43.89px)" }}
              src="g-29930.svg"
            />
          </div>
          <img
            className="shrink-0 w-[55px] h-[54px] relative overflow-visible"
            src="logo5.svg"
          />
          <img
            className="shrink-0 w-[124px] h-[42px] relative overflow-visible"
            src="logo6.svg"
          />
        </div>
      </div>
      <div className="bg-[#ffffff] pt-[60px] pr-[72px] pb-10 pl-[72px] flex flex-col gap-20 items-center justify-start shrink-0 relative">
        <div className="flex flex-col gap-[60px] items-center justify-start shrink-0 relative">
          <div className="flex flex-row items-center justify-between shrink-0 w-[1296px] relative">
            <div className="flex flex-row gap-3 items-center justify-start shrink-0 w-[180px] relative">
              <img
                className="shrink-0 w-12 h-12 relative overflow-visible"
                src="car-3-11.svg"
              />
              <div className="flex flex-row gap-3 items-start justify-start shrink-0 relative">
                <div className="text-default-black text-left font-['Inter-Bold',_sans-serif] text-base font-bold relative">
                  OpLEL{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start shrink-0 w-[180px] relative">
              <div className="bg-[#8f2279] rounded-[50px] shrink-0 w-10 h-10 relative overflow-hidden">
                <img
                  className="w-6 h-6 absolute left-2 top-2 overflow-visible"
                  src="map-pin0.svg"
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-center shrink-0 relative">
                <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative">
                  Address{" "}
                </div>
                <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-base leading-[26px] font-semibold relative">
                  Oxford Ave. Cary, NC 27511{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start shrink-0 w-[180px] relative">
              <div className="bg-[#8f2279] rounded-[50px] shrink-0 w-10 h-10 relative overflow-hidden">
                <div className="w-6 h-6 absolute left-2 top-2 overflow-hidden"></div>
                <img
                  className="w-6 h-6 absolute left-[7.66px] top-2 overflow-visible"
                  src="mail0.svg"
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-center self-stretch shrink-0 relative">
                <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative">
                  Email{" "}
                </div>
                <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-base leading-[26px] font-semibold relative">
                  nwiger@yahoo.com{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start shrink-0 w-[180px] relative">
              <img
                className="rounded-[50px] shrink-0 w-10 h-10 relative overflow-visible"
                src="icon-bg2.svg"
              />
              <div className="flex flex-col gap-3 items-start justify-center shrink-0 relative">
                <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative">
                  Phone{" "}
                </div>
                <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-base leading-[26px] font-semibold relative">
                  +537 547-6401{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between shrink-0 w-[1296px] relative">
            <div className="flex flex-col items-start justify-between self-stretch shrink-0 w-[280px] relative">
              <div
                className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-xl leading-7 font-semibold relative self-stretch overflow-hidden"
                style={{ textOverflow: "ellipsis" }}
              >
                Faucibus faucibus pellentesque dictum turpis. Id pellentesque
                turpis massa a id iaculis lorem turpis euismod. Purus at quisque
                integer sit. Libero quis sapien tempus pellentesque netus leo
                feugiat augue ut. Sollicitudin vitae dictum sed vulputate.{" "}
              </div>
              <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group3.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group4.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group5.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group6.svg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[180px] relative">
              <div
                className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-xl font-semibold relative overflow-hidden"
                style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              >
                Useful links{" "}
              </div>
              <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  About us{" "}
                </div>
                <div
                  className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  Contact us{" "}
                </div>
                <div
                  className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  Gallery{" "}
                </div>
                <div
                  className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  Blog{" "}
                </div>
                <div
                  className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative w-[85px] overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  F.A.Q{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[180px] relative">
              <div
                className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-xl font-semibold relative overflow-hidden"
                style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              >
                Vehicles{" "}
              </div>
              <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative">
                  Sedan{" "}
                </div>
                <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative">
                  Cabriolet{" "}
                </div>
                <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative">
                  Pickup{" "}
                </div>
                <div
                  className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  Minivan{" "}
                </div>
                <div className="text-default-black text-left font-['WorkSans-Regular',_sans-serif] text-base leading-[26px] font-normal relative">
                  SUV{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[rgba(0,0,0,0.50)] text-left font-['Inter-Regular',_sans-serif] text-sm leading-[26px] font-normal relative">
          © Copyright Car Rental 2024. Design by Figma. guru{" "}
        </div>
      </div>
    </div>
  );
};
