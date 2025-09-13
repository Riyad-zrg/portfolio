import React from "react";
import ProjectCard from "./components/ProjectCard.jsx";

/**
 *
 */
function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Portfolio Riyad-zrg</h1>
      </header>
      <main className="app__main">
        <ProjectCard
          image="https://via.placeholder.com/300x180"
          title="Mon projet"
          description="Une petite description du projet."
        />
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
