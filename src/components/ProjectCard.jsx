function ProjectCard({ image, title, description }) {
    return (
        <div style={{
            width: "300px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            backgroundColor: "#fff"
        }}>
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
    )
}

export default ProjectCard
