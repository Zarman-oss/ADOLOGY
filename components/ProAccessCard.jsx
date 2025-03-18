export default function ProAccessCard() {
  <div className='w-[248px] h-[155px] bg-[#575859] rounded-[16px] p-4 flex flex-col justify-start items-center gap-3 mt-18'>
    <div className='w-[216px] h-[63px] flex flex-col justify-start items-center gap-2'>
      <div className='w-[216px] h-[25px] text-white text-[18px] font-semibold leading-[140%] tracking-[-0.02em] text-center'>
        Become a Pro Access
      </div>
      <div className='text-white text-[14px] text-center opacity-90'>
        Try your experience for using more features
      </div>
    </div>
    {/* Upgrade to Pro Button */}
    <button className='w-[216px] h-[44px] bg-black text-white text-[16px] font-medium rounded-full flex items-center justify-center px-2 py-3 mt-2'>
      Upgrade to Pro
    </button>
  </div>;
}
