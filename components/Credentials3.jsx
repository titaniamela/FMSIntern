export default function Credentials() {
  const certification = {
    icon: "📜",
    heading: "Certifications",
    content:
      "PT FMS is officially registered with the Ministry of Law and Human Rights of the Republic of Indonesia. We also hold ISO 27001, ISO 9001, ISO 45001 certifications.",
  };
  const value = {
    icon: "⚙️",
    heading: "Value Proposition",
    content:
      "Our services are engineered to enhance project efficiency, mitigate risks, and ensure the highest standards of technical integrity.",
  };
  const distinctive = {
    icon: "🌟",
    heading: "Distinctive Value Proposition",
    points: [
      "Precision in Placement: Our survey teams ensure pinpoint accuracy and minimize risk.",
      "Global Insight, Local Execution: Applying global practices to local projects.",
      "Seamless Integration: Working as part of your team for smooth delivery.",
    ],
  };

  const HoverCard = ({ icon, heading, content, points }) => (
    <div className="group relative block w-full h-52 border-2 border-dashed border-[#1A5F7A] bg-blue-50 rounded-xl overflow-hidden transition-transform hover:scale-105 shadow-sm p-4">
      {/* Static Content (Always visible) */}
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-base font-semibold text-[#1A5F7A] mb-1">{heading}</h3>

      {/* Hover Content (Shows more details) */}
      <div className="text-sm text-[#2E86AB] transition-opacity duration-200 opacity-100 group-hover:opacity-100">
        {content && <p>{content}</p>}
        {points && (
          <ul className="list-disc list-inside mt-1">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <section id="credentials3" className="w-full bg-white py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A5F7A] mb-10">
          Our Credentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HoverCard
            icon={certification.icon}
            heading={certification.heading}
            content={certification.content}
          />
          <HoverCard
            icon={value.icon}
            heading={value.heading}
            content={value.content}
          />
          <HoverCard
            icon={distinctive.icon}
            heading={distinctive.heading}
            points={distinctive.points}
          />
        </div>
      </div>
    </section>
  );
}
