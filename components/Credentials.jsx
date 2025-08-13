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

  return (
    <section
      id="credentials"
      className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col justify-center py-16 px-4 md:px-20"
    >
      {/* Background isolation - prevents other sections from bleeding through */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A5F7A] mb-12">
          Our Credentials
        </h2>

        {/* Certification card horizontal */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center max-w-3xl w-full flex flex-col items-center">
            <div className="text-3xl mb-2">{certification.icon}</div>
            <h3 className="text-lg font-semibold text-[#1A5F7A] mb-2">
              {certification.heading}
            </h3>
            <p className="text-sm text-[#2E86AB] whitespace-pre-line">
              {certification.content}
            </p>
          </div>
        </div>

        {/* Two value cards side by side */}
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Value Proposition */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center flex flex-col items-center">
            <div className="text-3xl mb-2">{value.icon}</div>
            <h3 className="text-lg font-semibold text-sky-800 mb-2">
              {value.heading}
            </h3>
            <p className="text-sm text-[#2E86AB] whitespace-pre-line">
              {value.content}
            </p>
          </div>

          {/* Distinctive Value Proposition */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center flex flex-col items-center">
            <div className="text-3xl mb-2">{distinctive.icon}</div>
            <h3 className="text-lg font-semibold text-sky-800 mb-2">
              {distinctive.heading}
            </h3>
            <ul className="text-sm text-[#2E86AB] text-left list-disc list-inside">
              {distinctive.points.map((point, i) => (
                <li key={i} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
