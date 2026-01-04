const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    res.redirect("/home");
  } else {
    res.send("Login failed");
  }
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Health check (important for Render)
app.get("/health", (req, res) => {
  res.send("OK");
});

// PORT (RENDER COMPATIBLE)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
