import dev from "../assets/dev.svg";
import pitch from "../assets/pitch.svg";
import prod from "../assets/prod.svg";
import product from "../assets/productDesign.svg";

const Services = () => {
  const projects = [
    {
      id: 1,
      img: product,
      name: "Product Design",
      desc: "We craft visually stunning and user-centered designs that elevate your brand and engage your audience. From web and mobile interfaces to complete designed product, our design services ensure a seamless and impactful user experience.",
    },
    {
      id: 2,
      img: dev,
      name: "Development",
      desc: "Our development team transforms designs into high-performing, scalable digital products. We specialize in building robust websites, applications, and platforms that meet your business needs and delight your users.",
    },
    {
      id: 3,
      img: pitch,
      name: "Pitch deck designs",
      desc: "Need to make a compelling pitch? Our deck design service creates visually appealing and persuasive presentations that help you communicate your ideas clearly and effectively, whether it's for investors, stakeholders, or internal teams.",
    },
    {
      id: 4,
      img: prod,
      name: "0->1 Product development",
      desc: "From concept to launch, we turn your innovative ideas into reality. Our 0->1 product development service covers everything from initial brainstorming and prototyping to final product release, ensuring a smooth and successful journey to market.",
    },
  ];
  return (
    <div id="services" className="flex flex-col items-center justify-center px-4 sm:px-0">
      <div className="w-full max-w-[640px] py-10 sm:py-20 mt-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="nav-items text-primary">Services</h1>
          <div className="w-full max-w-[400px] text-center mt-[10px]">
            <p>
              We create unique, user-centered designs that are both beautiful
              and functional.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-solid border-[#e6e6e6] rounded-lg p-4"
            >
              <div className="flex flex-col gap-2 mb-2">
                <img className="w-[20px] h-[20px]" src={project.img} />
                <h1 className="font-black">{project.name}</h1>
              </div>
              <h3 className="nav-items">{project.desc}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
