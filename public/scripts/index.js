import { generateRandomFixture } from './modules/fixture-generator.mjs';

const generateFixturesBtn = document.getElementById('generate-fixtures');
const fixturesList = document.getElementById('fixtures-list');

const teams = [
  'Arsenal FC',
  'Chelsea FC',
  'Everton FC',
  'Liverpool FC',
  'Manchester City FC',
  'Tottenham Hotspur FC',
];

generateFixturesBtn.addEventListener('click', () => {
  fixturesList.innerHTML = '';
  const fixtures = generateRandomFixture(teams);
  for (const fixture of fixtures) {
    const matchDay = document.createElement('div');
    const matchDayTitle = document.createElement('h2');
    matchDayTitle.textContent = fixture.name;
    const matchDayMatches = document.createElement('ul');
    for (const value of fixture.value) {
      const matchDayMatch = document.createElement('li');
      matchDayMatch.textContent = `${value.teamA} vs. ${value.teamB}`;
      matchDayMatches.appendChild(matchDayMatch);
    }
    matchDay.appendChild(matchDayTitle);
    matchDay.appendChild(matchDayMatches);
    fixturesList.appendChild(matchDay);
  }
});
