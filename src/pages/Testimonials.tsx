import React, { useEffect, useState } from "react";
import "./Testimonials.css"; // Import the CSS file for the animation

const Testimonials = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      header: "“Key words in the review by client 1”",
      desc: "Description of the review we craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity, our design services ensure a seamless and impactful user experience.",
    },
    {
      id: 2,
      header: "“Key words in the review by client 2”",
      desc: "Description of the review we craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity, our design services ensure a seamless and impactful user experience.",
    },
    {
      id: 3,
      header: "“Key words in the review by client 3”",
      desc: "Description of the review we craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity, our design services ensure a seamless and impactful user experience.",
    },
    {
      id: 4,
      header: "“Key words in the review by client 4”",
      desc: "Description of the review we craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity, our design services ensure a seamless and impactful user experience.",
    },
    {
      id: 5,
      header: "“Key words in the review by client 5”",
      desc: "Description of the review we craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity, our design services ensure a seamless and impactful user experience.",
    },
    {
      id: 6,
      header: "“Key words in the review by client 6”",
      desc: "Description of the review we craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete brand identity, our design services ensure a seamless and impactful user experience.",
    },
  ];
  const totalCards = testimonials.length;
  const cardWidth = screenWidth < 768 ? screenWidth - 48 : 300;
  const gap = 24;
  return (
    <div id="testimonial" className="flex flex-col items-center justify-center">
      <div className="py-20 mt-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="nav-items text-primary">Testimonials</h1>
          <div className="w-[400px] text-center mt-[10px]">
            <p className="text-black">
              Hear from our clients about how our creative solutions have
              transformed their businesses.
            </p>
          </div>
        </div>
        <div
          className="testimonial-slider mt-12"
          style={{ width: `${screenWidth}px` }}
        >
          <div
            className="testimonial-track"
            style={{ width: `${(cardWidth + gap) * totalCards * 2}px` }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ width: `${cardWidth}px`, marginRight: `${gap}px` }}
              >
                <div className="flex flex-col gap-2 mb-2">
                  <h1 className="font-black">{testimonial.header}</h1>
                  <h3 className="nav-items text-[#999]">{testimonial.desc}</h3>
                  <div className="flex flex-row gap-4 items-center justify-start mt-4">
                    <div className="h-[40px] w-[40px] rounded-[100px] bg-[#d9d9d9]"></div>
                    <div>
                      <h1 className="text-[14px] text-black">Joe Clarke</h1>
                      <p className="footer-items">Founder,Dapp</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
