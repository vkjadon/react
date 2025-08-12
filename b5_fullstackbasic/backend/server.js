import express from "express";

const app = express();

app.get("/api", (req, res) => {
  const message = "Hello, World!";
  res.json(message);
});

const PORT = process.env.PORT || 3000;

// add 5 users
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
    { id: 6, name: "Eve" },
  ];
  res.json(users);
  // try res.json(users);
});

// add 5 git users
app.get("/api/git", (req, res) => {
  const gitUsers = [
    { id: 1, name: "GitUser1" },
    { id: 2, name: "GitUser2" },
    { id: 3, name: "GitUser3" },
    { id: 4, name: "GitUser4" },
    { id: 5, name: "GitUser5" },
  ];
  res.json(gitUsers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
