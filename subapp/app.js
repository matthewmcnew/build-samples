var express = require('express');
const fs = require('fs');
var app = express();
const PORT = process.env.PORT || 3000;

console.log("build from subapp");

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
