import React from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ChaineYoutube from "./images/minia_mensonges_enfance.jpg";
import ReimsExplorer from "./images/reims_explorer.jpg";
import SquareShipBattle from "./images/squareshipbattle.png";
import TeletCom from "./images/teletcom.png";
import DronisteSiteWeb from "./images/droniste_site_web.png";
import MarioKartScratch from "./images/mariokartscratch.png";
import Hafficom from "./images/Hafficom.png";

/**
 *
 */
function App() {
  return (
    <div
      className="app page"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem 1rem",
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
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            width: "100%",
            maxWidth: "1200px",
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
          <ProjectCard
            image={TeletCom}
            title="Tel&Com"
            description="Site web réalisé sur Framer durant mon stage chez Hafficom. Le site était destiné à un client."
            url="https://riyad-zrg.github.io/Tel-Com/"
          />
          <ProjectCard
            image={DronisteSiteWeb}
            title="Site Web Droniste"
            description="Site web réalisé sur Framer pour un portfolio de droniste."
            url="https://spiky-slide-156314.framer.app/"
          />
          <ProjectCard
            image={MarioKartScratch}
            title="Jeu Mario Kart Scracth"
            description="Jeu Mario Kart réalisé sur Scratch en classe de troisème."
            url="https://scratch.mit.edu/projects/802823811/fullscreen/"
          />
          <ProjectCard
            image={Hafficom}
            title="Vidéos de stage"
            description="Montage, tournage, voix-off et animation 2D réalisés durant mon stage chez Hafficom."
            to="/videos"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
