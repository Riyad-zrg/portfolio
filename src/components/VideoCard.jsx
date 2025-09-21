/**
 *
 * @param root0
 * @param root0.title
 * @param root0.description
 * @param root0.videoSrc
 */
function VideoCard({ title, description, videoSrc }) {
  return (
    <div
      style={{
        flex: "1 1 300px",
        maxWidth: "360px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <video
        src={videoSrc}
        controls
        style={{
          width: "100%",
          height: "500px",
          objectFit: "contain",
          backgroundColor: "black",
        }}
      />
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <h3
          style={{ color: "#ddd", fontSize: "1.2rem", marginBottom: "0.5rem" }}
        >
          {title}
        </h3>
        <p style={{ color: "#ccc", fontSize: "1rem" }}>{description}</p>
      </div>
    </div>
  );
}

export default VideoCard;
