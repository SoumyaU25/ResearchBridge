const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Welcome to Research Bridge API");
});
//console.log("MONGO_URI:", process.env.MONGO_URI);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
