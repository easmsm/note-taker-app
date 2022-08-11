const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const { note } = require('./data/db.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// app.post('/api/notes', (req, res) => {});
// app.post('/api/index', (req, res) => {});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});