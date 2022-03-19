const mongoose = require('mongoose');

const footbalTeamSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const FootbalTeam = mongoose.model('FootballTeam', footbalTeamSchema);

module.exports = FootbalTeam;
