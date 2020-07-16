const express = require('express');
const app = express();
const cors = require('cors')
const logger = require('morgan');

//declare controllers here:
// const songsController = require('./controllers/SongRoutes');

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

// use controllers here:
// app.use('/songs', songsController);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });