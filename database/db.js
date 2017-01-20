const databaseName = process.env.NODE_ENV === 'hackathon'
const pgp = require('pg-promise')();
const connectionString = `postgres://${process.env.USER}@localhost:5432/hackathon`
const db = pgp(connectionString);

const createParticipant = function(attributes) {
  const sql =  `
    INSERT INTO
      participants (username, email, hackathonidea)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
    `
  const variables = [
    attributes.username,
    attributes.email,
    attributes.hackathonidea
  ]
  return db.one(sql, variables)

}

module.exports = {
  createParticipant: createParticipant
};