import express from "express";
import cors from "cors";

//components
import Connection from "./connection/db.js";
import DefaultData from "./Default.js";
import News from "./route/news.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", News);

Connection();

app.listen(8000, () => {
  console.log("server started at port 8000");
});

DefaultData();
