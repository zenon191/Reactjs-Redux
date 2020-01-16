const express = require("express");
const cors = require("cors");
const app = express();
const _ = require("lodash");

app.use(cors());
const server = app.listen(8080, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/device_summary", (req, res) => {
  const num = Math.floor(Math.random() * 10000);
  const getData = () => {
    res.send([
      { name: "IOS", number: num },
      { name: "Android", number: 10000 - num }
    ]);
  };
  setTimeout(getData, 10000);
});

app.get("/ranking", (req, res) => {
  const getData = () => {
    res.send([
      { day: "Day 5", number: Math.floor(Math.random() * 100) },
      { day: "Day 2", number: Math.floor(Math.random() * 100) },
      { day: "Day 3", number: Math.floor(Math.random() * 100) },
      { day: "Day 4", number: Math.floor(Math.random() * 100) },
      { day: "Day 1", number: Math.floor(Math.random() * 100) },
      { day: "Day 6", number: Math.floor(Math.random() * 100) },
      { day: "Day 7", number: Math.floor(Math.random() * 100) }
    ]);
  };
  setTimeout(getData, 15000);
});

app.get("/device_by_hour", (req, res) => {
  const getDataHeatChart = () => {
    res.send(
      _.map(
        [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday"
        ],
        day => ({
          name: day,
          data: _.map(_.range(0, 24), time => ({
            x: `${time}:00`,
            y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
          }))
        })
      )
    );
  };
  setTimeout(getDataHeatChart, 5000);
});
