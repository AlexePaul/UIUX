import { Navbar } from '../common/Navbar/Navbar';
import { Footer } from '../common/Footer/Footer';
import React from 'react';

const reviews = [
  {
    text: 'Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque',
    company: 'Kuphal LLC',
    name: 'Daria C.',
    img: '/aboutus/img0.png',
    badge: '/aboutus/div0.svg',
  },
  {
    text: 'Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula',
    company: 'Glover - Orn',
    name: 'Vali M.',
    img: '/aboutus/img1.png',
    badge: '/aboutus/div1.svg',
  },
  {
    text: 'Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et',
    company: 'Haag LLC',
    name: 'Edi S.',
    img: '/aboutus/img2.png',
    badge: '/aboutus/div2.svg',
  },
];

export default function AboutUs() {
  return (
    <div className="bg-[#ffffff] flex flex-col gap-0 items-center justify-start relative overflow-hidden">
      <Navbar />
      <div className="rounded-[40px] flex flex-col gap-5 items-center justify-center shrink-0 w-full max-w-[1296px] h-60 relative overflow-hidden mt-10">
        <div className="text-[#000000] text-center font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative">About Us</div>
        <div className="text-center font-['WorkSans-Regular',_sans-serif] text-xl font-normal relative overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <span><span className="home-about-us-span">Home /</span> <span className="home-about-us-span2">About Us</span></span>
        </div>
      </div>
      <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
        <div className="flex flex-row gap-20 items-start justify-center shrink-0 w-full max-w-[1296px] relative">
          <div className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative flex-1">
            Where every drive feels extraordinary
          </div>
          <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
            <div className="flex flex-row gap-6 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[416px] relative">
                <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative w-[336px] overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Variety Brands
                </div>
                <div className="text-default-black text-left font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[382px] h-[75px] overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                  Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[416px] relative">
                <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative w-[336px] overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Awesome Support
                </div>
                <div className="text-default-black text-left font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[382px] h-[75px] overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                  Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[416px] relative">
                <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative w-[336px] overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Maximum Freedom
                </div>
                <div className="text-default-black text-left font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[382px] h-[75px] overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                  Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[416px] relative">
                <div className="text-default-black text-left font-['WorkSans-SemiBold',_sans-serif] text-[28px] font-semibold relative w-[336px] overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Flexibility on the go
                </div>
                <div className="text-default-black text-left font-['Inter-Regular',_sans-serif] text-base leading-6 font-normal relative w-[382px] h-[75px] overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                  Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[60px] pr-[120px] pb-[60px] pl-[120px] flex flex-row items-start justify-between self-stretch shrink-0 relative max-w-[1296px] w-full mx-auto">
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#ec0868] text-left font-['WorkSans-Bold',_sans-serif] text-[80px] font-bold relative">20k+</div>
          <div className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-xl font-bold relative">Happy customers</div>
        </div>
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#ec0868] text-left font-['WorkSans-Bold',_sans-serif] text-[80px] font-bold relative">540+</div>
          <div className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-xl font-bold relative">Count of cars</div>
        </div>
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#ec0868] text-left font-['WorkSans-Bold',_sans-serif] text-[80px] font-bold relative">25+</div>
          <div className="text-default-black text-left font-['WorkSans-Bold',_sans-serif] text-xl font-bold relative">Years of experience</div>
        </div>
      </div>
      <div className="pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
        <div className="text-default-black text-center font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative w-full max-w-[773px] overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
          Reviews from our customers
        </div>
        <div className="flex flex-row gap-6 items-start justify-center self-stretch shrink-0 relative flex-wrap">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#f9f9f9] rounded-[20px] flex flex-col gap-0 items-center justify-end shrink-0 w-[416px] h-[480px] relative overflow-hidden">
              <div className="self-stretch flex-1 relative overflow-hidden">
                <div className="text-[#000000] text-center font-['WorkSans-Medium',_sans-serif] text-xl font-medium absolute left-9 top-32 w-[344px] h-[115px] overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                  {review.text}
                </div>
              </div>
              <div className="bg-[#8f2279] pt-6 pr-[135px] pb-6 pl-[135px] flex flex-col gap-1 items-center justify-end self-stretch shrink-0 h-[124px] relative overflow-hidden">
                <div className="text-[rgba(255,255,255,0.60)] text-left font-['WorkSans-Regular',_sans-serif] text-base font-normal relative">{review.company}</div>
                <div className="text-[#ffffff] text-left font-['WorkSans-SemiBold',_sans-serif] text-xl font-semibold relative">{review.name}</div>
              </div>
              <img className="rounded-[50px] shrink-0 w-[84px] h-[84px] absolute left-[166px] top-[314px] overflow-hidden" style={{ objectFit: 'cover' }} src={review.img} />
              <img className="shrink-0 w-[39px] h-8 absolute left-[55px] top-[52px] overflow-visible" src={review.badge} />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[20px] pt-[60px] pr-[72px] pb-[60px] pl-[72px] flex flex-col gap-2.5 items-center justify-start shrink-0 w-full max-w-[1440px] relative">
        <div className="bg-[#ec0868] rounded-[20px] pt-[58px] pr-[86px] pb-[58px] pl-[86px] flex flex-row gap-[102px] items-center justify-start self-stretch shrink-0 h-[427px] relative overflow-hidden">
          <div className="flex flex-col gap-10 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
              <img className="shrink-0 w-[1319.55px] h-[167.45px] absolute left-[-711px] top-[-57.5px] overflow-visible" src="/aboutus/group0.svg" />
              <div className="text-default-white text-left font-['WorkSans-Bold',_sans-serif] text-[50px] font-bold relative overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Looking for a car?
              </div>
              <div className="text-default-white text-left font-['WorkSans-SemiBold',_sans-serif] text-[40px] leading-[26px] font-semibold relative">+537 547-6401</div>
              <div className="text-default-white text-left font-['WorkSans-Regular',_sans-serif] text-base leading-6 font-normal relative w-[586px] h-[53px] overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in<br />Diam tincidunt tincidunt erat <br />at semper fermentum. Id ultricies quis elit magna magna at. Fames etiam quis diam nunc. Gravida auctor fermentum morbi vulputate ac egestas orci. Pretium convallis id diam sed commodo vestibulum lobortis volutpat praesent. Cras nulla semper tellus enim malesuada ornare curabitur dui.
              </div>
            </div>
            <div className="bg-[#8f2279] rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center shrink-0 h-10 relative overflow-hidden">
              <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-base font-semibold relative">Book now</div>
            </div>
          </div>
          <img className="shrink-0 w-[698px] h-[418px] absolute left-[609.5px] top-[45px]" style={{ opacity: 0.45, objectFit: 'cover' }} src="/aboutus/img3.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
