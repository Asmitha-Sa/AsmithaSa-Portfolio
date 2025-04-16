import React, { useRef } from "react";

const certificates = [
  { src: "/certificates/ADPP.png", alt: "ADPP Certificate" },
  { src: "/certificates/WAMP.png", alt: "WAMP Certificate" },
  { src: "/certificates/NET.png", alt: ".NET Certificate" },
  { src: "/certificates/SUNJAVA.png", alt: "SUNJAVA Certificate" },
  { src: "/certificates/NASSCOM.png", alt: "NASSCOM Certificate" },
  { src: "/certificates/PYTHON.png", alt: "PYTHON Certificate" },
  { src: "/certificates/NPTEL1.png", alt: "NPTEL1 Certificate" },
  { src: "/certificates/NPTEL2.png", alt: "NPTEL2 Certificate" },
  { src: "/certificates/JAVAFOUNDATION.png", alt: "JAVA FOUNDATION Certificate" },
  { src: "/certificates/BASIC.png", alt: "HACKKERRANK Certificate" },
  { src: "/certificates/TCSION.png", alt: "TCSION Certificate" },
  { src: "/certificates/GCC.png", alt: "GOOGLE CLOUD Certificate" },
  // Add more certificates here
];

const Certificates = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="certificates" className="py-1 px-6 text-white">
      <h2 className="text-4xl font-bold text-sky-300 mb-8 text-center">Certificates</h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-sky-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-sky-700"
        >
          ←
        </button>

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-12 py-4 hide-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {certificates.map((cert, index) => (
            <div
            key={index}
            className="flex-shrink-0 w-70 h-52 md:w-[26rem] md:h-64 rounded-lg overflow-hidden border border-sky-400 shadow-lg bg-sky-900/30"
            style={{ scrollSnapAlign: "start" }}
          >
          
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-sky-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-sky-700"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Certificates;
