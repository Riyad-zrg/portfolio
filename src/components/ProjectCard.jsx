/**
 *
 * @param root0
 * @param root0.image
 * @param root0.title
 * @param root0.description
 */
function ProjectCard({ image, title, description }) {
  return (
    <div
      style={{
        flex: "1 1 280px",
        maxWidth: "300px",
        minWidth: "250px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ color: "#555" }}>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
