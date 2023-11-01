const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/bands", (req, res) => {
  const bands = [];
  bands[0] = {
    name: "Pink Floyd",
    genre: "Progressive rock",
    formed: 1965,
    topSongs: ["Wish You Were Here", "Comfortably Numb", "Time"],
    country: "United Kingdom",
    image: "images/pinkfloyd.jpg",
  };
  bands[1] = {
    name: "The Beatles",
    genre: "Rock",
    formed: 1960,
    topSongs: ["While My Guitar Gently Weeps", "Let It Be", "Hey Jude"],
    country: "United Kingdom",
    image: "images/thebeatles.jpg",
  };
  bands[2] = {
    name: "Queen",
    genre: "Rock",
    formed: 1970,
    topSongs: [
      "Bohemian Rhapsody",
      "Don't Stop Me Now",
      "Crazy Little Thing Called Love",
    ],
    country: "United Kingdom",
    image: "images/queen.jpg",
  };
  bands[3] = {
    name: "Rolling Stones",
    genre: "Rock",
    formed: 1962,
    topSongs: ["Angie", "Satisfaction", "Paint It Black"],
    country: "United Kingdom",
    image: "images/rollingstones.jpg",
  };
  bands[4] = {
    name: "AC/DC",
    genre: "Hard rock",
    formed: 1973,
    topSongs: ["Live Wire", "Whole Lotta Rosie", "Thunderstruck"],
    country: "Australia",
    image: "images/acdc.jpg",
  };

  res.json(bands);
});

app.listen(3000, () => {
  console.log("Listening");
});
