const express = require("express");
const path = require("path");

const app = express();

// Middleware (IMPORTANT for form data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static("public"));

// ================= ROUTES =================

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Register page
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});

// ============ LOGIN FUNCTIONALITY ============

// Handle login POST request
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Login Successful</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
            background-color: #f4f4f4;
          }
          .box {
            background: white;
            padding: 30px;
            display: inline-block;
            border-radius: 6px;
          }
          a {
            text-decoration: none;
            color: #007bff;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h2>Login Successful ✅</h2>
          <p>Welcome, ${email}</p>
          <br>
          <a href="/">Go to Home</a>
        </div>
      </body>
      </html>
    `);
  } else {
    res.send("<h2>Login Failed ❌</h2>");
  }
});

// =============================================

// Render PORT
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
