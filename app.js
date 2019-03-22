var express = require('express');
var branchName = require('current-git-branch');
var app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.status(200).send("hello this was built from : " + branchName())
});


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
