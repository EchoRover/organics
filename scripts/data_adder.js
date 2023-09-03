const fs = require("fs");
let usersjson = fs.readFileSync("data/data.json","utf-8");

let data = JSON.parse(usersjson);

console.log(data)


// {
//     "name": "",
//     "named": false,
//     "image": "images/",
//     "text_form": "",
//     "chemicals_used": [],
//     "needs": [],
//     "products": [],
//     "chapter": "Haloalkanes",
//     "tags": []
    
// }

// {
//     "name": "Nucliophilic substitution reaction of RX",
//     "named": false,
//     "image": "images/",
//     "text_form": "RX +",
//     "chemicals_used": ["RX"],
//     "needs": [],
//     "products": [],
//     "chapter": "Haloalkanes",
//     "tags": ["Nucliophilic substitution","Nucliophile",""]
    
// }