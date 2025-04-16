import React, { useState } from "react";

const internships = [
  {
    title: "SALESFORCE DEVELOPER INTERN - SMARTINTERNZ",
    duration: "Nov 2023 – Dec 2023",
    description:
      "I engaged with key Salesforce Trailhead modules and I have completed the exhilarating project - Salesforce Developer superset.",
    certificate: "/certificates/salesforce.png",
  },
  {
    title: "CISCO_AICTE INTERN",
    duration: "May 2024 – Jul 2024",
    description:
      "I have learned network essentials, gained basic knowledge about Packet Tracer, and completed the assigned network basics task.",
    certificate: "/certificates/cisco.png",
  },
  {
    title: "GOOGLE CLOUD GENAI - SMARTINTERNZ ",
    duration: "Jul 2024 – Sep 2024 ",
    description:
      "Worked on Generative AI projects using Google Cloud’s AI tools and services. Gained hands-on experience with cloud-based AI models by developing a Nutrition App that analyzes food images and provides nutritional insights. Integrated AI seamlessly into real-world applications, enhancing both functionality and user experience.",
    certificate: "/certificates/GENAI_INTERN.png",
    github: "https://github.com/Asmitha-Sa/ASMIPROJECT", 
  },
  {
    title: "JAVA TECHSTACK INTERN – INFOSYS SPRINGBOARD",
    duration: "Oct 2024 – Dec 2024 ",
    description:
      "Developed an Expense Management System using Angular, Spring Boot, and MySQL. Gained hands-on experience in full-stack development, team collaboration, and agile methodologies.",
    certificate: "/certificates/Infosys.jpg",
  },
];

const Internships = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(null);

  const openModal = (certificate) => {
    setActiveCertificate(certificate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveCertificate(null);
  };

  return (
    <div
      id="internships"
      className="w-full py-1 px-6 md:px-20 bg-transparent text-white"
    >
      <h2 className="text-4xl font-bold text-sky-300 mb-12 text-center">
        Internships
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="bg-sky-900/20 min-h-[240px] border border-sky-400 shadow-[0_0_15px_rgba(0,191,255,0.5)] rounded-xl p-6 transition-transform transition-shadow duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,191,255,0.8)]"
          >
            <h3 className="text-xl font-semibold text-sky-300 mb-2">
              {intern.title}
            </h3>
            <p className="text-sm text-sky-200 mb-2 italic">{intern.duration}</p>
            <p className="text-gray-300 text-sm mb-4">{intern.description}</p>

            <div className="flex gap-3">
              <button
                onClick={() => openModal(intern.certificate)}
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded transition"
              >
                View Certificate
              </button>
              {intern.github && (
                <a
                  href={intern.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded transition"
                >
                  View GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 animate-fadeIn">
          <div className="bg-sky-900 p-4 md:p-2 rounded-lg shadow-lg max-w-xl w-[90%] md:w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-2xl hover:text-sky-400 transition"
            >
              ✕
            </button>
            <img
              src={activeCertificate}
              alt="Certificate"
              className="w-full max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;
