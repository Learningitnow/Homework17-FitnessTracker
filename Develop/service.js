
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
app.use( express.static('public') );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(require("./routes/html.js"));
// app.use(require("./routes/api.js"));


app.listen(PORT, function() {
    console.log("Servie Start listening on" + PORT );
});