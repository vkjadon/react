import { useNavigate } from "react-router-dom";

const projects = [
  { proj: "b1", title: "Vite Project Home", description:"" },
  { proj: "b2", title: "Summation App", description:"Simple Vite + React App" },
  { proj: "p1", title: "Navigation Bar", description: "Basic Navigation Bar" },
  { proj: "p2", title: "Tic Tac Toe", description: "A famous game given in the React Official Tutorial" },
  { proj: "dl1", title: "Terms Used in Deep Learning", description : "Deep Learning Terminology" },
  { proj: "dl2", title: "Linear Regression (One Feature)", description: "Linear Regression with One Feature" },
  { proj: "dl3", title: "Linear Regression (Multiple Features)", description : "Linear Regression with Multiple Features using Fundamental Approach - Core Python" },
  { proj: "dl4", title: "Logistic Regression", description: "Binary Classification using `make_classification` dataset from SKLearn - Core Python" },
  { proj: "dl5", title: "Logistic Regression", description: "Cat-NoCat Dataset from Kaggale - Core Python" },
]; // Or fetch dynamically

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1.5rem",
        minHeight: "50vh",
      }}
    >
      {projects.map((project, index) => (
        <div
          key={project.proj}
          style={{
            borderRadius: "12px",
            padding: "1.5rem",
            cursor: "pointer",
            textAlign: "center",
            background: [
              "#1f2937", // dark gray
              "#0f766e", // teal
              "#6b21a8", // purple
              "#b45309", // amber
            ][index % 4],
            color: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
          }}
          onClick={() => navigate(`/view/${project.proj}`)}
        >
          <h2 style={{ marginBottom: "0.5rem" }}>
            {project.title.toUpperCase()}
          </h2>
          <p style={{ opacity: 0.85 }}>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
