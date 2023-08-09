const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const trains = [
        {
            "trainName": "Hyderabad Exp",
            "trainNumber": "2341",
            "departureTime": {
                "Hours": 23,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 6,
                "AC": 7
            },
            "price": {
                "sleeper": 554,
                "AC": 1854
            },
            "delayedBy": 5
        },
        {
            "trainName": "Patna Exp",
            "trainNumber": "2340",
            "departureTime": {
                "Hours": 6,
                "Minutes": 10,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 10,
                "AC": 1
            },
            "price": {
                "sleeper": 456,
                "AC": 603
            },
            "delayedBy": 0
        },
        {
            "trainName": "Gandhinagar Exp",
            "trainNumber": "2341",
            "departureTime": {
                "Hours": 7,
                "Minutes": 15,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 15,
                "AC": 5
            },
            "price": {
                "sleeper": 382,
                "AC": 615
            },
            "delayedBy": 1
        },
        {
            "trainName": "Delhi Exp",
            "trainNumber": "2343",
            "departureTime": {
                "Hours": 9,
                "Minutes": 45,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 32,
                "AC": 1
            },
            "price": {
                "sleeper": 470,
                "AC": 1458
            },
            "delayedBy": 3
        },
        {
            "trainName": "Panjim Exp",
            "trainNumber": "2349",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 2,
                "AC": 1
            },
            "price": {
                "sleeper": 321,
                "AC": 482
            },
            "delayedBy": 9
        },
        {
            "trainName": "Kolkata Exp",
            "trainNumber": "2345",
            "departureTime": {
                "Hours": 20,
                "Minutes": 15,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 16,
                "AC": 70
            },
            "price": {
                "sleeper": 560,
                "AC": 660
            },
            "delayedBy": 14
        },
        {
            "trainName": "Pune Exp",
            "trainNumber": "2342",
            "departureTime": {
                "Hours": 23,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 6,
                "AC": 7
            },
            "price": {
                "sleeper": 779,
                "AC": 1779
            },
            "delayedBy": 17
        },
        {
            "trainName": "Sikkim Exp",
            "trainNumber": "2345",
            "departureTime": {
                "Hours": 11,
                "Minutes": 23,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 4,
                "AC": 4
            },
            "price": {
                "sleeper": 651,
                "AC": 1427
            },
            "delayedBy": 5
        },
        {
            "trainName": "Bokaro Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 55,
                "AC": 0
            },
            "price": {
                "sleeper": 238,
                "AC": 428
            },
            "delayedBy": 7
        },
        {
            "trainName": "Amritsar Exp",
            "trainNumber": "2346",
            "departureTime": {
                "Hours": 19,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 15,
                "AC": 10
            },
            "price": {
                "sleeper": 540,
                "AC": 740
            },
            "delayedBy": 13
        },
        {
            "trainName": "Mumbai Exp",
            "trainNumber": "2343",
            "departureTime": {
                "Hours": 22,
                "Minutes": 37,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 8,
                "AC": 15
            },
            "price": {
                "sleeper": 550,
                "AC": 650
            },
            "delayedBy": 16
        },
        {
            "trainName": "Jodhpur Exp",
            "trainNumber": "2344",
            "departureTime": {
                "Hours": 11,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 33,
                "AC": 13
            },
            "price": {
                "sleeper": 563,
                "AC": 674
            },
            "delayedBy": 4
        },
        {
            "trainName": "Cuttack Exp",
            "trainNumber": "2346",
            "departureTime": {
                "Hours": 12,
                "Minutes": 3,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 10,
                "AC": 1
            },
            "price": {
                "sleeper": 488,
                "AC": 643
            },
            "delayedBy": 6
        },
        {
            "trainName": "Srinagar Exp",
            "trainNumber": "2349",
            "departureTime": {
                "Hours": 14,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 1,
                "AC": 0
            },
            "price": {
                "sleeper": 937,
                "AC": 1024
            },
            "delayedBy": 10
        },
        {
            "trainName": "Cochin Exp",
            "trainNumber": "2348",
            "departureTime": {
                "Hours": 15,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 1,
                "AC": 0
            },
            "price": {
                "sleeper": 707,
                "AC": 994
            },
            "delayedBy": 11
        },
        {
            "trainName": "Lucknow Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 17,
                "Minutes": 33,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 5,
                "AC": 1
            },
            "price": {
                "sleeper": 270,
                "AC": 393
            },
            "delayedBy": 12
        },
        {
            "trainName": "Chennai Exp",
            "trainNumber": "2344",
            "departureTime": {
                "Hours": 21,
                "Minutes": 35,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 3,
                "AC": 1
            },
            "price": {
                "sleeper": 465,
                "AC": 575
            },
            "delayedBy": 15
        },
        {
            "trainName": "Aizawl Exp",
            "trainNumber": "2342",
            "departureTime": {
                "Hours": 8,
                "Minutes": 30,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 18,
                "AC": 7
            },
            "price": {
                "sleeper": 1182,
                "AC": 1813
            },
            "delayedBy": 2
        },
        {
            "trainName": "Mysore Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 2,
                "AC": 2
            },
            "price": {
                "sleeper": 470,
                "AC": 603
            },
            "delayedBy": 8
        }
];

app.get("/trains", (req, res) => {
  const presentTime = new Date();
  const presentHours = presentTime.getHours();
  const presentMinutes = presentTime.getMinutes();
  const presentSeconds = presentTime.getSeconds();

  const result = trains
    .filter((train) => {
      const departureTime =
        train.departureTime.Hours * 60 +
        train.departureTime.Minutes +
        train.departureTime.Seconds / 60 +
        train.delayedBy;
      const presentTime =
      presentHours * 60 + presentMinutes + presentSeconds / 60;
      return departureTime > presentTime + 30;
    })
    .sort((firstTrain, secondTrain) => {
      const firstTrainPrice = firstTrain.price.AC + firstTrain.price.sleeper;
      const secondTrainPrice = secondTrain.price.AC + secondTrain.price.sleeper;

      if (firstTrainPrice < secondTrainPrice) return -1;
      if (firstTrainPrice > secondTrainPrice) return 1;
      const aSeatsAvailable =
        firstTrain.seatsAvailable.AC + firstTrain.seatsAvailable.sleeper;
      const bSeatsAvailable =
        secondTrain.seatsAvailable.AC + secondTrain.seatsAvailable.sleeper;

      if (aSeatsAvailable > bSeatsAvailable) return -1;
      else if (aSeatsAvailable < bSeatsAvailable) return 1;

      const aDepartureTime =
        firstTrain.departureTime.Hours * 60 +
        firstTrain.departureTime.Minutes +
        firstTrain.departureTime.Seconds / 60 +
        firstTrain.delayedBy;
      const bDepartureTime =
        secondTrain.departureTime.Hours * 60 +
        secondTrain.departureTime.Minutes +
        firstTrain.departureTime.Seconds / 60 +
        secondTrain.delayedBy;

      return bDepartureTime - aDepartureTime;
    });

  res.json(result);
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});