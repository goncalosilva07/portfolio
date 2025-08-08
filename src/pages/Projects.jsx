import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Home() {
  const imagens = import.meta.glob("../assets/projects/*.{jpg,png}", {
    eager: true,
    as: "url",
  });
  const [projectSelected, setProjectSelected] = useState(null);
  const projetos = [
    {
      nome: "SquadHub - Mobile",
      descricao:
        "SquadHubMobile is the mobile version of the SquadHubWeb application, developed for football club management. Although it has fewer features compared to the web version, the mobile application allows users to quickly and intuitively access essential information. The project was developed in Android Studio using Kotlin.",
      imagem: imagens["../assets/projects/squadhubmobile.png"],
    },
    {
      nome: "SquadHub - Web",
      descricao:
        "SquadHubWeb is a web application developed for football club management. The application was built with HTML, CSS, and jQuery for the frontend, while PHP was used to create the API that supports the application's features.",
      imagem: imagens["../assets/projects/squadhubweb.png"],
    },
    {
      nome: "TerminalPortfolio",
      descricao:
        "TerminalPortfolio is my online portfolio, created to showcase my programming skills, academic background, and information about myself. The project was developed with HTML, CSS, and jQuery, providing a clean and functional interface with a CMD terminal-inspired theme.",
      imagem: imagens["../assets/projects/terminalportfolio.png"],
    },
    {
      nome: "APARGES",
      descricao:
        "Aparges is a SaaS application developed with Laravel and Filament for condominium management. It features integration with payment providers such as SIBS and EuPago, allowing for the payment of both subscriptions and condominium fees. The platform includes three separate panels: super administrator, condominium administrator, and property owner. Each panel provides tailored functionalities, enabling complete management of multiple condominiums, including unit and owner management, fee issuance, document sharing, expense tracking, and internal messaging between administrators and owners.",
      imagem: imagens["../assets/projects/aparges.png"],
    },
    {
      nome: "ServPro",
      descricao:
        "ServPro was my first professional project, a web application developed for business management. I built it using ASP.NET with C# for the backend, and HTML, CSS, and jQuery on the frontend. For the database, I used Microsoft SQL Server together with Entity Framework (EF) to handle the data access layer. This project allowed me to gain solid experience in building structured, scalable applications while helping companies manage their internal processes more efficiently.",
      imagem: imagens["../assets/projects/servpro.png"],
    },
    {
      nome: "HogwartsPark",
      descricao:
        "HogwartsPark is an amusement park management software developed in Python, using a graphical interface. The project was created as part of the Algorithms and Programming course.",
      imagem: imagens["../assets/projects/hogwarts.jpg"],
    },
  ];

  const projectsImgs = {
    "SquadHub - Mobile": [
      imagens["../assets/projects/squadhubmobileImg1.png"],
      imagens["../assets/projects/squadhubmobileImg2.png"],
      imagens["../assets/projects/squadhubmobileImg3.png"],
    ],
    "SquadHub - Web": [
      imagens["../assets/projects/squadhubwebImg1.jpg"],
      imagens["../assets/projects/squadhubwebImg2.jpg"],
      imagens["../assets/projects/squadhubwebImg3.jpg"],
      imagens["../assets/projects/squadhubwebImg4.jpg"],
    ],
    TerminalPortfolio: [
      imagens["../assets/projects/terminalPortfolioImg1.png"],
      imagens["../assets/projects/terminalPortfolioImg2.png"],
      imagens["../assets/projects/terminalPortfolioImg3.png"],
      imagens["../assets/projects/terminalPortfolioImg4.png"],
    ],
    APARGES: [
      imagens["../assets/projects/apargesImg1.png"],
      imagens["../assets/projects/apargesImg2.png"],
      imagens["../assets/projects/apargesImg3.png"],
      imagens["../assets/projects/apargesImg4.png"],
    ],
    ServPro: [
      imagens["../assets/projects/servproImg1.png"],
      imagens["../assets/projects/servproImg2.png"],
      imagens["../assets/projects/servproImg3.png"],
      imagens["../assets/projects/servproImg4.png"],
    ],
    HogwartsPark: [
      imagens["../assets/projects/hogwartsImg1.jpg"],
      imagens["../assets/projects/hogwartsImg2.jpg"],
      imagens["../assets/projects/hogwartsImg3.jpg"],
      imagens["../assets/projects/hogwartsImg4.jpg"],
    ],
  };

  return (
    <>
      <main className="w-full lg:w-5/6 mx-auto p-0 md:p-4">
        {!projectSelected ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "linear", delay: 0.1 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4 text-left"
            >
              {projetos.map((projeto, index) => (
                <div
                  key={index}
                  onClick={() => setProjectSelected(projeto.nome)}
                  className="mb-4 break-inside-avoid bg-zinc-800 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-zinc-700 transition"
                >
                  <img
                    src={projeto.imagem}
                    alt={projeto.nome}
                    className="w-full rounded-lg shadow-md"
                  />
                  <h3 className="mt-2 text-white font-bold text-xl">
                    {projeto.nome}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2">
                    {projeto.descricao}
                  </p>
                </div>
              ))}
            </motion.div>
          </>
        ) : (
          <>
            <button
              onClick={() => setProjectSelected(null)}
              className="cursor-pointer mb-4 bg-zinc-700 text-white p-3 mt-5 lg:mt-0 rounded-xl hover:bg-zinc-500 transition"
            >
              ← Back to the projects
            </button>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "linear", delay: 0.1 }}
              className={`columns-1 sm:columns-1 ${
                projectSelected === "SquadHub - Mobile"
                  ? "lg:columns-3"
                  : "lg:columns-2"
              } gap-4 p-4 text-left`}
            >
              {projectsImgs[projectSelected]?.map((img, i) => (
                <div key={i} className="mb-4 break-inside-avoid">
                  <img src={img} className="w-full rounded-lg shadow-md" />
                </div>
              ))}
            </motion.div>
          </>
        )}
      </main>
    </>
  );
}
