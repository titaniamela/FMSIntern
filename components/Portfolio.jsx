export default function Portfolio() {
  const projects = [
    {
      image: "/portfolio/project1.jpg",
      title: "Oil & Gas Pipeline Survey",
      description:
        "Comprehensive offshore pipeline survey using advanced multibeam sonar and ROV inspection techniques.",
    },
    {
      image: "/portfolio/project2.jpg",
      title: "Subsea Infrastructure Mapping",
      description:
        "High-resolution bathymetric and geophysical survey for infrastructure planning.",
    },
    {
      image: "/portfolio/project3.jpg",
      title: "Cable Route Engineering",
      description:
        "Precision survey and route planning for international submarine cable deployment.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 py-20 px-4 md:px-20 bg-gray-50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Portfolio
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-sky-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
