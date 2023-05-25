import express from "express";

const router = express.Router();
//all routes in here are starting with /events
router.get("/", (req, res) => {
  res.send(["event1", "event2"]);
});

export default router;
