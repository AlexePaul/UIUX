import { Frame124 } from "../Frame124/Frame124";
import { GearShift11 } from "../GearShift11/GearShift11";
import { G17 } from "../G17/G17";
import { G1593 } from "../G1593/G1593";
import { Link } from "react-router";
import { Navbar } from "../../common/Navbar/Navbar";
import { Footer } from "../../common/Footer/Footer";

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
              src="/VehiclesPage/img1.png"
            />
            <img
              className="rounded-xl flex flex-col gap-2.5 items-start justify-start shrink-0 w-[140px] h-[100px] relative"
              style={{ objectFit: "cover" }}
              src="/VehiclesPage/img2.png"
            />
            <img
              className="rounded-xl flex flex-col gap-2.5 items-start justify-start shrink-0 w-[140px] h-[100px] relative"
              style={{ objectFit: "cover" }}
              src="/VehiclesPage/img3.png"
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
                    className="w-6 h-6"
                    src="/Homepage/group0.svg"
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
                    Automatic{" "}
                  </div>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-xl p-6 flex flex-col gap-5 items-center justify-center shrink-0 w-[196px] h-[148px] relative overflow-hidden">
                <div className="flex items-center justify-center w-6 h-6 relative overflow-hidden">
                  <img
                    className="w-6 h-6"
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
                    className="w-6 h-6"
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
                    className="w-6 h-6"
                    src="/Homepage/ac.svg"
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
                    className="w-6 h-6"
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
                    className="w-6 h-6"
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
          {/* Card 1 */}
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
                    <GearShift11 className="!shrink-0 flex items-center justify-center" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automatic{" "}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6 flex items-center justify-center" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6 flex items-center justify-center" />
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
          {/* Card 2 */}
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
                    <GearShift11 className="!shrink-0 flex items-center justify-center" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automatic{" "}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6 flex items-center justify-center" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6 flex items-center justify-center" />
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
          {/* Card 3 */}
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
                      BMW{" "}
                    </div>
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      X5{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
                    <div
                      className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      $75{" "}
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
                    <GearShift11 className="!shrink-0 flex items-center justify-center" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Automatic{" "}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1 shrink-0 relative">
                    <G17 className="!shrink-0 w-6 h-6 flex items-center justify-center" />
                    <div
                      className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      PB 95{" "}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-1 shrink-0 relative">
                    <G1593 className="!shrink-0 w-6 h-6 flex items-center justify-center" />
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
      </div>
      <Footer />
    </div>
  );
};
