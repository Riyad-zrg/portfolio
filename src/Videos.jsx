import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import VideoCard from "./components/VideoCard.jsx";
import MaisonRafaelle from "./videos/MaisonRafaelle.mp4";
import MaisonRafaelle_Terrasse1 from "./videos/MaisonRafaelle_Terrasse1.mp4";
import MaisonRafaelle_Terrasse2 from "./videos/MaisonRafaelle_Terrasse2.mp4";
import MeilleurTaux_Bref from "./videos/MeilleurTaux_Bref.mp4";
import Bref_OTacosSedan from "./videos/Bref_OTacosSedan.mp4";
import SL2E_CABARET_VERT_ANIMATION from "./videos/SL2E_CABARET_VERT_ANIMATION.mp4";
/**
 *
 */
function Videos() {
  return (
    <div
      className="videos-page page"
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
          Mes vidéos de stage
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
          <VideoCard
            title="BREF - O'Tacos Sedan"
            description="Réalisation du tournage, du montage et de la voix off."
            videoSrc={Bref_OTacosSedan}
          />

          <VideoCard
            title="BREF - Meilleur Taux Ardennes"
            description="Réalisation du montage et de la voix off."
            videoSrc={MeilleurTaux_Bref}
          />
          <VideoCard
            title="Maison Rafaelle - Préparation de pâtes"
            description="Réalisation du tournage et du montage."
            videoSrc={MaisonRafaelle}
          />

          <VideoCard
            title="Maison Rafaelle - Terrasse 1"
            description="Réalisation du tournage et du montage."
            videoSrc={MaisonRafaelle_Terrasse1}
          />
          <VideoCard
            title="Maison Rafaelle - Terrasse 2"
            description="Réalisation du tournage et du montage."
            videoSrc={MaisonRafaelle_Terrasse2}
          />
          <VideoCard
            title="Animation 2D SL2E"
            description="Réalisation du script, de l'animation et de la voix off."
            videoSrc={SL2E_CABARET_VERT_ANIMATION}
          />
        </div>
        <Link to="/" style={{ marginTop: "2rem", textDecoration: "none" }}>
          <div
            style={{
              background: "linear-gradient(90deg, #8f94fb, #4e54c8)",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "12px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Retour à l'accueil
          </div>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default Videos;
