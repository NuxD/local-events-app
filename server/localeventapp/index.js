import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));
//using body parser to parse json bodies into JS objects
app.use(bodyParser.json());

import eventsRoutes from "./routes/events.js";

app.get("/", (req, res) => res.send("Main Area"));

app.use("/events", eventsRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
