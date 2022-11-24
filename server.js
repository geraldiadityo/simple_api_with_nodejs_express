const express = require("express");
const cors = require("cors");

const app = express();

let corsOption = {
    origin:"http://localhost:8081",
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.json({message:'wellcome to geraldi api machine'});
});

const PORT = process.env.PORT || 8080;

require("./app/router/user.router.js")(app);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});
