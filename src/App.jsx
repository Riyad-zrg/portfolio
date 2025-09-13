import React from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

/**
 *
 */
function App() {
  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "2rem",
          }}
        >
          Mes projets
        </h2>
        <div
          className="cards"
          style={{
            display: "flex",
            justifyContent: "flex-center",
            flexWrap: "wrap",
            gap: "2rem",
            width: "100%",
            maxWidth: "1200px",
            padding: "0 1rem",
            boxSizing: "border-box",
          }}
        >
          <ProjectCard
            image="https://via.placeholder.com/300x180"
            title="Projet 1"
            description="Description du premier projet."
          />
          <ProjectCard
            image="https://via.placeholder.com/300x180"
            title="Projet 2"
            description="Description du deuxième projet."
          />
          <ProjectCard
            image="https://via.placeholder.com/300x180"
            title="Projet 3"
            description="Description du troisième projet."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
