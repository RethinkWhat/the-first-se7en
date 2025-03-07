const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./Connection");

const corsOptions = {
    origin: ['https://localhost:5173']
};
app.use(cors(corsOptions));

app.get("/HelloWorld", (req, res) => {
    res.json({
        groupName : "The First Se7en" 
    })
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});

