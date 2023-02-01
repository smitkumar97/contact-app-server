const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const routes = require("./routes/routes");
const config = require("./config/config.json");
const cors = require("cors");

// connect
const app = express();
const PORT = process.env.PORT || 3200;
// mongoose.set("strictQuery", false);
// mongoose
// .connect(config.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("Connected to the Database successfully");
// });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
  res.json({"message":"success"})
})

app.use("/", routes);

app.use((error, req, res, next) => {
  res.status(500).json({
    error: error.message,
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});