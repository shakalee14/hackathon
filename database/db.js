const databaseName = process.env.NODE_ENV === 'hackathon'
const pgp = require('pg-promise')();
const CONNECTION_STRING = process.env.NODE_ENV === 'production'
  ? process.env.DATABASE_URL
  : `postgres://${process.env.USER}@localhost:5432/hackathon`
// const CONNECTION_STRING = `postgres://${process.env.USER}@localhost:5432/hackathon`
const db = pgp(CONNECTION_STRING);
const pg = require('pg');

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

const createTeam = (teamname, teammate1, teammate2, teammate3) => {
  const sql =  `
    INSERT INTO
      teams (teamname, teammate1, teammate2, teammate3)
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      *
    `
  return db.any(sql, [teamname, teammate1, teammate2, teammate3])
}

module.exports = {
  createParticipant: createParticipant,
  createTeam: createTeam
}