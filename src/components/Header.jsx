import React from "react";
/**
 *Header of the portfolio.
 */
function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
        color: "white",
        padding: "2rem 1rem",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2rem", letterSpacing: "1px" }}>
        Portfolio Riyad-zrg
      </h1>
      <p style={{ marginTop: "0.5rem", color: "rgba(255,255,255,0.8)" }}>
        Mes projets
      </p>
    </header>
  );
}

export default Header;
