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
          className="Projects"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Mes projets</h2>
          <div
            className="cards"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem",
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
