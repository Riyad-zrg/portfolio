import React from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import Header from "./components/Header.jsx";

/**
 *
 */
function App() {
  return (
    <div className="app">
      <Header />
      <main
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "2rem",
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
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
