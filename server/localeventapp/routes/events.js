import express from "express";
import axios from "axios";
const config = require("./config.json");

const router = express.Router();
const ROOT_URL = config.rootUrl;
const API_KEY = config.apiKey;
const ENCODED_API_KEY = encodeURIComponent(API_KEY);

/**
 * all routes in here are starting with /events

 * Get all events
 */
router.get("/", async (req, res) => {
  try {
    const response = await axios(
      `${ROOT_URL}/events.json?apikey=${ENCODED_API_KEY}`
    );
    console.log("response", response.data);
    res.send(response.data._embedded.events);
  } catch (error) {
    console.error(error);
  }
});

/**
 * Get a specific event by id
 */
// router.get("/:id", async (req, res) => {
//   try {
//     const response = await axios()
//   }

// });
export default router;
