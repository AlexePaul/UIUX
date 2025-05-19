import { Navbar } from '../../common/Navbar/Navbar';
import { HeroSection } from './HeroSection';
import { FeatureCard } from '../../common/FeatureCard/FeatureCard';
import { FactsInNumbers } from './FactsInNumbers';
import { Footer } from '../../common/Footer/Footer';
import { GearShift11 } from '../GearShift11/GearShift11';
import { G17 } from '../G17/G17';
import { G1593 } from '../G1593/G1593';
import { BrandLogos } from './BrandLogos';

// Import icons from src/assets
import availabilityIconFromFile from '../../../assets/location 1.svg'; // Changed to location 1.svg
import comfortIconFromFile from '../../../assets/g582.svg';
import savingsIconFromFile from '../../../assets/g135.svg';

export interface IHomepageProps {
  className?: string;
}

export const Homepage = ({
  className,
  ...props
}: IHomepageProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#ffffff] flex flex-col gap-0 items-center justify-start relative overflow-hidden min-w-[1440px] " +
        className
      }
    >
      <Navbar />
      <div className="bg-[#ffffff] px-[72px] flex flex-col items-center justify-start self-stretch shrink-0 relative">
        <HeroSection />
      </div>
      <div className="pt-[80px] px-[72px] pb-[80px] flex flex-row items-start justify-around self-stretch shrink-0 relative gap-8">
        <FeatureCard
          iconSrc={availabilityIconFromFile} // Use imported icon for Availability
          title="Availability"
          description="Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
        />
        <FeatureCard
          iconSrc={comfortIconFromFile} // Use imported icon
          title="Comfort"
          description="Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis"
        />
        <FeatureCard
          iconSrc={savingsIconFromFile} // Use imported icon
          title="Savings"
          description="Pretium convallis id diam sed commodo vestibulum lobortis volutpat"
        />
      </div>
      <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
        <div className="flex flex-row items-end justify-between shrink-0 w-[1296px] relative">
          <div
            className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative w-[631px] overflow-hidden"
            style={{ textOverflow: "ellipsis" }}
          >
            Choose the car that <br />
            suits you{" "}
          </div>
          <div className="flex flex-row gap-2 items-start justify-start shrink-0 relative cursor-pointer">
            <div
              className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-xl font-bold relative overflow-hidden"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              View All{" "}
            </div>
            <img
              className="shrink-0 w-6 h-6 relative overflow-visible"
              src="/arrow-right0.svg" // Assuming arrow-right0.svg is in public folder
              alt="View all cars"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start justify-start flex-wrap content-start shrink-0 w-[1296px] relative">
          {/* Placeholder for Car Cards - map through car data here */}
          {/* Example Car Card Structure (repeat for each car, replace with dynamic data) */}
          {[
            { id: 1, name: "Mercedes", type: "Sedan", price: "$25", imgSrc: "/VehiclesPage/img0.png", altText: "Mercedes Sedan" },
            { id: 2, name: "Mercedes", type: "Sport", price: "$50", imgSrc: "/VehiclesPage/img1.png", altText: "Mercedes Sport" },
            { id: 3, name: "Mercedes", type: "SUV", price: "$40", imgSrc: "/VehiclesPage/img2.png", altText: "Mercedes SUV" },
            // Add more car objects as needed, up to 6 for two rows if desired
          ].map((car) => (
            <div key={car.id} className="bg-[#fafafa] rounded-[20px] p-6 flex flex-col gap-10 items-center justify-start shrink-0 w-[416px] relative overflow-hidden">
              <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
                <img
                  className="self-stretch shrink-0 h-60 relative overflow-hidden object-contain"
                  src={car.imgSrc} // Dynamic image source
                  alt={car.altText} // Dynamic alt text
                />
                <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                      <div
                        className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                        style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      >
                        {car.name} {/* Dynamic car name */}
                      </div>
                      <div
                        className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative overflow-hidden"
                        style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      >
                        {car.type} {/* Dynamic car type */}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-end justify-start shrink-0 relative">
                      <div
                        className="text-[#8f2279] text-left font-['WorkSans-SemiBold',_sans-serif] text-2xl font-semibold relative overflow-hidden"
                        style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      >
                        {car.price} {/* Dynamic car price */}
                      </div>
                      <div
                        className="text-[rgba(0,0,0,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-sm font-normal relative overflow-hidden"
                        style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      >
                        per day
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative px-2"> {/* Changed items-start to items-center for vertical alignment */}
                    {/* Group 1: Automatic */}
                    <div className="flex flex-col items-center justify-start gap-1 w-1/3 pt-1"> {/* Added pt-1 for slight downward adjustment if needed */}
                      <GearShift11 className="!shrink-0 w-5 h-5" />
                      <div
                        className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-xs font-normal relative"
                      >
                        Automatic
                      </div>
                    </div>
                    {/* Group 2: PB 95 */}
                    <div className="flex flex-col items-center justify-start gap-1 w-1/3 pt-1"> {/* Added pt-1 */}
                      <G17 className="!shrink-0 w-5 h-5" />
                      <div
                        className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-xs font-normal relative"
                      >
                        PB 95
                      </div>
                    </div>
                    {/* Group 3: Air Conditioner */}
                    <div className="flex flex-col items-center justify-start gap-1 w-1/3 pt-1"> {/* Added pt-1 */}
                      <G1593 className="!shrink-0 w-5 h-5" />
                      <div
                        className="text-[rgba(0,0,0,0.60)] text-center font-['WorkSans-Regular',_sans-serif] text-xs font-normal relative whitespace-normal"
                        // Removed fixed width w-[100px] to allow natural centering within its 1/3 container
                      >
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
          ))}
        </div>
      </div>
      <FactsInNumbers />
      <BrandLogos /> {/* Added BrandLogos section */}
      <Footer />
    </div>
  );
};
