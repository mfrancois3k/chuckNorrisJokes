const pgp = require("pg-promise")();

const db = pgp(
  process.env.DATABASE_URL ||
    // modify the following string with your user name:
    // || 'postgres://<username>@localhost:5432/<database name>');
    "postgres://mohamedbgassama@localhost:5432/chuck_norris"
);

module.exports = db;
