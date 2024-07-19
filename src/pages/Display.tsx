import { useEffect, useState } from "react";
import "./Display.css";

const Display = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pairWidth = 360;
  const gap = 10;
  const totalPairs = Math.ceil(screenWidth / (pairWidth + gap)) + 1;
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div
          className="display-slider mt-12"
          style={{ width: `${screenWidth}px` }}
        >
          <div
            className="display-track"
            style={{ width: `${(pairWidth + gap) * totalPairs * 2}px` }}
          >
            {[...Array(totalPairs * 2)].map((_, index) => (
              <div
                key={index}
                className="display-pair"
                style={{ width: `${pairWidth}px`, marginRight: `${gap}px` }}
              >
                <div className="display-item rounded-md"></div>
                <div className="display-item rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
