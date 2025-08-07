import { useParams, useNavigate } from 'react-router-dom';

export default function Viewer() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const src = `/docs/${projectId}/index.html`;

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "1rem", backgroundColor: "#333", color: "#fff", display: "flex", justifyContent: "space-between" }}>
        <span>Viewing: {projectId}</span>
        <button onClick={() => navigate('/')} style={{ backgroundColor: "#00bcd4", border: "none", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer" }}>
          Home
        </button>
      </div>
      <iframe
        src={src}
        title={projectId}
        style={{ flex: 1, width: "100%", border: "none" }}
      />
    </div>
  );
}
