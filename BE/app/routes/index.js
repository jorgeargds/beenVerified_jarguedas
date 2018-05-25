const routes = require('express').Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/bvde.db');


var express = require('express');
var app = express();

routes.get('/', function (req, res) {
  res.send('BeenVerified API!');
});

routes.get('/getlAllSongs', function (req, res) {
  db.all("SELECT * FROM songs", function (err, rows) {
    res.json(rows);
  });
});

routes.get('/getAllGenres', function (req, res) {
  db.all("SELECT * FROM genres", function (err, rows) {
    res.json(rows);
  });
});


routes.post('/searchSongs', (req, res) => {
  console.log(req.body)
  let sql = "";
  if (req.body.genre) {
    sql = "SELECT s.artist,s.title,s.duration,g.name " +
      "FROM songs AS s " +
      "INNER JOIN genres AS g ON s.genre = g.id " +
      "WHERE s.genre = " + req.body.genre +
      " OR " +
      "s.title LIKE " + "'%" + req.body.song + "%'" +
      " OR " +
      "s.artist LIKE " + "'%" + req.body.artist + "%'"
  }
  else {
    console.log('else')
    sql = "SELECT s.artist,s.title,s.duration " +
      "FROM songs AS s " +
      "INNER JOIN genres AS g ON s.genre = g.id " +
      "WHERE s.title LIKE " + "'%" + req.body.song + "%'" +
      " OR " +
      "s.artist LIKE " + "'%" + req.body.artist + "%'"
  }
  db.all(sql
    , function (err, rows) {
      console.log(rows, err)
      res.json(rows);
    });
});
module.exports = routes;