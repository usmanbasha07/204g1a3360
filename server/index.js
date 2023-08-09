const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const API_URL = "http://20.244.56.144/train/trains";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE1NjAyNzksImNvbXBhbnlOYW1lIjoiTXkgVHJhaW5zIiwiY2xpZW50SUQiOiI3NmQwYjBkZS04N2Y1LTQ2MTMtODA5Zi1hZjNmOWRjMjhkZmIiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjA0RzFBMzM2MCJ9.59oLsTWZhJxscANWGpQcYOC1OXJdirXY9l-6Thmo4K4";



const filterTrains = (train) => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    const departureTime =
      train.departureTime.Hours * 60 +
      train.departureTime.Minutes +
      train.departureTime.Seconds / 60 +
      train.delayedBy;
    currentTime = currentHours * 60 + currentMinutes + currentSeconds / 60;
    return departureTime > currentTime + 30;
  };
  
  const sortTrains = (firstTrain, secondTrain) => {
    const firstTrainPrice = firstTrain.price.AC + firstTrain.price.sleeper;
    const secondTrainPrice = secondTrain.price.AC + secondTrain.price.sleeper;
  
    if (firstTrainPrice < secondTrainPrice) return -1;
    if (firstTrainPrice > secondTrainPrice) return 1;
    const firstTrainSeatsAvailable =
      firstTrain.seatsAvailable.AC + firstTrain.seatsAvailable.sleeper;
    const secondTrainSeatsAvailable =
      secondTrain.seatsAvailable.AC + secondTrain.seatsAvailable.sleeper;
  
    if (firstTrainSeatsAvailable > secondTrainSeatsAvailable) return -1;
    else if (firstTrainSeatsAvailable < secondTrainSeatsAvailable) return 1;
  
    const firstTrainDepartureTime =
      firstTrain.departureTime.Hours * 60 +
      firstTrain.departureTime.Minutes +
      firstTrain.departureTime.Seconds / 60 +
      firstTrain.delayedBy;
    const bDepartureTime =
      secondTrain.departureTime.Hours * 60 +
      secondTrain.departureTime.Minutes +
      firstTrain.departureTime.Seconds / 60 +
      secondTrain.delayedBy;
  
    return bDepartureTime - firstTrainDepartureTime;
  };
  
  app.post("/trains", async (req, res) => {
    const trains = await axios
      .get(API_URL, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => res.data);
    const result = trains.filter(filterTrains).sort(sortTrains);
  
    res.json(result);
    console.log()
  });

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});