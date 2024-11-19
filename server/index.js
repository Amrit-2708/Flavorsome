require('./dbConnect')
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());



const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", UserSchema);

app.get("/", (req, res)=>{
  res.status(200).send("Server running perfectly");
})


app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const data = await User.create({ name, email, password });
    const member = await data.save();
    res
      .status(200)
      .send({ message: "Account created successfully, Now Login", id: member._id });
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyPattern.email) {
        return res
          .status(400)
          .send({ message: "Account with this email id already exists" });
      }
    }
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ message: "Account not found, please signup first" });
    } else {
      if (user.email === email && user.password === password) {
        res
          .status(200)
          .send({ message: "Logged in successfully", id: user._id });
      } else if (user.email === email && user.password !== password) {
        res.status(400).send({ message: "Incorrect password" });
      }
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.listen(4001, () => {
  console.log("server is running");
});
