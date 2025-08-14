import SectionTitle from "./SectionTitle";

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
      "Our services are engineered to enhance project efficiency, mitigate risks, and ensure the highest standards of technical integrity, providing clients with robust and reliable project outcomes.",
  };
  const distinctive = {
    icon: "🌟",
    heading: "Distinctive Value Proposition",
    points: [
      "Precision in Placement: Our survey teams are not just observers; they are active architects of successful deployments, ensuring pinpoint accuracy and minimizing risk.",
      "Global Insight, Local Execution: Leveraging our worldwide project experience, we bring a sophisticated understanding of international best practices, tailored to local operational requirements.",
      "Seamless Integration: We seamlessly integrate with client teams, acting as an extension of their capabilities to ensure cohesive and efficient project delivery from planning through execution.",
    ],
  };

  const HoverCard = ({ icon, heading, content, points }) => (
    <div className="group relative block w-full h-48 border-2 border-dashed border-[#1A5F7A] bg-blue-50 rounded-xl overflow-hidden transition-transform hover:scale-105 shadow-md">
      <div className="flex flex-col justify-start h-full p-4">
        <div className="transition-opacity group-hover:opacity-0">
          <div className="text-2xl text-center mb-5">{icon}</div>
          <h3 className="text-2xl font-semibold text-center text-[#1A5F7A]">
            {heading}
          </h3>
        </div>
        <div className="absolute top-0 left-0 p-4 w-full h-full opacity-0 group-hover:opacity-100 bg-blue-50 overflow-y-auto transition-opacity text-xs text-[#2E86AB] rounded-xl">
          <h3 className="text-2xl font-semibold text-center text-[#1A5F7A] mb-2">
            {heading}
          </h3>
          {content && (
            <p className="text-sm text-justify leading-tight">{content}</p>
          )}
          {points && (
            <ul className="list-disc list-inside text-left mt-1">
              {points.map((point, i) => (
                <li key={i} className="mb-1 leading-tight text-xs">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="credentials4"
      className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col justify-start pt-10 pb-16 px-4 md:px-20"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <SectionTitle>Our Credentials</SectionTitle>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <HoverCard {...certification} />
          <HoverCard {...value} />
          <div className="md:col-span-2">
            <HoverCard {...distinctive} />
          </div>
        </div>
      </div>
    </section>
  );
}
