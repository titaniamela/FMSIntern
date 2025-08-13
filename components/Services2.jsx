import SectionTitle from "./SectionTitle";

export default function Services() {
  const services = [
    {
      title: "Expert Survey Teams for Deployment Operations",
      desc: "Providing highly qualified personnel crucial for precise and efficient cable laying.",
    },
    {
      title: "Technical Documentation & Planning",
      desc: "Crafting comprehensive Method of Procedures (MOPs) and other essential technical documentation that underpin successful project execution.",
    },
    {
      title: "Post Installation Deliverables",
      desc: "Generating accurate As-Laid Drawings (ALDs) and Route Position Lists (RPLs), vital for ongoing asset management and future interventions.",
    },
    {
      title: "24 Hours Support Operation",
      desc: "Support operation, to make sure survey related operation in 100 performing the function.",
    },
  ];

  return (
    <section
      id="services2"
      className="min-h-screen w-full bg-gradient-to-r from-[#E5F4FD] to-[#B8E0F5] relative overflow-hidden flex flex-col justify-start pb-16 px-4 md:px-20"
      style={{ paddingTop: "100px" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <SectionTitle>Our Services</SectionTitle>

        <p className="text-center max-w-3xl mx-auto text-[#2E86AB] mb-10 text-base">
          Comprehensive Solutions for Subsea Projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A5F7A]/5 to-[#2E86AB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-5">
                <div className="flex gap-1 mb-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#1A5F7A]" />
                  <span className="inline-block w-3 h-3 rounded-full bg-[#2E86AB]" />
                  <span className="inline-block w-3 h-3 rounded-full bg-[#B8E0F5]" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-2 text-[#1A5F7A] leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
              <div className="h-0.5 bg-gradient-to-r from-[#1A5F7A] to-[#2E86AB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
