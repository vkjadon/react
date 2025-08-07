import { useNavigate } from 'react-router-dom';

const projects = ['b1', 'b2', 'p1']; // Or fetch dynamically

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", display: "flex", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
      {projects.map(project => (
        <div
          key={project}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            cursor: "pointer",
            textAlign: "center"
          }}
          onClick={() => navigate(`/view/${project}`)}
        >
          <h2>{project.toUpperCase()}</h2>
          <p>View Documentation</p>
        </div>
      ))}
    </div>
  );
}
