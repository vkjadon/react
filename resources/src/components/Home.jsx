import { useNavigate } from 'react-router-dom';

const projects = [
                  {"proj":'b1', "title":"Vite Project Home"}, 
                  {"proj":'b2', "title":"Summation App"}, 
                  {"proj":'p1', "title":"Navigation Bar"}, 
                  {"proj":'dl1', "title":"Terms Used in Deep Learning"}, 
                  {"proj":'dl2', "title":"Linear Regression (One Feature)"}, 
                  {"proj":'dl3', "title":"Linear Regression (Multiple Features)"}, 
                ]; // Or fetch dynamically

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", display: "flex", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
      {projects.map(project => (
        <div
          key={project.proj}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            cursor: "pointer",
            textAlign: "center"
          }}
          onClick={() => navigate(`/view/${project.proj}`)}
        >
          <h2>{project.title.toUpperCase()}</h2>
          <p>View Documentation</p>
        </div>
      ))}
    </div>
  );
}
