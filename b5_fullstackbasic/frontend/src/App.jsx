import { useEffect, useState } from "react";

import "./App.css";

import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  const [helloData, setHelloData] = useState("");

  const fetchHello = () => {
    axios
      .get("/api")
      .then((response) => {
        setHelloData(response.data);
      })
      .catch((error) => {
        setHelloData("Error: " + error.message);
      });
  };

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex", gap: "40px" }}>
        {/* Left Section */}
        <div style={{ flex: 2 }}>
          <h1>Basic Fullstack Project</h1>
          <h2>Current User: {user.length}</h2>
          {user.map((u) => (
            <div key={u.id}>
              <h3>
                {u.id} : {u.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div style={{ flex: 3 }}>
          <h1>Express API React Frontend</h1>
          <button onClick={fetchHello}>Get Hello</button>
          <h3>Hello Response</h3>
          <p>{helloData}</p>
        </div>
      </div>
    </>
  );
}

export default App;
