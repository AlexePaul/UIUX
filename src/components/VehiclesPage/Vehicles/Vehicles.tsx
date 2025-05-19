import { GearShift11 } from "../GearShift11/GearShift11";
import { G17 } from "../G17/G17";
import { G1593 } from "../G1593/G1593";
import { Navbar } from '../../common/Navbar/Navbar';
import { CarCard } from '../../common/CarCard/CarCard';
import { Link } from "react-router";

export interface IVehiclesProps {
  className?: string;
}

export const Vehicles = ({
  className,
  ...props
}: IVehiclesProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#ffffff] flex flex-col gap-0 items-center justify-start relative overflow-hidden " +
        className
      }
    >
      <Navbar />
      <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
        <div
          className="text-default-black text-center font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative overflow-hidden"
          style={{ textOverflow: "ellipsis" }}
        >
          Select a vehicle group{" "}
        </div>
        <div className="flex flex-row gap-6 items-start justify-start shrink-0 relative">
          <div className="bg-[#ec0868] rounded-[50px] pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2 items-center justify-center shrink-0 w-[148px] h-[50px] relative">
            <div
              className="text-default-white text-left font-['WorkSans-Medium',_sans-serif] text-base font-medium relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              All vehicles{" "}
            </div>
          </div>
          <div className="bg-[#f9f9f9] rounded-[50px] pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2 items-center justify-center shrink-0 w-[148px] h-[50px] relative">
            <div className="shrink-0 w-7 h-7 relative overflow-hidden">
              <img
                className="w-[100%] h-[46.48%] absolute right-[0%] left-[0%] bottom-[26.76%] top-[26.76%] overflow-visible"
                src="group0.svg"
              />
            </div>
            <div
              className="text-[#000000] text-left font-['WorkSans-Medium',_sans-serif] text-base font-medium relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              Sedan{" "}
            </div>
          </div>
          <div className="bg-[#f9f9f9] rounded-[50px] pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2 items-center justify-center shrink-0 w-[148px] h-[50px] relative">
            <div className="shrink-0 w-7 h-7 relative overflow-hidden">
              <img
                className="w-[100%] h-[40.23%] absolute right-[0%] left-[0%] bottom-[29.88%] top-[29.88%] overflow-visible"
                src="group1.svg"
              />
            </div>
            <div
              className="text-[#000000] text-left font-['WorkSans-Medium',_sans-serif] text-base font-medium relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              Cabriolet{" "}
            </div>
          </div>
          <div className="bg-[#f9f9f9] rounded-[50px] pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2 items-center justify-center shrink-0 w-[148px] h-[50px] relative">
            <div className="shrink-0 w-7 h-7 relative overflow-hidden">
              <img
                className="w-[100%] h-[52.74%] absolute right-[0%] left-[0%] bottom-[23.63%] top-[23.63%] overflow-visible"
                src="group2.svg"
              />
            </div>
            <div
              className="text-[#000000] text-left font-['WorkSans-Medium',_sans-serif] text-base font-medium relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              Pickup{" "}
            </div>
          </div>
          <div className="bg-[#f9f9f9] rounded-[50px] pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2 items-center justify-center shrink-0 w-[148px] h-[50px] relative">
            <div className="shrink-0 w-7 h-7 relative overflow-hidden">
              <img
                className="w-[100%] h-[52.73%] absolute right-[0%] left-[0%] bottom-[23.63%] top-[23.63%] overflow-visible"
                src="group3.svg"
              />
            </div>
            <div
              className="text-[#000000] text-left font-['WorkSans-Medium',_sans-serif] text-base font-medium relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              Suv{" "}
            </div>
          </div>
          <div className="bg-[#f9f9f9] rounded-[50px] pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2 items-center justify-center shrink-0 w-[148px] h-[50px] relative">
            <div className="shrink-0 w-7 h-7 relative overflow-hidden">
              <img
                className="w-[100%] h-[46.48%] absolute right-[0%] left-[0%] bottom-[26.76%] top-[26.76%] overflow-visible"
                src="group4.svg"
              />
            </div>
            <div
              className="text-[#000000] text-left font-['WorkSans-Medium',_sans-serif] text-base font-medium relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              Minivan{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start justify-start flex-wrap content-start shrink-0 w-[1296px] relative">
          {/* Use CarCard component for each car with VehiclesPage assets */}
          {[
            {
              name: 'Mercedes',
              type: 'Sedan',
              price: '$25',
              imgSrc: '/VehiclesPage/img0.png',
              altText: 'Mercedes Sedan',
              transmission: 'Automat',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Mercedes',
              type: 'Sport',
              price: '$50',
              imgSrc: '/VehiclesPage/img1.png',
              altText: 'Mercedes Sport',
              transmission: 'Manual',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Mercedes',
              type: 'Sedan',
              price: '$45',
              imgSrc: '/VehiclesPage/img2.png',
              altText: 'Mercedes Sedan',
              transmission: 'Automat',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Porsche',
              type: 'SUV',
              price: '$40',
              imgSrc: '/VehiclesPage/img3.png',
              altText: 'Porsche SUV',
              transmission: 'Automat',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Porsche',
              type: 'SUV',
              price: '$50',
              imgSrc: '/VehiclesPage/img4.png',
              altText: 'Porsche SUV',
              transmission: 'Automat',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Mercedes',
              type: 'Van',
              price: '$50',
              imgSrc: '/VehiclesPage/img5.png',
              altText: 'Mercedes Van',
              transmission: 'Automat',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Toyota',
              type: 'Sport',
              price: '$60',
              imgSrc: '/VehiclesPage/img6.png',
              altText: 'Toyota Sport',
              transmission: 'Manual',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Maybach',
              type: 'Sedan',
              price: '$70',
              imgSrc: '/VehiclesPage/img7.png',
              altText: 'Maybach Sedan',
              transmission: 'Automat',
              fuel: 'PB 95',
              ac: true,
            },
          ].map((car, idx) => (
            <Link to="/car-details" key={idx}>
              <CarCard {...car} />
            </Link>
          ))}
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
                  src="group5.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group6.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group7.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group8.svg"
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
