const express = require("express");

const app = express();

app.use(express.json());


//route imports

const agency = require("./routes/AgencyRoute");

app.use("/task",agency);

module.exports=app;