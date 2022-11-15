import express from "express";
const app = express();
import path from "path";

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
