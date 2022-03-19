const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/fixtures', (req, res, next) => res.render('fixtures/index'));

app.use('*', (req, res, next) => res.redirect('/fixtures'));

app.listen(3000, () => console.log('listening at http://localhost:3000'));
