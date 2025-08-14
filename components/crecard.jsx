import { useState } from "react";

// Mock SectionTitle component
const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-center text-[#1A5F7A] mb-12">
    {children}
  </h2>
);

export default function Credentials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const credentials = [
    {
      icon: "📜",
      heading: "Certifications",
      content:
        "PT FMS is officially registered with the Ministry of Law and Human Rights of the Republic of Indonesia. We also hold ISO 27001, ISO 9001, ISO 45001 certifications.",
    },
    {
      icon: "⚙️",
      heading: "Value Proposition",
      content:
        "Our services are engineered to enhance project efficiency, mitigate risks, and ensure the highest standards of technical integrity, providing clients with robust and reliable project outcomes.",
    },
    {
      icon: "🌟",
      heading: "Distinctive Value Proposition",
      points: [
        "Precision in Placement: Our survey teams are not just observers; they are active architects of successful deployments, ensuring pinpoint accuracy and minimizing risk.",
        "Global Insight, Local Execution: Leveraging our worldwide project experience, we bring a sophisticated understanding of international best practices, tailored to local operational requirements.",
        "Seamless Integration: We seamlessly integrate with client teams, acting as an extension of their capabilities to ensure cohesive and efficient project delivery from planning through execution.",
      ],
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % credentials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + credentials.length) % credentials.length
    );
  };

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const totalCards = credentials.length;

    if (diff === 0) return "center";
    if (diff === 1 || diff === -(totalCards - 1)) return "right";
    if (diff === -1 || diff === totalCards - 1) return "left";
    return "hidden";
  };

  const Card = ({ credential, position, index }) => {
    const isCenter = position === "center";
    const isLeft = position === "left";
    const isRight = position === "right";

    return (
      <div
        className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${
          isCenter
            ? "z-30 left-1/2 transform -translate-x-1/2"
            : isLeft
              ? "z-20 left-0 transform -translate-x-1/4"
              : isRight
                ? "z-20 right-0 transform translate-x-1/4"
                : "z-10 opacity-0"
        }`}
        onClick={() => !isCenter && setActiveIndex(index)}
      >
        <div
          className={`group relative w-80 h-80 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden transition-all duration-300 ${
            isCenter
              ? "hover:shadow-2xl"
              : "opacity-70 hover:opacity-90 hover:shadow-lg"
          }`}
        >
          {/* Front Face */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center p-6 transition-transform duration-500 ${
              isCenter ? "group-hover:-translate-y-full" : ""
            }`}
          >
            <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">
              {credential.icon}
            </div>
            <h3 className="text-xl font-bold text-[#1A5F7A] text-center leading-tight">
              {credential.heading}
            </h3>
            {isCenter && (
              <div className="absolute bottom-4 text-sm text-[#2E86AB] opacity-60">
                Hover untuk detail
              </div>
            )}
          </div>

          {/* Back Face - Only for center card */}
          {isCenter && (
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-6 bg-gradient-to-br from-[#1A5F7A] to-[#2E86AB] text-white overflow-y-auto">
              <h3 className="text-xl font-bold mb-4 text-center text-white">
                {credential.heading}
              </h3>
              {credential.content && (
                <p className="text-sm text-justify leading-relaxed mb-4 text-blue-100">
                  {credential.content}
                </p>
              )}
              {credential.points && (
                <ul className="space-y-2">
                  {credential.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-blue-100"
                    >
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id="credentials4"
      className="min-h-screen w-full bg-gradient-to-b from-white to-blue-50 relative overflow-hidden flex flex-col justify-center pt-10 pb-16 px-4 md:px-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <SectionTitle>Our Credentials</SectionTitle>

        {/* Carousel Container */}
        <div className="relative h-80 w-full max-w-4xl mx-auto flex items-center justify-center mb-8">
          {credentials.map((credential, index) => (
            <Card
              key={index}
              credential={credential}
              position={getCardPosition(index)}
              index={index}
            />
          ))}
        </div>

        {/* Indicators Only */}
        <div className="flex items-center justify-center">
          <div className="flex space-x-3">
            {credentials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#1A5F7A] scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play hint */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Klik card samping atau dot indicator untuk navigasi
          </p>
        </div>
      </div>
    </section>
  );
}
