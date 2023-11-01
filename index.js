const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const route = express.Router();
const User = require('./model/user');
const router = require('./controllers/routes');
var cors = require('cors');
// middleware
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4111;

const mongoURI = "mongodb://localhost:27017/users"

// app.get("/", (req, res) => {
//     res.send("Hello World!");
//   });
app.use("/users", router);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(PORT,
    console.log("Server is running on Port:", PORT)
);




module.exports = app;
