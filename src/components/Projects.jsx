import React from "react";

const projects = [
  {
    title: "HOTEL BOOKING WEBSITE",
    description:
      "Developed a basic interactive booking system, allowing users to effortlessly select dates and room preferences.",
    tech: "HTML, CSS, JS, PHP | MySQL",
    link: "https://github.com/Asmitha-Sa/HotelBookingSystem", // Replace with your GitHub link
  },
  {
    title: "ONLINE CAKE ORDERING WEBSITE",
    description:
      "Implemented a basic aesthetic website using .NET Framework and added a cart system using JavaScript.",
    tech: "ASP.NET, HTML, CSS, JS | SQL",
    link: "https://github.com/Asmitha-Sa/CravingsWebsite", // Replace with your GitHub link
  },
  {
    title: "CROP PREDICTION AI MODEL",
    description:
      "Built an AI model that analyzes weather, soil, and crop history to forecast yields and help farmers make data-driven decisions.",
    tech: "Python (Pandas, Numpy, Sklearn) | Kaggle Dataset",
    link: "https://github.com/Asmitha-Sa/CropPredictionModel", // Replace with your GitHub link
  },
  {
    title: "SALES & PROFIT DASHBOARD",
    description:
      "Designed a Power BI dashboard with KPI cards, slicers, and DAX calculations for insightful sales performance analysis.",
    tech: "Power BI, DAX, Power Query | Sample Superstore (Kaggle)",
    link: "https://www.linkedin.com/posts/asmitha-sa-11b18b285_powerbi-dataanalytics-datavisualization-activity-7303778043968335872-l035?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVCbucB_Kd5Urp-N9v-suOs2D4Ho0pL71Y", // Replace with your GitHub link
  },
];

const Projects = () => {
  return (
    <div id="projects" className="text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-sky-300 mb-6 text-center">Projects</h2>

      <div className="relative border-l-4 border-sky-500 pl-6 max-w-3xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="mb-10 relative">
            <div className="absolute -left-3 top-1 w-4 h-4 bg-sky-500 rounded-full border-3 border-white"></div>

            <div className="ml-4">
              <h3 className="text-xl font-semibold text-sky-300">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{project.description}</p>
              <p className="text-gray-400 text-sm mt-1">
                <span className="font-semibold text-sky-200">Tech Stack:</span> {project.tech}
              </p>
              <div className="mt-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sky-500 hover:bg-sky-600 text-white text-sm px-4 py-2 rounded transition"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
