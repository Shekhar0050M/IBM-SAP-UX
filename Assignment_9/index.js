const express = require('express');
const fs = require('fs');
const app = express();

// app.get("/", function (req, res) {
//     res.send("Loaded successfully");
// });

// app.get("/loadparams/:id/:name", function (req, res) {
//     console.log(req.params);
//     res.send("Param example");
// });

app.get("/products", function (req, res) {
    const data = fs.readFileSync('products.json', 'utf-8');
    const jsonData = JSON.parse(data);
    res.send(jsonData.products.filter(product => product.brand === "Apple"));
});

// app.use(express.static(__dirname));
// app.get("/about", function (req, res) {
//     // fs.readFile("about.html", function (err, data) {
//     //     if (err) {

//     //     }
//     //     else {
//     //         res.set({ "Content-type": "text/html", "status": 200 });
//     //         res.send(data);
//     //     }
//     res.sendFile(__dirname + "/about.html");
//     console.log("File Read");
// });

// app.get("*", function (req, res) {
//     res.send("Page Not found");
// });

app.listen('5005', function () {
    console.log('Server Started');
});

