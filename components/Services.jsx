export default function Services() {
  const services = [
    {
      icon: "👥",
      title: "Expert Survey Teams for Deployment Operations",
      desc: "Providing highly qualified personnel crucial for precise and efficient cable laying.",
    },
    {
      icon: "📋",
      title: "Technical Documentation & Planning",
      desc: "Crafting comprehensive Method of Procedures (MOPs) and other essential technical documentation that underpin successful project execution.",
    },
    {
      icon: "📍",
      title: "Post Installation Deliverables",
      desc: "Generating accurate As-Laid Drawings (ALDs) and Route Position Lists (RPLs), vital for ongoing asset management and future interventions.",
    },
    {
      icon: "🕐",
      title: "24 Hours Support Operation",
      desc: "Support operation, to make sure survey related operation in 100 performing the function.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen w-full bg-gradient-to-r from-[#E5F4FD] to-[#B8E0F5] relative overflow-hidden flex flex-col justify-center py-16 px-4 md:px-20"
    >
      {/* Background isolation - prevents other sections from bleeding through */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E5F4FD] to-[#B8E0F5] z-0"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A5F7A] mb-12">
          Our Services
        </h2>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-[#2E86AB] text-base">
            Comprehensive Solutions for Subsea Projects
          </p>
        </div>

        {/* Services Grid - Compact for single page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/90 p-4 rounded-lg shadow-md backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm mb-1 text-[#2E86AB] leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-tight">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
