
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-[640px] pt-10 pb-4 mt-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-black">Lets talk about your big idea...</p>
          <button
            style={{
              background: "linear-gradient(180deg, #fb975d 0%, #f25d07 100%)",
            }}
            className="transition-transform duration-300 ease-in-out hover:scale-105 border border-solid border-[rgba(250,147,87,0.00)] nav-items text-white px-5 py-2 rounded-md"
          >
            Book a call
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <p className="footer-items">Copyright© 2024 Vortx️ Studio</p>
          <div className="flex flex-row items-center justify-between gap-8">
            <p className="footer-items">hello@vortxstudio.com</p>
            <p className="footer-items">Based in India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
