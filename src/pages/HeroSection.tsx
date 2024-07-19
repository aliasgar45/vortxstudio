const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-0">
      <div className="container mx-auto py-10 sm:py-20 mt-16 sm:mt-16 max-w-[640px] w-full">
        <h2 className="text-[color:var(--primary-color)] body-regular opacity-50">
          Vortx Studio
        </h2>
        <div className="mt-[10px] max-w-[500px] w-full">
          <h1 className="h2-regular sm:text-xl md:text-xl">
            Product development partners for SaaS Startups and Enterprises.
          </h1>
        </div>
        <div className="mt-6 max-w-[380px] w-full">
          <p className="h2-regular text-neutral sm:text-base">
            We transform your vision into market-ready products that{" "}
            <span className="text-black">
              captivate investors, has best performance,
            </span>{" "}
            and <span className="text-black">ensure rapid market entry.</span>
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-[20px]">
          <button
            className="border border-solid border-[rgba(250,147,87,0.00)] body-medium text-white px-5 py-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
            style={{
              background: "linear-gradient(180deg, #fb975d 0%, #f25d07 100%)",
            }}
          >
            Book a call
          </button>
          <button className="transition-transform duration-300 ease-in-out hover:scale-105 border border-solid border-[neutral] px-5 py-2 rounded-md body-medium text-black ">
            View work
          </button>
        </div>
        <div className="mt-[20px]">
          <h2 className="body-regular text-[#999]">
            Or drop us an email {"->"}{" "}
            <span className="text-[#000]">vortxstudio@gmail.com</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
