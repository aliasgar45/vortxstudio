import React from "react";
import sheldonImage from '../assets/images/sheldon.jpg';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img 
    src={src} 
    alt={alt} 
    className="w-64 h-64 object-cover mx-4" 
    onError={() => console.error(`Failed to load image: ${src}`)}
  />
);

type ImageData = {
  src: string;
  alt: string;
};

const ScrollingImages: React.FC = () => {
  const images: ImageData[] = [
    { src: "/images/image1.jpg", alt: "Image 1" },
    { src: sheldonImage, alt: "Image 2" },
    { src: "/images/image3.jpg", alt: "Image 3" },
    { src: "/images/image4.jpg", alt: "Image 4" },
    { src: "/images/image5.jpg", alt: "Image 5" },
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100">
      <div className="py-12">
        <div className="relative w-full overflow-hidden">
          <div className="absolute whitespace-nowrap animate-scroll">
            {images.concat(images).map((img, index) => (
              <Image key={index} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingImages;