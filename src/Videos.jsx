import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import VideoCard from "./components/VideoCard.jsx";
import MaisonRafaelle from "./videos/MaisonRafaelle.mp4";
import MeilleurTaux_Bref from "./videos/MeilleurTaux_Bref.mp4";

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
            title="Maison Rafaelle - Terrasse 2"
            description="Tournage et montage d'une seconde vidéo de présentation."
            videoSrc={MaisonRafaelle}
          />
          <VideoCard
            title="Meilleur Taux - BREF"
            description="Voix-off et montage de la vidéo publicitaire."
            videoSrc={MeilleurTaux_Bref}
          />
        </div>
        <Link
          to="/portfolio"
          style={{ marginTop: "2rem", textDecoration: "none" }}
        >
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
