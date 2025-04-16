import React from "react";
import myPhoto from "../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="w-full py-20 px-6 md:px-20 bg-transparent text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Top Section: Photo & About Me */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Left - Hover Zoom + Glow Effect on Image */}
          <div className="flex justify-center group transition-transform duration-300 ease-in-out">
            <img
              src={myPhoto}
              alt="Asmitha Profile"
              className="w-[60%] max-w-sm h-auto object-cover border-sky-500 rounded-md 
                         shadow-[0_0_20px_4px_rgba(0,191,255,0.4)] 
                         group-hover:scale-105 group-hover:shadow-[0_0_30px_6px_rgba(0,191,255,0.7)] 
                         transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Right - About Me Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-sky-300">About Me</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Hi! I'm Asmitha, a curious and creative individual who enjoys exploring both the world of ideas 
              and the beauty of small moments. I’m known for being a great listener, a thoughtful teammate, and someone 
              who approaches challenges with patience and a positive mindset. Outside of work and academics, I love 
              expressing myself through drawing and often find peace in stargazing—it’s my way of reconnecting with 
              nature and clearing my thoughts. Whether I’m sketching on paper or watching constellations on a quiet night, 
              I believe inspiration is all around us. These moments help me stay grounded, imaginative, and open to learning every day.
            </p>
          </div>
        </div>

        {/* Bottom Section: Skills with Hover Glow/Expand */}
        <div className="mt-4 pt-2 transition duration-500 ease-in-out">
          <h2 className="text-3xl font-bold text-sky-300 mb-4 text-center">Skills</h2>

          <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
            {[
              "Java", "C", "Python", "HTML", "CSS", "JavaScript", "React",
              "BigQuery", "Looker Studio", "SQL",
              "GitHub", "VS Code", "Figma", "Power BI", "MS Office"
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-sky-900/40 border border-sky-500 text-sky-300 px-4 py-2 rounded-full 
                           hover:scale-105 hover:shadow-[0_0_12px_2px_rgba(0,191,255,0.6)] 
                           transition-all duration-300 ease-in-out"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
