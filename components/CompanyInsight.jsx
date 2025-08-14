import SectionTitle from "./SectionTitle";

export default function CompanyInsight() {
  const images = [
    {
      src: "/images/2.png",
      alt: "Our Office",
      caption: "Modern workspace with collaborative environment.",
    },
    {
      src: "/images/1.png",
      alt: "Monitoring Station",
      caption: "Staff monitoring real-time operations with advanced tools.",
    },
  ];

  return (
    <section
      id="company-insight"
      className="min-h-screen w-full bg-gradient-to-r from-[#E5F4FD] to-[#B8E0F5] relative overflow-hidden flex flex-col justify-start pt-10 pb-16 px-4 md:px-20"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <SectionTitle>Company Insight</SectionTitle>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:bg-[#e0f4ff] transition duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-60 object-cover"
              />
              <div className="p-3">
                <p className="text-sm text-[#2E86AB] text-center">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
