// models/CricketTournamentModel.js
const mongoose = require('mongoose');

const cricketTournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there's a User model for organizers
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  teams: {
    type: [String], // Array of team names participating in the tournament
  },
  location: {
    type: String,
    required: true,
  },
  prize: {
    type: String,
  }
});

const CricketTournament = mongoose.model('CricketTournament', cricketTournamentSchema);

module.exports = CricketTournament;
