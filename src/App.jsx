import React from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ChaineYoutube from "./images/minia_mensonges_enfance.jpg";
import ReimsExplorer from "./images/reims_explorer.jpg";
import SquareShipBattle from "./images/squareshipbattle.png";
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
            image={ChaineYoutube}
            description="Ma chaîne YouTube."
            title="Chaîne YouTube"
            url="https://youtube.com/@novexy_?si=62frQEAzeKR9Hkkc"
          />
          <ProjectCard
            image={ReimsExplorer}
            title="Reims Explorer"
            description="Conception d’une application en groupe de cinq, en utilisant PHP Symfony et intégrée à une API."
            url="https://sae.harish.fr/home"
          />
          <ProjectCard
            image={SquareShipBattle}
            title="SquareShip Battle"
            description="Jeu vidéo réalisé avec Phaser."
            url="https://riyad-zrg.github.io/SquareShip-Battle/"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
