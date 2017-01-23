DROP TABLE IF EXISTS participants;

CREATE TABLE participants(
  username VARCHAR(255),
  email VARCHAR(255),
  hackathonidea TEXT
);

DROP TABLE IF EXISTS teams;

CREATE TABLE teams(
  teamname VARCHAR(255),
  teammate1 VARCHAR(255),
  teammate2 VARCHAR(255),
  teammate3 VARCHAR(255)
);