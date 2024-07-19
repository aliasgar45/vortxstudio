const Work = () => {
  const projects = [
    {
      id: 1,
      name: "Linkcollect.io",
      tags: ["Product design", "Research"],
    },
    {
      id: 2,
      name: "Linkcollect.io",
      tags: ["Product design", "Research"],
    },
    {
      id: 3,
      name: "Linkcollect.io",
      tags: ["Product design", "Research"],
    },
    {
      id: 4,
      name: "Linkcollect.io",
      tags: ["Product design", "Research"],
    },
  ];
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center px-4 sm:px-0"
    >
      <div className="w-full max-w-[640px] py-10 sm:py-20 mt-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="body-medium text-primary">Work</h1>
          <div className="w-full max-w-[400px] text-center mt-[10px]">
            <p className="h2-regular">
              We create unique, user-centered designs that are both beautiful
              and functional.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
          {projects.map((project) => (
            <div key={project.id} className=" rounded-lg p-1">
              <div className="h-40 sm:h-40 bg-gray-100 mb-4 rounded"></div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="body-regular text-[#999]">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-black body-regular">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
