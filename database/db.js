const databaseName = process.env.NODE_ENV === 'hackathon'
const pgp = require('pg-promise')();
const connectionString = process.env.NODE_ENV === 'production'
  ? process.env.DATABASE_URL
  : `postgres://${process.env.USER}@localhost:5432/hackathon`
// const connectionString = `postgres://${process.env.USER}@localhost:5432/hackathon`
const db = pgp(connectionString);

const createParticipant = (username, email, hackathonidea) => {
  const sql =  `
    INSERT INTO
      participants (username, email, hackathonidea)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
    `
  return db.any(sql, [username, email, hackathonidea])
}

module.exports = {
  createParticipant: createParticipant
}