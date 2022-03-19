const connectDatabase = require('./connect-database');
const seed = require('./seed.json');
const FootballTeam = require('../models/football-team');

connectDatabase('mongodb://localhost:27017/football-fixtures');

FootballTeam.insertMany(seed);
