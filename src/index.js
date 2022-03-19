const path = require('path');
const express = require('express');
const { generateRandomFixture } = require('fixture-generator');
const connectDatabase = require('./database/connect-database');
const FootbalTeam = require('./models/football-team');

connectDatabase('mongodb://localhost:27017/football-fixtures');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/fixtures', async (req, res, next) => {
  const footballTeams = await FootbalTeam.find({});
  console.log(footballTeams);
  const fixtures = generateRandomFixture(footballTeams);
  console.log(fixtures);
  res.render('fixtures/index', { fixtures });
});

app.use('*', (req, res, next) => res.redirect('/fixtures'));

app.listen(3000, () => console.log('listening at http://localhost:3000'));
