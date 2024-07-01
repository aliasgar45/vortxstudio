
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-0">
      <div className="container mx-auto py-10 sm:py-20 mt-16 sm:mt-16 max-w-[640px] w-full">
        <h2 className="text-[color:var(--primary-color)] font-instagram-sans text-base opacity-50">
          Vortx Studio
        </h2>
        <div className="mt-[10px] max-w-[400px] w-full">
          <h1 className="header-line text-xl sm:text-xl md:text-xl">
            Product development partners for SaaS Startups and Enterprises.
          </h1>
        </div>
        <div className="mt-4 max-w-[380px] w-full">
          <p className="header-line text-neutral text-sm sm:text-base">
            We transform ideas into market-ready products that{" "}
            <span className="text-black">
              captivate investors, streamline team building,
            </span>{" "}
            and <span className="text-black">ensure rapid market entry.</span>
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-[24px]">
          <button
            style={{
              background: "linear-gradient(180deg, #fb975d 0%, #f25d07 100%)",
            }}
            className="border border-solid border-[rgba(250,147,87,0.00)] nav-items text-white px-5 py-2 rounded-md "
          >
            Book a call
          </button>
          <button className="border border-solid border-[neutral] px-5 py-2 rounded-md nav-items text-black ">
            View work
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
