export interface IAboutUsProps {
  className?: string;
}

export const AboutUs = ({
  className,
  ...props
}: IAboutUsProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#ffffff] flex flex-col gap-0 items-center justify-start relative overflow-hidden " +
        className
      }
    >
      <div className="pt-7 pr-[72px] pb-7 pl-[72px] flex flex-row items-center justify-between shrink-0 w-[1440px] relative">
        <div className="flex flex-row gap-3 items-center justify-start shrink-0 w-[180px] relative">
          <img
            className="shrink-0 w-12 h-12 relative overflow-visible"
            src="car-3-10.svg"
          />
          <div className="flex flex-row gap-3 items-start justify-start shrink-0 relative">
            <div className="text-default-black text-left font-['Inter-Bold',_sans-serif] text-base font-bold relative">
              OpLEL{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-start justify-start shrink-0 relative">
          <div className="pt-1 pr-3 pb-1 pl-3 flex flex-row gap-0 items-center justify-center shrink-0 relative">
            <div className="text-default-black text-left font-['Inter-Medium',_sans-serif] text-lg font-medium relative">
              Home{" "}
            </div>
          </div>
          <div className="pt-1 pr-3 pb-1 pl-3 flex flex-row gap-0 items-center justify-center shrink-0 relative">
            <div className="text-default-black text-left font-['Inter-Medium',_sans-serif] text-lg font-medium relative">
              Vehicles{" "}
            </div>
          </div>
          <div className="pt-1 pr-3 pb-1 pl-3 flex flex-row gap-0 items-center justify-center shrink-0 relative">
            <div
              className="text-default-black text-left font-['Inter-Bold',_sans-serif] text-lg font-bold relative"
              style={{ textDecoration: "underline" }}
            >
              About Us{" "}
            </div>
          </div>
          <div className="pt-1 pr-3 pb-1 pl-3 flex flex-row gap-0 items-center justify-center shrink-0 relative">
            <div className="text-default-black text-left font-['Inter-Medium',_sans-serif] text-lg font-medium relative">
              Contact Us{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center justify-start shrink-0 w-[252px] relative">
          <div className="bg-[#ffffff] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[120px] h-10 relative overflow-hidden">
            <div className="text-[#8f2279] text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
              Register{" "}
            </div>
          </div>
          <div className="bg-[#8f2279] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[120px] h-10 relative overflow-hidden">
            <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
              Login{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[40px] flex flex-col gap-5 items-center justify-center shrink-0 w-[1296px] h-60 relative overflow-hidden">
        <div className="text-[#000000] text-center font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative">
          About Us{" "}
        </div>
        <div
          className="text-center font-['WorkSans-Regular',_sans-serif] text-xl font-normal relative overflow-hidden"
          style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
        >
          <span>
            <span className="home-about-us-span">Home /</span>
            <span className="home-about-us-span2">About Us</span>
          </span>{" "}
        </div>
      </div>
      <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
        <div className="flex flex-row gap-20 items-start justify-center shrink-0 w-[1296px] relative">
          <div className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative flex-1">
            Where every drive feels extraordinary{" "}
          </div>
          <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
            <div className="flex flex-row gap-6 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[416px] relative">
                <div
                  className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative w-[336px] overflow-hidden"
                  style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  Variety Brands{" "}
                </div>
                <div
                  className="text-default-black text-left font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[382px] h-[75px] overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  Platea non auctor fermentum sollicitudin. Eget adipiscing
                  augue sit quam natoque ornare cursus viverra odio{" "}
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[416px] relative">
                <div
                  className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative w-[336px] overflow-hidden"
                  style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  Awesome Suport{" "}
                </div>
                <div
                  className="text-default-black text-left font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[382px] h-[75px] overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  Eget adipiscing augue sit quam natoque ornare cursus viverra
                  odio. Diam quam gravida ultricies velit{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[416px] relative">
                <div
                  className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative w-[336px] overflow-hidden"
                  style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  Maximum Freedom{" "}
                </div>
                <div
                  className="text-default-black text-left font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[382px] h-[75px] overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  Diam quam gravida ultricies velit duis consequat integer. Est
                  aliquam posuere vel rhoncus massa volutpat in{" "}
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[416px] relative">
                <div
                  className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative w-[336px] overflow-hidden"
                  style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  flexibility on the go{" "}
                </div>
                <div
                  className="text-default-black text-left font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[382px] h-[75px] overflow-hidden"
                  style={{ textOverflow: "ellipsis" }}
                >
                  Vitae pretium nulla sed quam id nisl semper. Vel non in proin
                  egestas dis.faucibus rhoncus. Iaculis dignissim aenean
                  pellentesque nisl{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[60px] pr-[120px] pb-[60px] pl-[120px] flex flex-row items-start justify-between self-stretch shrink-0 relative">
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#ec0868] text-left font-['WorkSans-Bold',_sans-serif] text-[80px] font-bold relative">
            20k+{" "}
          </div>
          <div className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-xl font-bold relative">
            Happy customers{" "}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#ec0868] text-left font-['WorkSans-Bold',_sans-serif] text-[80px] font-bold relative">
            540+{" "}
          </div>
          <div className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-xl font-bold relative">
            Count of cars{" "}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#ec0868] text-left font-['WorkSans-Bold',_sans-serif] text-[80px] font-bold relative">
            25+{" "}
          </div>
          <div className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-xl font-bold relative">
            Years of experince{" "}
          </div>
        </div>
      </div>
      <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
        <div
          className="text-default-black text-center font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative w-[773px] overflow-hidden"
          style={{ textOverflow: "ellipsis" }}
        >
          Reviews from our customers{" "}
        </div>
        <div className="flex flex-row gap-6 items-start justify-start self-stretch shrink-0 relative">
          <div className="bg-[#f9f9f9] rounded-[20px] flex flex-col gap-0 items-center justify-end shrink-0 w-[416px] h-[480px] relative overflow-hidden">
            <div className="self-stretch flex-1 relative overflow-hidden">
              <div
                className="text-[#000000] text-center font-['WorkSans-Medium',_sans-serif] text-xl font-medium absolute left-9 top-32 w-[344px] h-[115px] overflow-hidden"
                style={{ textOverflow: "ellipsis" }}
              >
                Et aliquet netus at sapien pellentesque mollis nec dignissim
                maecenas. Amet erat volutpat quisque odio purus feugiat. In
                gravida neque{" "}
              </div>
            </div>
            <div className="bg-[#8f2279] pt-6 pr-[135px] pb-6 pl-[135px] flex flex-col gap-1 items-center justify-end self-stretch shrink-0 h-[124px] relative overflow-hidden">
              <div className="text-[rgba(255,255,255,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative">
                Kuphal LLC{" "}
              </div>
              <div className="text-[#ffffff] text-left font-['WorkSans-SemiBold',_sans-serif] text-xl font-semibold relative">
                Daria C.{" "}
              </div>
            </div>
            <img
              className="rounded-[50px] shrink-0 w-[84px] h-[84px] absolute left-[166px] top-[314px] overflow-hidden"
              style={{ objectFit: "cover" }}
              src="img0.png"
            />
            <img
              className="shrink-0 w-[39px] h-8 absolute left-[55px] top-[52px] overflow-visible"
              src="div0.svg"
            />
          </div>
          <div className="bg-[#f9f9f9] rounded-[20px] flex flex-col gap-0 items-center justify-end shrink-0 w-[416px] h-[480px] relative overflow-hidden">
            <div className="self-stretch flex-1 relative overflow-hidden">
              <div
                className="text-[#000000] text-center font-['WorkSans-Medium',_sans-serif] text-xl font-medium absolute left-9 top-32 w-[344px] h-[115px] overflow-hidden"
                style={{ textOverflow: "ellipsis" }}
              >
                Purus consectetur varius quis urna phasellus enim mattis. Sem
                tincidunt tortor nunc egestas amet adipiscing ligula{" "}
              </div>
            </div>
            <div className="bg-[#8f2279] pt-6 pr-[135px] pb-6 pl-[135px] flex flex-col gap-1 items-center justify-end self-stretch shrink-0 h-[124px] relative overflow-hidden">
              <div className="text-[rgba(255,255,255,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative">
                Glover - Orn{" "}
              </div>
              <div className="text-[#ffffff] text-left font-['WorkSans-SemiBold',_sans-serif] text-xl font-semibold relative">
                Vali M.{" "}
              </div>
            </div>
            <img
              className="rounded-[50px] shrink-0 w-[84px] h-[84px] absolute left-[166px] top-[314px] overflow-hidden"
              style={{ objectFit: "cover" }}
              src="img1.png"
            />
            <img
              className="shrink-0 w-[39px] h-8 absolute left-[55px] top-[52px] overflow-visible"
              src="div1.svg"
            />
          </div>
          <div className="bg-[#f9f9f9] rounded-[20px] flex flex-col gap-0 items-center justify-end shrink-0 w-[416px] h-[480px] relative overflow-hidden">
            <div className="self-stretch flex-1 relative overflow-hidden">
              <div
                className="text-[#000000] text-center font-['WorkSans-Medium',_sans-serif] text-xl font-medium absolute left-9 top-32 w-[344px] h-[115px] overflow-hidden"
                style={{ textOverflow: "ellipsis" }}
              >
                Quam neque odio urna euismod felis. Sit egestas magna in quisque
                famesdapibus quis sapien magna. Nisl non eget sit pellentesque
                tristique et{" "}
              </div>
            </div>
            <div className="bg-[#8f2279] pt-6 pr-[135px] pb-6 pl-[135px] flex flex-col gap-1 items-center justify-end self-stretch shrink-0 h-[124px] relative overflow-hidden">
              <div className="text-[rgba(255,255,255,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative">
                Haag LLC{" "}
              </div>
              <div className="text-[#ffffff] text-left font-['WorkSans-SemiBold',_sans-serif] text-xl font-semibold relative">
                Edi S.{" "}
              </div>
            </div>
            <img
              className="rounded-[50px] shrink-0 w-[84px] h-[84px] absolute left-[166px] top-[314px] overflow-hidden"
              style={{ objectFit: "cover" }}
              src="img2.png"
            />
            <img
              className="shrink-0 w-[39px] h-8 absolute left-[55px] top-[52px] overflow-visible"
              src="div2.svg"
            />
          </div>
        </div>
      </div>
      <div className="rounded-[20px] pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-2.5 items-center justify-start shrink-0 w-[1440px] relative">
        <div className="bg-[#ec0868] rounded-[20px] pt-[58px] pr-[86px] pb-[58px] pl-[86px] flex flex-row gap-[102px] items-center justify-start self-stretch shrink-0 h-[427px] relative overflow-hidden">
          <div className="flex flex-col gap-10 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
              <img
                className="shrink-0 w-[1319.55px] h-[167.45px] absolute left-[-711px] top-[-57.5px] overflow-visible"
                src="group0.svg"
              />
              <div
                className="text-default-white text-left font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative overflow-hidden"
                style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              >
                Looking for a car?{" "}
              </div>
              <div className="text-default-white text-left font-['WorkSans-SemiBold',_sans-serif] text-[40px] leading-[26px] font-semibold relative">
                +537 547-6401{" "}
              </div>
              <div
                className="text-default-white text-left font-['WorkSans-Regular',_sans-serif] text-base leading-6 font-normal relative w-[586px] h-[53px] overflow-hidden"
                style={{ textOverflow: "ellipsis" }}
              >
                Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
                bibendum ullamcorper in
                <br />. Diam tincidunt tincidunt erat <br />
                at semper fermentum. Id ultricies quis elit magna magna at.
                Fames etiam quis diam nunc. Gravida auctor fermentum morbi
                vulputate ac egestas orci. Pretium convallis id diam sed commodo
                vestibulum lobortis volutpat praesent. Cras nulla semper tellus
                enim malesuada ornare curabitur dui.{" "}
              </div>
            </div>
            <div className="bg-[#8f2279] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center shrink-0 h-10 relative overflow-hidden">
              <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">
                Book now{" "}
              </div>
            </div>
          </div>
          <img
            className="shrink-0 w-[698px] h-[418px] absolute left-[609.5px] top-[45px]"
            style={{ opacity: "0.45", objectFit: "cover" }}
            src="img3.png"
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
                  src="group1.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group2.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group3.svg"
                />
                <img
                  className="shrink-0 w-[23.99px] h-6 relative overflow-visible"
                  src="group4.svg"
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
