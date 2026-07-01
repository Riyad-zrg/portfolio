import React from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ChaineYoutube from "./images/minia_mensonges_enfance.jpg";
import SquareShipBattle from "./images/squareshipbattle.png";
import TeletCom from "./images/teletcom.png";
import DronisteSiteWeb from "./images/droniste_site_web.png";
import MarioKartScratch from "./images/mariokartscratch.png";
import Hafficom from "./images/Hafficom.png";
import Taquin from "./images/taquin.png";
import Gulat from "./images/gulat.png";
import Socatoa from "./images/socatoa.png";

/**
 *
 */
function App() {
  return (
    <div
      className="app page"
      style={{ flex: 1, flexDirection: "column", height: "100%" }}
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
        <div className="cards">
          <ProjectCard
            image={ChaineYoutube}
            description="Chaîne Youtube d'animation qui m'a appris à être responsable d'un projet pour le faire vivre et l'améliorer de manière constante."
            title="Chaîne YouTube"
            url="https://youtube.com/@novexy_?si=62frQEAzeKR9Hkkc"
          />
          <ProjectCard
            image={Socatoa}
            title="Socatoa"
            description="Application pour aider ma petite soeur à réviser le brevet de mathématiques. Réalisée en complète autonomie de l'initialisation à la mise en production avec les frameworks NextJs et NestJS."
            url="https://socatoa.eu/"
          />
          <ProjectCard
            image={Taquin}
            title="Taquin React-Native"
            description="Application de Taquin réalisé avec React Native."
            url="https://riyad-zrg-taquin.expo.app/"
          />
          <ProjectCard
            image={Gulat}
            title="Gulat"
            description="Jeu de combat réalisé sur Godot en collaboration avec 3 autres développeurs. J'ai personellement réalisé les animations des personnages."
            url="https://riyad-zrg.github.io/GULAT/"
          />
          <ProjectCard
            image={SquareShipBattle}
            title="SquareShip Battle"
            description="Jeu vidéo de type Shoot 'em up réalisé avec Phaser."
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
            description="Montage, tournage, voix-off réalisés durant mon stage chez Hafficom."
            to="/videos"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
