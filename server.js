const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_request, response) => {
  response.render("index");
});

app.listen(8080, () => {
  console.log("server started on port 8080 , http://localhost:8080");
});
