const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

// Port for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
