const express = require("express");
const app = express.Router();
const service = require("../Service/get.services");

app.post("/createRoom", service.createRoom);

app.post("/Booking", service.Booking);

app.get("/getAllRooms", service.getAllRooms);

app.get("/getAllcustomer", service.getAllcustomer);

module.exports = app;
