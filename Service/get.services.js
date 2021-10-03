const room = [];
const Booking = [];
const roomID = 25;
const service = {
  // creating a Room
  async createRoom(req, res) {
    try {
      if (req.body.no_of_seats) {
        room.no_of_seats = req.body.no_of_seats;
      } else {
        res
          .status(400)
          .send({ no_of_seats: "pls specify no of seats for room" });
      }
      if (req.body.amenities) {
        room.amenities = req.body.amenities;
      } else {
        res
          .status(400)
          .send({ amenities: "pls specify required amenities for room" });
      }
      if (req.body.price) {
        room.price = req.body.price;
      } else {
        res.status(400).send({ price: "pls specify required price for room" });
      }
      room.push(req.body);
      console.log(room);

      res.send("Room is successfully created");
    } catch (error) {
      console.log("error in creating a room", error);
      res.send("error in creating a room", error);
    }

    //
    const availableRooms = room.filter((room) => {
      if (room.length == 0) {
        return true;
      } else {
        room.filter((Booking) => {
          if (Booking.date == req.body.date) {
            return "this room is already Booked";
          }
        });
      }
    });
    res.status(400).send({ room: "this room is already Booked" });
    console.log(availableRooms);
  },

  // Booking a room
  async Booking(req, res) {
    try {
      if (req.body.customerName) {
        Booking.customerName = req.body.customerName;
      } else {
        res
          .status(400)
          .send({ customerName: "pls enter customerName for Booking" });
      }
      if (req.body.date) {
        Booking.date = req.body.date;
      } else {
        res.status(400).send({ date: "pls enter date for Booking" });
      }
      if (req.body.startTime) {
        Booking.startTime = req.body.startTime;
      } else {
        res.status(400).send({ startTime: "pls enter startTime for Booking" });
      }
      if (req.body.endTime) {
        Booking.endTime = req.body.endTime;
        roomID++;
      } else {
        res.status(400).send({ endTime: "pls enter endTime for Booking" });
      }

      Booking.push(req.body);
      console.log(Booking);

      res.send("Booking is successfully created");
    } catch (error) {
      console.log("error in Booking a Room", error);
      res.send("error in Booking a Room", error);
    }
  },

  //   getAllRooms
  async getAllRooms(req, res) {
    try {
      res.send(room);
    } catch (error) {
      res.status(400).send("error in getting all rooms", error);
    }
  },

  // getAllcustomer
  async getAllcustomer(req, res) {
    try {
      res.send(Booking);
    } catch (error) {
      res.status(400).send("error in getting all Customers", error);
    }
  },
};

module.exports = service;
