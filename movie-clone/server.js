import pg from "pg";
import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const server = express();
server.use(express.json());

const port = process.env.PORT || 3000;

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

server.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

server.post("/api/users", (req, res) => {
  const { username, email, password } = req.body;
  db.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
    [username, email, password]
  )
    .then(() => res.sendStatus(201))
    .catch((e) => console.error(e));
});

server.post("/api/users/login", (req, res) => {
  const { username, password } = req.body;
  db.query("SELECT * FROM users WHERE username = $1 AND password = $2", [
    username,
    password,
  ])
    .then((result) => {
      if (result.rows.length === 0) {
        res.sendStatus(401);
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch((e) => console.error(e));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
