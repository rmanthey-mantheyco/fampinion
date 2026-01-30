const express = require("express");
const { Pool } = require("pg");
const path = require("path");

const app = express();
app.use(express.json());

// Serve static files (like form.html)
app.use(express.static(path.join(__dirname)));

// PostgreSQL connection
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// HEALTH + READINESS ENDPOINTS (for monitoring)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/ready", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ready: true });
  } catch (err) {
    res.status(500).json({ ready: false });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Fampinion Web App — Phase 22");
});

// Save user
app.post("/save", async (req, res) => {
  const { name, email, color } = req.body;

  await pool.query(
    "INSERT INTO users (name, email, color) VALUES ($1, $2, $3)",
    [name, email, color]
  );

  res.json({ status: "ok" });
});

// Get all users
app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
  res.json(result.rows);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
