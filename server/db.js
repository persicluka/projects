const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Hwvnj2e2***",
  host: "localhost",
  port: 5432,
  database: "pern-todo",
});

module.exports = pool;
