var express = require('express');
const fs = require('fs');
var app = express();
const PORT = process.env.PORT || 3000;

fs.readFile('.git/FETCH_HEAD', function read(err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString())
});


app.get('/', function (req, res) {
    fs.readFile('.git/FETCH_HEAD', function read(err, data) {
        if (err) {
            throw err;
        }
        res.status(200).send("hello this was built from : test" + data.toString())
    });

});


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});

function countToTen() {
    for(var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

countToTen();
