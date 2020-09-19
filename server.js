const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, './public/')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



// set server to run on port
app.listen(PORT, () => {
    console.log(`🛥  Server is running and listening on port ${PORT} 🛥`);
  });