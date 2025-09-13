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
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "2rem",
          padding: "2rem",
          flexGrow: 1,
        }}
      >
        <div
          className="cards"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            padding: "2rem",
            flexGrow: 1,
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
