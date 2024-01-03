var express = require('express');
var app = express();
app.use(express.static('public'));
app.get("/", (req, res) => {
    res.send("Welcome To My SDM Projet...");
});
app.listen(7000);
console.log("App Is Listening On Port 7000");