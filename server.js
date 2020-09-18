const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const queries = require("./queries");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// render home page
app.post("/", (req, res) => {
    res.send('index');
  })

// set server to run on port
app.listen(PORT, () => {
    console.log(`🛥  Server is running and listening on port ${PORT} 🛥`);
  });