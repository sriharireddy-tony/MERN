const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const ErrorHandler = require("./src/middlewares/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const authRoutes = require("./src/routes/authRoutes");
const matchRoutes = require("./src/routes/matchesRoutes");
const contestRoutes = require("./src/routes/contestRoutes");
const playerRoutes = require("./src/routes/playerRoutes");
const docRoutes = require("./src/routes/docsCRUD");

//MongoDB Node.js Driver version 3.6.0
// If you use these in version 4.0.0 this will deprecate
// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

const port = process.env.PORT || 3000;

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("Mongoose connected to db");

//     app.listen(port, () => console.log(`App listening on port ${port}!`));
//   })
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

  app.listen(port, () => console.log(`App listening on port ${port}!`));

// mongoose.connection.on('connected', ()=>{
//     console.log('Mongoose connected to db')
// });

// mongoose.connection.on('disconnected',()=>{
// console.log('Mongoose connection is disconnected.')
// });

app.use("/auth", authRoutes);
app.use("/match", matchRoutes);
app.use("/contest", contestRoutes);
app.use("/player", playerRoutes);
app.use("/doc", docRoutes);

app.use(ErrorHandler);



app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "404",
    success: "false",
    message: "Route can not found",
  });

//   app.use("/", (req, res) => {
//     res.json("Welcome to nodeJS ..!");
//   });

});
