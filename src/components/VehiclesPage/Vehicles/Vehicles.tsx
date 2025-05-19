import { GearShift11 } from "../GearShift11/GearShift11";
import { G17 } from "../G17/G17";
import { G1593 } from "../G1593/G1593";
import { Navbar } from '../../common/Navbar/Navbar';
import { CarCard } from '../../common/CarCard/CarCard';
import { Link } from "react-router";
import { Footer } from "../../common/Footer/Footer";

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
                src="sedan.svg"
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
                src="cabriolet.svg"
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
                src="pickup.svg"
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
                src="suv.svg"
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
                src="minivan.svg"
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
          {[
            {
              name: 'Mercedes',
              type: 'Sedan',
              price: '$25',
              imgSrc: '/VehiclesPage/img0.png',
              altText: 'Mercedes Sedan',
              transmission: 'Automatic',
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
              transmission: 'Automatic',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Porsche',
              type: 'SUV',
              price: '$40',
              imgSrc: '/VehiclesPage/img3.png',
              altText: 'Porsche SUV',
              transmission: 'Automatic',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Porsche',
              type: 'SUV',
              price: '$50',
              imgSrc: '/VehiclesPage/img4.png',
              altText: 'Porsche SUV',
              transmission: 'Automatic',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Mercedes',
              type: 'Van',
              price: '$50',
              imgSrc: '/VehiclesPage/img6.png',
              altText: 'Mercedes Van',
              transmission: 'Automatic',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Toyota',
              type: 'Sport',
              price: '$60',
              imgSrc: '/VehiclesPage/img7.png',
              altText: 'Toyota Sport',
              transmission: 'Manual',
              fuel: 'PB 95',
              ac: true,
            },
            {
              name: 'Maybach',
              type: 'Sedan',
              price: '$70',
              imgSrc: '/VehiclesPage/img8.png',
              altText: 'Maybach Sedan',
              transmission: 'Automatic',
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
      <Footer />
    </div>
  );
};
