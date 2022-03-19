# football-fixtures

** NOTE: Instructions assume locally running MongoDB instance (mongodb://localhost:27017/football-fixtures) **

1. `cd football-fixtures`
2. `npm i`
3. **In `node_modules/fixture-generator/package.json`, change `"main": "roundrobin.js"` to `"main": "fixtureGenerator.js"`**
4. `npm run seed`
5. `npm run dev`
6. Browse to `http://localhost:3000`