const fs = require("fs");
let usersjson = fs.readFileSync("data/data.json","utf-8");

let data = JSON.parse(usersjson);

console.log(data)