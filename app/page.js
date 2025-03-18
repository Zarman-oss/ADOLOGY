'use client';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState } from 'react';

// Load Google Font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular & Bold
});

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [brandName, setBrandName] = useState('Nectar Sleep');
  const [logoSrc, setLogoSrc] = useState('/Ellipse.png');

  const handleLeftClick = () => {
    setBrandName('Nectar Sleep');
    setLogoSrc('/Ellipse.png');
  };

  const handleRightClick = () => {
    if (brandName === 'Nectar Sleep') {
      setBrandName('Casper');
      setLogoSrc('/casper.png');
    } else if (brandName === 'Casper') {
      setBrandName('Purple');
      setLogoSrc('/purple.png');
    } else {
      setBrandName('Nectar Sleep');
      setLogoSrc('/Ellipse.png');
    }
  };

  return (
    <div
      className={`relative w-[1440px] h-[1991px]  ${plusJakartaSans.className}`}
    >
      {/* Right Side */}

      <div className='absolute w-[80vw] h-[1000px] rounded-[18px] left-[350px] top-[22px] flex flex-col justify-start items-start p-6 bg-secondary'>
        <div className='flex flex-row items-start p-6 gap-8 w-[1080px] h-[96px] border-b border-[#575859]'>
          <button className='flex items-center p-[12px_16px] gap-2 w-[121px] h-[48px] bg-[#FEFFFF] rounded-full'>
            <img src='/search1.png' alt='Logo' className='w-5 h-5' />
            <span className="w-[57px] h-[22px] font-['Plus Jakarta Sans'] font-medium text-[16px] leading-[140%] tracking-[-2%]">
              Explore
            </span>
          </button>

          <button className='flex items-center p-[12px_16px] gap-2 w-[121px] h-[48px] bg-[#575859] rounded-full'>
            <img src='/trends.png' alt='Logo' className='w-5 h-5' />

            <span className="font-['Plus Jakarta Sans'] font-medium text-[#D9D9D9]  text-[16px] leading-[140%] tracking-[-2%]">
              Trends
            </span>
          </button>

          <button className='flex items-center p-[12px_16px] gap-[8px] w-[142px] h-[48px] bg-[#575859] rounded-full'>
            <img src='/saved.png' alt='Logo' className='w-5 h-5' />
            <span className="font-['Plus Jakarta Sans'] font-medium text-[#D9D9D9] text-[16px] leading-[140%] tracking-[-2%]">
              Saved Ads
            </span>
          </button>

          {/* Recommendation button */}
          <button className='flex items-center p-[12px_16px] gap-1 w-[121px] h-[48px] bg-[#575859] rounded-full'>
            <img src='/thumbsup.png' alt='Logo' className='w-5 h-5' />

            <span className='flex items-center p-[12px_16px] gap-2 w-[206px] h-[48px] bg-[#575859] rounded-full flex-none order-2 text-[#D9D9D9]'>
              Recommendations
            </span>
          </button>
        </div>
        <div className='flex flex-row items-center px-[24px] gap-[16px] w-[1080px] h-[80px] border-b-[0.5px] border-[#575859]'>
          <div className='flex flex-col items-center justify-center px-[16px] gap-[8px] w-[87px] h-[80px] border-b-2 border-[#FEFFFF]'>
            <span className='w-[55px] h-[22px] font-medium text-[16px] leading-[140%] tracking-[-0.02em] text-white'>
              For You
            </span>
          </div>
          <div className='flex items-center justify-center px-[16px] gap-[8px] w-[106px] h-[80px]'>
            <span className='font-medium text-[16px] leading-[140%] tracking-[-0.02em] text-[#808080]'>
              Add
            </span>
            <span className='font-medium text-[16px] leading-[140%] tracking-[-0.02em] text-[#808080]'>
              Library
            </span>
          </div>
        </div>

        {/* Card section */}
        <div className='flex flex-row items-start p-0 gap-[16px] w-[1032px] h-[250px]'>
          {/* Outer container with flex-row */}
          <div className='flex flex-row items-start p-0 gap-[16px] w-full h-[250px]'>
            {/* Inner container with background, border, and rounded corners */}

            {/* Frame 427319577 */}
            <div className='flex flex-col items-start p-0 w-[333px] h-[250px] bg-[#575859] border border-[#707172] m-3 rounded-[12px]'>
              {/* Header with a bottom border and flex-row layout */}
              <div className='flex flex-row justify-between items-center p-[12px] gap-[8px] w-full h-[44px] border-b border-[#707172]'>
                {/* Following text with custom font */}
                <div className='w-[63px] h-[20px] text-white font-medium text-[14px] leading-[140%] tracking-[-0.02em] text-center'>
                  Following
                </div>

                {/* Flex container for image and percentage */}
                <div className='flex flex-row items-center p-[4px_6px] gap-[4px] bg-[#FEFFFF] rounded-full'>
                  <img src='/green.png' alt='Green' className='w-3 h-3' />

                  {/* Percentage text aligned to the right */}
                  <div className='w-[30px] h-[10px] text-[#101010] font-medium text-[8px] leading-[10px] tracking-[-0.01em] ml-auto'>
                    5,789%
                  </div>
                </div>
              </div>
              {/* Frame 427319576 */}
              <div className='flex flex-col justify-between items-start p-[12px] gap-[12px] w-[333px] h-[206px] flex-none order-1 flex-grow'>
                <div className=' w-[257px] h-[15px] font-jakar font-semibold text-[12px] leading-[15px] tracking-[-0.01em] text-white flex-none whitespace-nowrap'>
                  5,824 Fresh Campaigns from this Brand Group
                </div>

                {/* Frame 1000002971*/}
                <div className='flex flex-col items-start p-0 gap-4 mx-auto w-[309px] h-[152px] flex-none order-1 align-self-stretch flex-grow-0'>
                  {/* Frame 427319515 */}
                  <div className='flex flex-row justify-between items-center p-0 gap-[30px] w-[309px] h-[40px] rounded-[8px] flex-none order-0 self-stretch flex-grow-0'>
                    {/* Frame 1000002973 */}
                    <div className='flex flex-row items-center p-0 gap-2 w-[133px] h-[40px] flex-none order-0 flex-grow-0'>
                      {/* Ellipse Image with adjusted vertical alignment */}
                      <img src='/Ellipse.png' alt='Green' className='w-9 h-9' />

                      {/* Frame 427319418 */}
                      <div className='flex flex-col justify-center w-[85px] h-[20px] font-medium text-white text-[14px] leading-[140%] tracking-[-0.02em]'>
                        Nectar sleep
                        <div className='w-[74px] h-[15px] font-normal text-[#D9D9D9] text-[12px] leading-[15px] tracking-[-0.01em] whitespace-nowrap'>
                          1,718 new adds
                        </div>
                      </div>
                    </div>

                    {/* Frame 1000002975 */}
                    <div className='flex flex-row justify-center items-center p-[4px_8px] gap-[8px] w-[77px] h-[20px] bg-[#FEFFFF] rounded-full flex-none order-1 flex-grow-0'>
                      <img src='/incog.png' alt='Green' className='w-3 h-3' />
                      <div className="w-[45px] h-[10px] font-['Plus Jakarta Sans'] font-medium text-[8px] leading-[10px] text-center tracking-[-0.01em] text-[#101010]">
                        Competitor
                      </div>
                    </div>
                  </div>

                  {/* Frame 427319518 */}
                  <div className='flex flex-row justify-between items-center p-0 gap-[30px] w-[309px] h-[40px] rounded-[8px] flex-none order-0 self-stretch flex-grow-0'>
                    {/* Frame  1000002974 */}
                    <div className='flex flex-row items-center p-0 gap-2 w-[133px] h-[40px] flex-none order-0 flex-grow-0'>
                      {/* purple Image with adjusted vertical alignment */}
                      <img src='/purple.png' alt='Green' className='w-9 h-9' />

                      {/* Frame 427319418*/}
                      <div className='flex flex-col justify-center w-[85px] h-[20px] font-medium text-white text-[14px] leading-[140%] tracking-[-0.02em]'>
                        Purple
                        <div className='w-[74px] h-[15px] font-normal text-[#D9D9D9] text-[12px] leading-[15px] tracking-[-0.01em] whitespace-nowrap'>
                          2,643 new adds
                        </div>
                      </div>
                    </div>

                    {/* Frame 1000002975 */}
                    <div className='flex flex-row justify-center items-center p-[4px_8px] gap-[8px] w-[77px] h-[20px] bg-[#FEFFFF] rounded-full flex-none order-1 flex-grow-0'>
                      <img src='/incog.png' alt='Green' className='w-3 h-3' />
                      <div className="w-[45px] h-[10px] font-['Plus Jakarta Sans'] font-medium text-[8px] leading-[10px] text-center tracking-[-0.01em] text-[#101010]">
                        Competitor
                      </div>
                    </div>
                  </div>

                  {/* Frame 427319517 */}
                  <div className='flex flex-row justify-between items-center p-0 gap-[30px] w-[309px] h-[40px] rounded-[8px] flex-none order-0 self-stretch flex-grow-0'>
                    <div className='flex flex-row items-center p-0 gap-2 w-[133px] h-[40px] flex-none order-0 flex-grow-0'>
                      {/* purple Image with adjusted vertical alignment */}
                      <img src='/casper.png' alt='Green' className='w-9 h-9' />

                      <div className='flex flex-col justify-center w-[85px] h-[20px] font-medium text-white text-[14px] leading-[140%] tracking-[-0.02em]'>
                        Casper
                        <div className='w-[74px] h-[15px] font-normal text-[#D9D9D9] text-[12px] leading-[15px] tracking-[-0.01em] whitespace-nowrap'>
                          1,564 new adds
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-row justify-center items-center p-[4px_8px] gap-[8px] w-[77px] h-[20px] bg-[#FEFFFF] rounded-full flex-none order-1 flex-grow-0'>
                      <img src='/heart.png' alt='Green' className='w-3 h-3' />
                      <div className="w-[45px] h-[10px] font-['Plus Jakarta Sans'] font-medium text-[8px] leading-[10px] text-center tracking-[-0.01em] text-[#101010]">
                        Followed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frame 427319580 */}
            <div className='flex flex-col items-start p-0 w-[333px] h-[250px] bg-[#575859] border border-[#707172] m-3 rounded-[12px]'>
              {/* Header with a bottom border and flex-row layout */}
              <div className='flex flex-row justify-between items-center p-[12px] gap-[8px] w-full h-[44px] border-b border-[#707172]'>
                {/* Following text with custom font */}
                <div className='w-[63px] h-[20px] text-white font-medium text-[14px] leading-[140%] whitespace-nowrap tracking-[-0.02em] text-center'>
                  Brand Spotlight
                </div>
                {/* Frame 1000002976 */}

                <div className='flex flex-row items-center p-[4px_6px] gap-[4px]  rounded-full'>
                  <div className='flex flex-row items-center p-0 gap-2 mx-auto w-[40px] h-[16px] flex-none order-1 flex-grow-0'>
                    {/* Your content goes here */}

                    <img
                      src='/arrowleft.png'
                      alt='Left Arrow'
                      className='w-2 h-2 cursor-pointer'
                      onClick={handleLeftClick}
                    />
                    <img
                      src='/rightarrow.png'
                      alt='Right Arrow'
                      className='w-2 h-2 cursor-pointer'
                      onClick={handleRightClick}
                    />
                  </div>
                </div>
              </div>
              {/* Frame 427319576 */}
              <div className='flex flex-col justify-between items-start p-[12px] gap-[12px] w-[333px] h-auto flex-none order-1 flex-grow'>
                {/* Frame 427319515 */}
                <div className='flex flex-row items-center p-0 gap-3 mx-auto w-[309px] h-[40px] rounded-[8px] flex-none order-0 self-stretch flex-grow-0'>
                  {/* Frame 1000002973 */}
                  <img
                    src={logoSrc}
                    alt='Brand Logo'
                    className='w-9 h-9'
                  />{' '}
                  {/* Dynamically change logo */}
                  {/* Frame 427319418*/}
                  <div className='w-[85px] h-[20px] font-medium text-white text-[14px] leading-[140%] tracking-[-0.02em] flex-none order-0 flex-grow-0'>
                    {brandName}
                    <div className='w-[145px] h-[15px] font-semibold text-white text-[12px] leading-[15px] tracking-[-0.01em] flex-none order-1 flex-grow-0'>
                      1780 new ads in 30 days
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-row items-center gap-2'>
                    <img src='/dot.png' alt='Green' className='w-1 h-1' />
                    <span className='text-white text-[10px] font-medium'>
                      More carousel & video ads for engagement
                    </span>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <img src='/dot.png' alt='Green' className='w-1 h-1' />
                    <span className='text-white text-[10px] font-medium'>
                      AI-driven messaging boosts personalization
                    </span>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <img src='/dot.png' alt='Green' className='w-1 h-1' />
                    <span className='text-white text-[10px] font-medium'>
                      Seasonal promos drive conversions
                    </span>
                  </div>
                </div>
                {/* Large Button Cards */}
                <div className='flex flex-row justify-between w-full mt-4 gap-3'>
                  {/* Button 1 */}
                  <button className='flex flex-row justify-center items-center w-[100px] h-[40px] bg-[#707172] text-white text-[10px] font-medium rounded-[6px] gap-2 hover:bg-[#5a5c5a] transition-all'>
                    <img src='/cam.png' alt='Video' className='w-5 h-5' />{' '}
                    {/* Reduced icon size */}
                    <span className='text-white text-[10px] font-medium'>
                      Video Ads
                    </span>
                  </button>

                  {/* Button 2 */}
                  <button className='flex flex-row justify-center items-center w-[100px] h-[40px] bg-[#707172] text-white text-[10px] font-medium rounded-[6px] gap-2 hover:bg-[#5a5c5a] transition-all'>
                    <img src='/pic.png' alt='Image' className='w-5 h-5' />{' '}
                    {/* Reduced icon size */}
                    <span className='text-white text-[10px] font-medium'>
                      Image Ads
                    </span>
                  </button>

                  {/* Button 3 */}
                  <button className='flex flex-row justify-center items-center w-[100px] h-[40px] bg-[#707172] text-white text-[10px] font-medium rounded-[6px] gap-2 hover:bg-[#5a5c5a] transition-all'>
                    <img
                      src='/carasoul.png'
                      alt='Carousel'
                      className='w-5 h-5'
                    />{' '}
                    {/* Reduced icon size */}
                    <span className='text-white text-[10px] font-medium'>
                      Carousel Ads
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Frame 427319579*/}
            <div className='flex flex-col items-start p-0 w-[333px] h-[250px] bg-[#575859] border border-[#707172] m-3 rounded-[12px]'>
              {/* Header with a bottom border and flex-row layout */}
              <div className='flex flex-row justify-between items-center p-[12px] gap-[8px] w-full h-[44px] border-b border-[#707172]'>
                {/* Following text with custom font */}
                <div className='w-[63px] h-[20px] text-white font-medium text-[14px] leading-[140%] whitespace-nowrap tracking-[-0.02em] text-center'>
                  Brand Spotlight
                </div>
                {/* Frame 1000002976 */}
                <div className='flex flex-row items-center p-[4px_6px] gap-[4px]  rounded-full'>
                  <div className='flex flex-row items-center p-0 gap-2 mx-auto w-[40px] h-[16px] flex-none order-1 flex-grow-0'>
                    {/* Your content goes here */}
                  </div>
                </div>
              </div>
              {/* Frame 427319576 */}
              <div className='flex flex-col justify-between items-start p-[12px] gap-[12px] w-[333px] h-auto flex-none order-1 flex-grow'>
                {/* Frame 427319515 */}
                <div className='flex flex-row items-center p-0 gap-3 mx-auto w-[309px] h-[40px] rounded-[8px] flex-none order-0 self-stretch flex-grow-0'>
                  {/* Frame 1000002973 */}
                  <img src='/Ellipse.png' alt='Green' className='w-9 h-9' />

                  {/* Frame 427319418*/}
                  <div className='w-[85px] h-[20px] font-medium text-white text-[14px] leading-[140%] tracking-[-0.02em] flex-none order-0 flex-grow-0'>
                    Nectar sleep
                    <div className='w-[145px] h-[15px] font-semibold text-white text-[12px] leading-[15px] tracking-[-0.01em] flex-none order-1 flex-grow-0'>
                      1780 new ads in 30 days
                    </div>
                  </div>
                </div>
                {/* Bullet Points */}
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-row items-center gap-2'>
                    <img src='/dot.png' alt='Green' className='w-1 h-1' />
                    <span className='text-white text-[10px] font-medium'>
                      More carousel & video ads for engagement
                    </span>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <img src='/dot.png' alt='Green' className='w-1 h-1' />
                    <span className='text-white text-[10px] font-medium'>
                      AI-driven messaging boosts personalization
                    </span>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <img src='/dot.png' alt='Green' className='w-1 h-1' />
                    <span className='text-white text-[10px] font-medium'>
                      Seasonal promos drive conversions
                    </span>
                  </div>
                </div>
                {/* Large Button Cards */}
                <div className='flex flex-row justify-between w-full mt-4 gap-3'>
                  {/* Button 1 */}
                  <button className='flex flex-row justify-center items-center w-[100px] h-[40px] bg-[#707172] text-white text-[10px] font-medium rounded-[6px] gap-2 hover:bg-[#5a5c5a] transition-all'>
                    <img src='/cam.png' alt='Video' className='w-5 h-5' />{' '}
                    {/* Reduced icon size */}
                    <span className='text-white text-[10px] font-medium'>
                      Video Ads
                    </span>
                  </button>

                  {/* Button 2 */}
                  <button className='flex flex-row justify-center items-center w-[100px] h-[40px] bg-[#707172] text-white text-[10px] font-medium rounded-[6px] gap-2 hover:bg-[#5a5c5a] transition-all'>
                    <img src='/pic.png' alt='Image' className='w-5 h-5' />{' '}
                    {/* Reduced icon size */}
                    <span className='text-white text-[10px] font-medium'>
                      Image Ads
                    </span>
                  </button>

                  {/* Button 3 */}
                  <button className='flex flex-row justify-center items-center w-[100px] h-[40px] bg-[#707172] text-white text-[10px] font-medium rounded-[6px] gap-2 hover:bg-[#5a5c5a] transition-all'>
                    <img
                      src='/carasoul.png'
                      alt='Carousel'
                      className='w-5 h-5'
                    />{' '}
                    {/* Reduced icon size */}
                    <span className='text-white text-[10px] font-medium'>
                      Carousel Ads
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 427319583*/}
        <div className='flex flex-col mt-8 items-start p-0 gap-4 mx-2 w-[1032px] flex-none order-1 self-stretch flex-grow-0 '>
          <div className='flex flex-row items-center p-0 gap-2 w-[147px] h-[24px] flex-none order-0 flex-grow-0'>
            {/* Your content goes here */}
            <img src='trophy.png' alt='Green' className='w-6 h-6' />
            <div className='w-[115px] h-[22px] flex-none order-1 flex-grow-0 text-white font-medium text-[16px] leading-[140%] tracking-[-0.02em]'>
              Proven Winners
            </div>
          </div>

          {/* Secondary Cards */}

          <div className='flex flex-row gap-6'>
            {/* First Card */}
            <div className='flex flex-col items-start p-0 gap-2 w-[246px] h-[391px]'>
              <div className='flex-none order-1 self-stretch flex-grow-0'>
                <div className='flex flex-col items-end p-0 w-[246px] h-[391px]'>
                  <div className='flex-none order-0 flex-grow-0'>
                    <div className='flex flex-row justify-between items-center p-3 gap-[20px] w-[246px] h-[44px] bg-[#575859] rounded-t-xl'>
                      <div className='flex-none order-0 flex-grow-0 flex items-center gap-2'>
                        <img
                          src='/Ellipse.png'
                          alt='Green'
                          className='w-6 h-6'
                        />
                        <p className='font-plus-jakarta-sans font-medium text-[14px] leading-[1.4] tracking-[-0.02em] text-white'>
                          Nectar
                        </p>
                      </div>
                      <div className='flex flex-row justify-center items-center p-1 gap-1 w-21 h-5 rounded-full bg-green-200'>
                        <img
                          src='/greenchamp.png'
                          alt='Green'
                          className='w-4 h-4'
                        />
                        <div className='flex-none order-1 flex-grow-0 w-[55px] h-[10px] text-center text-[#16603B] font-plus-jakarta font-medium text-[8px] leading-[10px] tracking-tight'>
                          Proven Winner
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src='/pic1.png'
                    alt='Green'
                    className='w-[246px] h-[246px]'
                  />
                  <div className='flex flex-col items-start p-4 gap-3 w-62 h-24 bg-[#575859] rounded-b-[12px]'>
                    <div className='flex flex-row justify-between items-center w-full'>
                      <div className='flex-none w-36 h-[13px] font-plus-jakarta-sans font-normal text-[#D9D9D9] text-light-silver text-[10px] leading-[13px]'>
                        www.nectarsleep.com
                      </div>
                      <div className='flex flex-row items-center p-2 gap-2 w-18 h-7 bg-[#707172] rounded-full text-[#FFFFFF]'>
                        <div className='flex-none w-[50px] h-[13px] font-plus-jakarta-sans font-medium text-[10px] leading-[13px] text-white'>
                          Shop Now
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between items-center p-2 px-4 gap-2 w-[222px] h-[36px] bg-[#FEFFFF] rounded-full'>
                      <img src='/plus.png' alt='Green' className='w-4 h-4' />
                      <div className='flex flex-col items-center justify-center w-[101px] h-[17px] font-plus-jakarta-sans font-medium text-[12px] leading-[140%] tracking-[-0.02em] text-[#101010]'>
                        Save to Inspiration
                      </div>
                      <img src='/earrow.png' alt='Green' className='w-4 h-4' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className='flex flex-col items-start p-0 gap-2 w-[246px] h-[391px]'>
              <div className='flex-none order-1 self-stretch flex-grow-0'>
                <div className='flex flex-col items-end p-0 w-[246px] h-[391px]'>
                  <div className='flex-none order-0 flex-grow-0'>
                    <div className='flex flex-row justify-between items-center p-3 gap-[20px] w-[246px] h-[44px] bg-[#575859] rounded-t-xl'>
                      <div className='flex-none order-0 flex-grow-0 flex items-center gap-2'>
                        <img
                          src='/Ellipse.png'
                          alt='Green'
                          className='w-6 h-6'
                        />
                        <p className='font-plus-jakarta-sans font-medium text-[14px] leading-[1.4] tracking-[-0.02em] text-white'>
                          Nectar
                        </p>
                      </div>
                      <div className='flex flex-row justify-center items-center p-1 gap-1 w-21 h-5 rounded-full bg-green-200'>
                        <img
                          src='/greenchamp.png'
                          alt='Green'
                          className='w-4 h-4'
                        />
                        <div className='flex-none order-1 flex-grow-0 w-[55px] h-[10px] text-center text-[#16603B] font-plus-jakarta font-medium text-[8px] leading-[10px] tracking-tight'>
                          Proven Winner
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src='/pic1.png'
                    alt='Green'
                    className='w-[246px] h-[246px]'
                  />
                  <div className='flex flex-col items-start p-4 gap-3 w-62 h-24 bg-[#575859] rounded-b-[12px]'>
                    <div className='flex flex-row justify-between items-center w-full'>
                      <div className='flex-none w-36 h-[13px] font-plus-jakarta-sans font-normal text-[#D9D9D9] text-light-silver text-[10px] leading-[13px]'>
                        www.nectarsleep.com
                      </div>
                      <div className='flex flex-row items-center p-2 gap-2 w-18 h-7 bg-[#707172] rounded-full text-[#FFFFFF]'>
                        <div className='flex-none w-[50px] h-[13px] font-plus-jakarta-sans font-medium text-[10px] leading-[13px] text-white'>
                          Shop Now
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between items-center p-2 px-4 gap-2 w-[222px] h-[36px] bg-[#FEFFFF] rounded-full'>
                      <img src='/plus.png' alt='Green' className='w-4 h-4' />
                      <div className='flex flex-col items-center justify-center w-[101px] h-[17px] font-plus-jakarta-sans font-medium text-[12px] leading-[140%] tracking-[-0.02em] text-[#101010]'>
                        Save to Inspiration
                      </div>
                      <img src='/earrow.png' alt='Green' className='w-4 h-4' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className='flex flex-col items-start p-0 gap-2 w-[246px] h-[391px]'>
              <div className='flex-none order-1 self-stretch flex-grow-0'>
                <div className='flex flex-col items-end p-0 w-[246px] h-[391px]'>
                  <div className='flex-none order-0 flex-grow-0'>
                    <div className='flex flex-row justify-between items-center p-3 gap-[20px] w-[246px] h-[44px] bg-[#575859] rounded-t-xl'>
                      <div className='flex-none order-0 flex-grow-0 flex items-center gap-2'>
                        <img
                          src='/Ellipse.png'
                          alt='Green'
                          className='w-6 h-6'
                        />
                        <p className='font-plus-jakarta-sans font-medium text-[14px] leading-[1.4] tracking-[-0.02em] text-white'>
                          Nectar
                        </p>
                      </div>
                      <div className='flex flex-row justify-center items-center p-1 gap-1 w-21 h-5 rounded-full bg-green-200'>
                        <img
                          src='/greenchamp.png'
                          alt='Green'
                          className='w-4 h-4'
                        />
                        <div className='flex-none order-1 flex-grow-0 w-[55px] h-[10px] text-center text-[#16603B] font-plus-jakarta font-medium text-[8px] leading-[10px] tracking-tight'>
                          Proven Winner
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src='/pic1.png'
                    alt='Green'
                    className='w-[246px] h-[246px]'
                  />
                  <div className='flex flex-col items-start p-4 gap-3 w-62 h-24 bg-[#575859] rounded-b-[12px]'>
                    <div className='flex flex-row justify-between items-center w-full'>
                      <div className='flex-none w-36 h-[13px] font-plus-jakarta-sans font-normal text-[#D9D9D9] text-light-silver text-[10px] leading-[13px]'>
                        www.nectarsleep.com
                      </div>
                      <div className='flex flex-row items-center p-2 gap-2 w-18 h-7 bg-[#707172] rounded-full text-[#FFFFFF]'>
                        <div className='flex-none w-[50px] h-[13px] font-plus-jakarta-sans font-medium text-[10px] leading-[13px] text-white'>
                          Shop Now
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between items-center p-2 px-4 gap-2 w-[222px] h-[36px] bg-[#FEFFFF] rounded-full'>
                      <img src='/plus.png' alt='Green' className='w-4 h-4' />
                      <div className='flex flex-col items-center justify-center w-[101px] h-[17px] font-plus-jakarta-sans font-medium text-[12px] leading-[140%] tracking-[-0.02em] text-[#101010]'>
                        Save to Inspiration
                      </div>
                      <img src='/earrow.png' alt='Green' className='w-4 h-4' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Forth Card */}
            <div className='flex flex-col items-start p-0 gap-2 w-[246px] h-[391px]'>
              <div className='flex-none order-1 self-stretch flex-grow-0'>
                <div className='flex flex-col items-end p-0 w-[246px] h-[391px]'>
                  <div className='flex-none order-0 flex-grow-0'>
                    <div className='flex flex-row justify-between items-center p-3 gap-[20px] w-[246px] h-[44px] bg-[#575859] rounded-t-xl'>
                      <div className='flex-none order-0 flex-grow-0 flex items-center gap-2'>
                        <img
                          src='/Ellipse.png'
                          alt='Green'
                          className='w-6 h-6'
                        />
                        <p className='font-plus-jakarta-sans font-medium text-[14px] leading-[1.4] tracking-[-0.02em] text-white'>
                          Nectar
                        </p>
                      </div>
                      <div className='flex flex-row justify-center items-center p-1 gap-1 w-21 h-5 rounded-full bg-green-200'>
                        <img
                          src='/greenchamp.png'
                          alt='Green'
                          className='w-4 h-4'
                        />
                        <div className='flex-none order-1 flex-grow-0 w-[55px] h-[10px] text-center text-[#16603B] font-plus-jakarta font-medium text-[8px] leading-[10px] tracking-tight'>
                          Proven Winner
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src='/pic1.png'
                    alt='Green'
                    className='w-[246px] h-[246px]'
                  />
                  <div className='flex flex-col items-start p-4 gap-3 w-62 h-24 bg-[#575859] rounded-b-[12px]'>
                    <div className='flex flex-row justify-between items-center w-full'>
                      <div className='flex-none w-36 h-[13px] font-plus-jakarta-sans font-normal text-[#D9D9D9] text-light-silver text-[10px] leading-[13px]'>
                        www.nectarsleep.com
                      </div>
                      <div className='flex flex-row items-center p-2 gap-2 w-18 h-7 bg-[#707172] rounded-full text-[#FFFFFF]'>
                        <div className='flex-none w-[50px] h-[13px] font-plus-jakarta-sans font-medium text-[10px] leading-[13px] text-white'>
                          Shop Now
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between items-center p-2 px-4 gap-2 w-[222px] h-[36px] bg-[#FEFFFF] rounded-full'>
                      <img src='/plus.png' alt='Green' className='w-4 h-4' />
                      <div className='flex flex-col items-center justify-center w-[101px] h-[17px] font-plus-jakarta-sans font-medium text-[12px] leading-[140%] tracking-[-0.02em] text-[#101010]'>
                        Save to Inspiration
                      </div>
                      <img src='/earrow.png' alt='Green' className='w-4 h-4' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Card End*/}

          {/* Pagination */}
          <div className='flex flex-row justify-between items-center w-[1032px] h-8 p-0 gap-4 self-stretch'>
            {/* Pagination Numbers */}
            <div className='flex flex-row items-center p-3 gap-3 w-[92px] h-8 bg-[#575859] rounded-full'>
              {/* Pagination content goes here */}
            </div>

            {/* Pagination Buttons */}
            <div className='flex flex-row items-center justify-center p-0 gap-2 w-[72px] h-8'>
              <img src='/pagbtn.png' alt='Previous' className='w-7 h-7' />
              <img src='/pagbtn2.png' alt='Next' className='w-7 h-7' />
            </div>
          </div>
        </div>
      </div>

      {/* Left Side */}
      <div
        className='absolute w-[288px] h-[1000px] left-[24px] top-[24px]
                   flex flex-col justify-start items-start
                   gap-[124px] p-[24px] rounded-[16px]
                   bg-[linear-gradient(90deg,rgba(62,62,62,0.2),#1F1F1F_36.5%,rgba(31,31,31,0.5)_66%,rgba(62,62,62,0.2)_100%)]'
      >
        {/* Inner Container */}
        <div className='w-[240px] h-[649px] flex flex-col justify-start items-start gap-[24px] p-0 flex-none order-0 self-stretch flex-grow mt-[4px]'>
          {/* Header Section */}
          <div className='w-[240px] h-[32px] flex flex-row justify-between items-center p-0 flex-none order-0 self-stretch flex-grow-0 my-1'>
            {/* Logo Section (ADOLOGY) */}

            <div className='flex w-[101px] h-[24px] flex-row justify-start items-center gap-[8px] mx-[8px]'>
              <img src='/favicon.png' alt='Logo' className='w-full h-full' />

              <span className='text-white text-[20px] font-bold leading-[120%] tracking-[-0.02em]'>
                ADOLOGY
              </span>
            </div>

            {/*  Left Item Logo Bell Profile */}

            <div className='flex w-[72px] h-[32px] flex-row justify-start items-center gap-[8px] p-0'>
              <img src='/Bell.png' alt='Logo' className='w-full h-full' />
              <img src='/profile.png' alt='Logo' className='w-full h-full' />
            </div>
          </div>
          <div className='w-[240px] border-t border-gray-600 opacity-50'></div>

          {/* Left Column Items */}
          <div className='w-[240px] h-[433px] flex flex-col align-items-start p-0 gap-[3px] flex-none order-1 self-stretch flex-grow'>
            {/* Nadira Button */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className='w-full bg-[#575859] text-white rounded-[100px] flex items-center justify-between p-[12px_16px] my-[8px] transition-all duration-300 ease-in-out'
            >
              <div className='flex items-center gap-[8px]'>
                <img src='/Nadira.png' alt='Logo' className='w-7 h-7' />
                <div className='width-123 height-22 gap-8px'>Nadira Sleep</div>
              </div>
              <img
                src='/arrow.png'
                alt='Dropdown Arrow'
                className={`w-3 h-2 transform transition-transform duration-300 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu with Animation */}
            {dropdownOpen && (
              <div className='w-full bg-[#575859] text-white rounded-[12px] flex flex-col p-[8px] mt-[4px] shadow-lg transition-all duration-300 ease-in-out opacity-100 scale-100'>
                <button className='text-left px-[12px] py-[8px] hover:bg-[#6b6c6d] rounded-[16px] transition-all'>
                  Profile 1
                </button>
                <button className='text-left px-[12px] py-[8px] hover:bg-[#6b6c6d] rounded-[16px] transition-all'>
                  Profile 2
                </button>
                <button className='text-left px-[12px] py-[8px] hover:bg-[#6b6c6d] rounded-[16px] transition-all'>
                  Profile 3
                </button>
              </div>
            )}
            {/* Brand Menu */}
            <button
              className={`w-full bg-white text-black font-[500] text-[16px] leading-[140%] tracking-[-0.02em] rounded-[100px] flex items-center justify-between p-[12px_16px] my-[8px] ${plusJakartaSans.className}`}
            >
              <div className='flex items-center gap-[8px]'>
                <img src='/Iconly.png' alt='Logo' className='w-7 h-7' />
                <div className='text-black'>Brands</div>
              </div>
            </button>

            <button
              className={`w-[240px] h-[48px] flex items-center text-white font-[700] text-[18px] leading-[140%] tracking-[-0.02em] rounded-[100px] pl-3 my-[8px] ${plusJakartaSans.className}`}
            >
              <img src='/glass.png' alt='Search Icon' className='w-7 h-7' />
              <span className='ml-3'>Inspire</span>
            </button>

            <button
              className={`w-[240px] h-[48px] flex items-center text-white font-[700] text-[18px] leading-[140%] tracking-[-0.02em] rounded-[100px] pl-3 my-[8px] ${plusJakartaSans.className}`}
            >
              <img src='/Briefcase.png' alt='Search Icon' className='w-7 h-7' />
              <span className='ml-3'>Market Intelligence</span>
            </button>
            <button
              className={`w-[240px] h-[48px] flex items-center text-white font-[700] text-[18px] leading-[140%] tracking-[-0.02em] rounded-[100px] pl-3 my-[8px] ${plusJakartaSans.className}`}
            >
              <img src='/analytics.png' alt='Search Icon' className='w-7 h-7' />
              <span className='ml-3'>Ad Spend</span>
            </button>
            <button
              className={`w-[240px] h-[48px] flex items-center text-white font-[700] text-[18px] leading-[140%] tracking-[-0.02em] rounded-[100px] pl-3 my-[8px] ${plusJakartaSans.className}`}
            >
              <img src='/tabler.png' alt='Search Icon' className='w-7 h-7' />
              <span className='ml-3'>Track Brand</span>
            </button>
            <button
              className={`w-[240px] h-[48px] flex items-center text-white font-[700] text-[18px] leading-[140%] tracking-[-0.02em] rounded-[100px] pl-3 my-[8px] ${plusJakartaSans.className}`}
            >
              <img src='/module.png' alt='Search Icon' className='w-7 h-7' />
              <span className='ml-3'>Brief Module</span>
            </button>
            <div className='w-[240px] border-t mt-3 border-gray-600 opacity-50'></div>
            <button
              className={`w-[240px] h-[48px] flex items-center text-white font-[700] text-[18px] leading-[140%] tracking-[-0.02em] rounded-[100px] pl-3 my-[8px] ${plusJakartaSans.className}`}
            >
              <img src='/Setting.png' alt='Search Icon' className='w-7 h-7' />
              <span className='ml-3'>Setting</span>
            </button>
            <button
              className={`w-[240px] h-[48px] flex items-center text-white font-[700] text-[18px] leading-[140%] tracking-[-0.02em] rounded-[100px] pl-3 my-[8px] ${plusJakartaSans.className}`}
            >
              <img src='/invite.png' alt='Search Icon' className='w-7 h-7' />
              <span className='ml-3'>Invite</span>
            </button>

            {/* Pro Access Card */}

            <div className='w-[248px] h-[155px] bg-[#575859] rounded-[16px] p-4 flex flex-col justify-start items-center gap-3 mx-auto mt-18'>
              <div className='w-[216px] h-[63px] flex flex-col justify-start items-center gap-2'>
                <div className='w-[216px] h-[25px] text-white text-[18px] font-semibold leading-[140%] tracking-[-0.02em] text-center'>
                  Become a Pro Access
                </div>
                <div className='text-white text-[14px] text-center opacity-90'>
                  Try your experience for using more features
                </div>
              </div>
              <button className='w-[216px] h-[44px] bg-black text-white text-[16px] font-medium rounded-full flex items-center justify-center px-2 py-3 mt-2'>
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
