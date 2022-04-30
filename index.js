const express = require('express');
const app = express()
const port = 3000;

//app.get('/', (req, res) => res.send("Welcome to Tutsmake first Node JS app! Keep things Jiggy ;-) "));
app.get("/" + "modal.html", gotoIndex);
app.route("/");

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
